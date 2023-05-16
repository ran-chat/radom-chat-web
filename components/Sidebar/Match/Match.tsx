import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

interface MatchProps {
  name: string;
  url: string | StaticImageData;
  isCheck: boolean;
}

function Match({ name, url, isCheck }: MatchProps) {
  return (
    <Container>
      <Image src={url} alt={''} width={100} height={113} />
      <Name>{name}</Name>
      {isCheck ? (
        <StateWrap>
          <State></State>
        </StateWrap>
      ) : null}
    </Container>
  );
}

export default Match;

const Container = styled.div`
  width: 100px;
  height: 113px;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

const Name = styled.span`
  font-weight: bold;
  color: white;
  position: absolute;
  left: 3px;
  bottom: 3px;
`;

const State = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: red;
`;

const StateWrap = styled.div`
  position: absolute;
  right: -4px;
  top: -4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9.5px;
  height: 9.5px;
  border-radius: 50%;
  background-color: black;
`;
