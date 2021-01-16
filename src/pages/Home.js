import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {

  const [input, setInput] = useState('');

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  }

  const onSearch = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}&key=AIzaSyCjXeTkWHBuciqAqWjPPXwlhUzlxRG-Dxo`)
    .then(response => response.json())
    .then (result => {
      console.log(result);
    }); 
  }

  const onKeyDown = (ev) => {
    if (ev.onKeyCode === 13) {
      onSearch();
    }
  }

  return (
      <MainPageLayout>
        <input type='text' onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
        <button type='button' onClick={onSearch}>Search</button>
      </MainPageLayout>
  )
}

export default Home;