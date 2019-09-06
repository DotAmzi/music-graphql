import React from 'react';
import './App.css';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function App() {

  const { loading, error, data } = useQuery(gql`
    {
      artists{
        name
        albuns{
          name
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    data.artists.map((artist, indexArtist) => {
      return (
        <div key={indexArtist}>
          <b>Nome: </b> 
          {artist.name} <br/>
          <b>Albuns</b> <br/>
          <div style={{paddingLeft: "15px"}}>
            {artist.albuns.map((album, indexAlbum) => (<div key={indexAlbum}>{album.name}</div>))}
          </div>
        </div>
      )
    })
  );
}

export default App;
