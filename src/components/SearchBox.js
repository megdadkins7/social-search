import React, {useState} from 'react'
import styled from 'styled-components'

import Input from './Input'

const StyledSearchBox = styled.div`
  margin: 20px; 
  h2{
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 500;
    color: #585858;
  }
  form {
    display: flex;
    justify-content: center;
  }
`;

function SearchBox() {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;

    setValue("");
  }
  return (
    <StyledSearchBox>
      <h2>Search For Friends</h2>
      <form onSubmit={handleSubmit}>
        <Input 
          onChange={e => setValue(e.target.value)} 
          placeholder='Search username...' 
          value={value} 
        />
      </form>
    </StyledSearchBox>
  )
}

export default SearchBox