import React, { useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import './App.css';
import Header from './Components/Header'
import GET_PEOPLE from './utils';

function App() {
  const searchRef= useRef<HTMLInputElement>(null);
  if (searchRef && searchRef.current) { searchRef.current.value = ''; }
  const [allPeople, setAllPeople] = useState()
  const [newId, setNewId] = useState('cGVvcGxlOjE=')
  const { loading, error, data } = useQuery(GET_PEOPLE)

  if (data) {
    setAllPeople(data)
    console.log('all people', allPeople)
  }



  function search(e: any, searchRef: string){
    e.preventDefault();
    // @ts-ignore
    let people = allPeople.people
    let index = people.findIndex((p: {name: string, id: string}) => p.name === searchRef)
    let id: string = people[index].id
    setNewId(id)
    console.log('newId', newId)
  }


  return (
    <div >
    {/* <Header/> */}
     <div className="container-md">
     <h2>Search for a character:</h2>
     <div className="input-group mb-3">
  <input type="text" className="form-control" 
  placeholder="Search Character" 
  aria-label="search" 
  aria-describedby="search" 
  ref={searchRef}/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" 
    type="button" 
    id="search"
    // @ts-ignore
    onClick={(e)=> search(e, searchRef.current.value)}>Search</button>
  </div>
</div>
</div>
    </div>
  );
}

export default App;
