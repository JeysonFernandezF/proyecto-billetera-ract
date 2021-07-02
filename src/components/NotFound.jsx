import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';



const NotFound = () => {
    return (
        <Fragment>
            <div>
                <h1>404 - Not Found!</h1>
                <Link to="/">
                Ir a Billeteras
                </Link>
            </div>
        </Fragment>
    )
}
export default NotFound
