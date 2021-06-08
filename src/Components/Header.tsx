import React from 'react'

interface Props {
    title: string
    subtitle: string
}

const Header: React.FunctionComponent<Props> = ({ title, subtitle }) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{title}</h1>
                <p className="lead">{subtitle}</p>
            </div>
        </div>
    )
}

export default Header
