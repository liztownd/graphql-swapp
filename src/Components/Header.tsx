import React from 'react'

interface Props {
    name: string
}

const Header: React.FunctionComponent<Props> = ({ name }) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">GraphQL Star Wars App</h1>
                <p className="lead">Find all the movies your favorite character appeared in.</p>
            </div>
        </div>
    )
}

export default Header
