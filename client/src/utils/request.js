export default (input, init = {}) =>
    fetch(`http://localhost:5000/api${input}`, setAdditionalHeaders(init))
        .then(res => res.json())
        .then(data => {
            data.errors && 
                (() => { throw {type: "ERROR", payload:data.error}})()
            data.warnings && 
                (() => { throw {type: "WARNING", payload:data.warnings}})()
            return data
        })

const setAdditionalHeaders = init => {
    const extendedInit = {
        ...init
    };

    if (!extendedInit.headers) {
        extendedInit.headers = {}
    }

    Object.assign(extendedInit.headers, {
        "accepts":"application/json"
    })
    const authToken = localStorage.getItem('token')
    if (authToken) {
        Object.assign(extendedInit.headers, {
            'Authorization': `Brearer ${authToken}`
        })
    }

    if (extendedInit.body) {
        Object.assign(extendedInit.headers, {
            'Content-Type': 'application/json'
        })
    }
    return extendedInit;
}