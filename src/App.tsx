import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header'

function App() {
  const searchRef= useRef<HTMLInputElement>(null);
  if (searchRef && searchRef.current) { searchRef.current.value = ''; }

  function search(e: any, searchRef: string){
    e.preventDefault();
    let query = {
      name: {searchRef}
    }
    console.log(query)
  }

  return (
    <div >
     <Header/>
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
