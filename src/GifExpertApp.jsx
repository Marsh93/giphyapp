import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import Alert from './components/Alert';
import GifGrid from './components/GifGrid';
import 'animate.css';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [messageError, setMessageError] = useState('');

  return (
    <>
      <h1>Gif Search App</h1>
      
      <AddCategory setCategories={ setCategories } setHasError={ setHasError } setMessageError={ setMessageError } />
      
      <hr />
      
      { hasError && <Alert reason={ messageError } /> }
      
      {
        categories.map( (category, i) => (
          <GifGrid 
            className=""
            key={category} 
            category={category} 
          />
        ))
      }
      
    </>

  )
}
