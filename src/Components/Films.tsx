import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_FILMS } from '../utils/index'

interface Props {
    newId: string,
    getNewId: (id: string) => void,
}

const Films: React.FunctionComponent<Props> = ({ newId, getNewId }) => {
    
    const { error, data } = useQuery(GET_FILMS, 
        {variables: { newId }})

    let films = data.person.filmConnection.films

    return (
        <div>
            {error ? <p>Error! Check your spelling!</p> :
            <div>
            <h2>Films {data.person.name} appears in:</h2>
            {/* @ts-ignore */}
            {films.map((f) => 
            <div>
            <h3 key={f.id }id={f.id}>{f.title}</h3>
                <h4>Other characters also in this film:</h4>
                <p className="small">Click a name to run a search for that character!</p>
                {f.character.Connection.characters.map((c: {id: string, name: string}) => 
                <p key={c.id} onClick={(e) => [e.preventDefault(), getNewId(c.id)]}>{c.name}</p>, 
                )}
            </div>
            )}  
            </div>   
            }       
        </div>
    )
}

export default Films
