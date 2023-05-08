import React from 'react'
import styled from 'styled-components'

const MainSection = () => {
  return (
    <Section>MainSection</Section>
  )
}

export default MainSection


const Section = styled.section`
    min-width: 100vw;
    min-height: 100vh;
    background-color: ${props => props.theme.colors.cloYellow};
`