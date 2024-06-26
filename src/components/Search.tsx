import React, { useState } from 'react';

const SearchBar = (props: any) => {
  const [searchWord, setSearchWord] = useState("")
  const searchInApi = () => {
    setSearchWord(document.querySelector('#search-word').value)
    console.log(searchWord);
    
    fetch (`https://the-sneaker-database.p.rapidapi.com/search?limit=15&query=${searchWord}`, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f50ad8c12emsh2f681458eb945fcp140c6djsn1c02d5dff3f5',
            'x-rapidapi-host': 'the-sneaker-database.p.rapidapi.com'
        }
    })
    .then((response) => response.json())
    .then((data) => {
      if (!data.results[1]) {
        console.log('vide');
        props.setData(null)
        console.log(props.data);
        
      } else {
        props.setData(data.results);
        console.log(data.results);
      }

    })
    .catch((error) => console.log(error));
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchInApi();
    }
  };


  return (
    <div style={{ padding: '20px' }}>
      <input
        id='search-word'
        type="text"
        placeholder="Rechercher..."
        onChange={(e) => {setSearchWord(e.target.value), console.log(searchWord)}
        }
        value={searchWord}
        onKeyPress={handleKeyPress}
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
          marginBottom: '20px'
        }}
      />
      <button onClick={searchInApi}>Rechercher</button>
    </div>
  );
};

export default SearchBar;
