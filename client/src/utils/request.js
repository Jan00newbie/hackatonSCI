export default (input, init = {}) =>
    fetch(`http://localhost:5000/api${input}`, setAdditionalHeaders(init))
        .then(res => res.json())
        .then(data => {
            if(data.errors) {
                throw {type: "ERRORS", payload:data.errors}
            }
            if(data.warnings) {
                throw {type: "WARNINGS", payload:data
                .errors}
            }
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