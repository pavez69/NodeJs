import React from 'react'
import PropTypes from 'prop-types';

export const CounterApp2 = ( {value}) => {
  return (

    <>

    <h1>CounterApp</h1>
    <h2> { value } </h2>
    <button onClick={ function() {console.log('+1')} }> + </button>
    </>





    
  )
}

CounterApp2.Proptypes = {

    value: PropTypes.number.isRequired





}
