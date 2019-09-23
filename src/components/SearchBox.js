import React, {useState} from 'react'
import styled from 'styled-components'

import Input from './Input'

const StyledSearchBox = styled.div`
  margin: 20px; 
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