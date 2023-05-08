import React from 'react';
import styled from 'styled-components';

const SubSection = () => {
  return <Section>SubSection</Section>;
};

export default SubSection;

const Section = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.cloBlue};
`;
