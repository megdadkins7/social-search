import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.div`
  input {
    outline: none !important;
    border: 1px solid #c6c6c6;
    padding: 5px;
    width: 300px;
    border-radius: 7px;
  }
`;

function Input({ placeholder, value, onChange}) {
  return (
    <StyledInput>
      <input 
        type='text' 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </StyledInput>
  )
}

export default Input

/*
ref={input => {this.input = input}}
*/