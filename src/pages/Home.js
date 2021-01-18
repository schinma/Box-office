import React, { useState } from 'react'
import BookGrid from '../components/BookGrid';
import MainPageLayout from '../components/MainPageLayout';
import {apiGET} from '../config';

const Home = () => {

  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setsearchOption] = useState('title');

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  }

  const onSearch = () => {
    let queryString = "/books/v1/volumes?q=";
    
    switch(searchOption) {
      case 'all':
        queryString += `${input}`;
        break;
      case 'title':
        queryString += `+intitle:${input}`;
        break;
      case 'author':
        queryString += `+inauthor:${input}`;
        break;
      default:
          break;
    }
    apiGET(queryString).then(result => {
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

      return <BookGrid data={results}/>;

    }

    return null;
  }

  const onRadioChange = (ev) => {
    setsearchOption(ev.target.value);
  }

  return (
      <MainPageLayout>
        <input type='text' onChange={onInputChange} onKeyDown={onKeyDown} placeholder="search for something" value={input}/>
        <div>
          <label htmlFor="all-search">
            All
            <input id="all-search" type="radio" value="all" name="search-option" onChange={onRadioChange}/>
          </label>
          <label htmlFor="title-search">
            Title
            <input id="title-search" type="radio" value="title" name="search-option" onChange={onRadioChange}/>
          </label>
          <label htmlFor="author-search">
            Author
            <input id="author-search" type="radio" value="author" name="search-option" onChange={onRadioChange}/>
          </label>
        </div>
        <button type='button' onClick={onSearch}>Search</button>
        {renderResults()}
      </MainPageLayout>
  )
}

export default Home;