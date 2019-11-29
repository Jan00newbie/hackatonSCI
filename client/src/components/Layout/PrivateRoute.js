import React from 'react'

const PrivateRoute = ({ children, ...rest }) =>
    <Route
        {...rest}
        render={({ location }) =>
          false 
            ? children
            : (<Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            />)}

      />


export default PrivateRoute