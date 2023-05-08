import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <StyledHeader>Header</StyledHeader>
  )
}


const StyledHeader = styled.section`
    position: fixed;
    top:0;
    left:0;
    
    display: flex;
    align-items: center;

    width:100%;
    height: 10%;
`

export default Header