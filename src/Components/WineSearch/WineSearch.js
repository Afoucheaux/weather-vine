import React, { useState } from 'react';
import './WineSearch.css';

const WineSearch = ({searchWine}) => {
  const [wineStyle, setWineStyle] = useState('')
  const [wineVintage, setWineVintage] = useState('')

  return (
    <section className='wineSearchForm'>
      <input
        name='style'
        value={wineStyle}
        type='text'
        onChange={event => setWineStyle(event.target.value)}
        placeholder='Input Wine Style'
      />
      <input
        name='vintage'
        value={wineVintage}
        type='text'
        onChange={event => setWineVintage(event.target.value)}
        placeholder='Input Wine Style'
      />
    </section>
  )
}

export default WineSearch;
