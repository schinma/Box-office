import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout';
import {apiGET} from '../config';

const Home = () => {

  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  }

  const onSearch = () => {
    apiGET(`/books/v1/volumes?q=${input}`).then(result => {
      setResults(result.items);
    })
  }

  const onKeyDown = (ev) => {
    if (ev.onKeyCode === 13) {
      onSearch();
    }
  }

  const renderResults = () => {
    if (results && results.length === 0) {
        return  <div>No Result</div>
    }

    if (results && results.length > 0) {

      return (
        <div>
          {results.map(elem => (
            <div key={elem.id}>{elem.volumeInfo.title}</div>
          ))}
        </div>
      );

    }

    return null;
  }

  return (
      <MainPageLayout>
        <input type='text' onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
        <button type='button' onClick={onSearch}>Search</button>
        {renderResults()}
      </MainPageLayout>
  )
}

export default Home;