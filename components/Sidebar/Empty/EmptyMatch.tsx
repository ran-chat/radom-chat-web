import styled from 'styled-components';

function EmptyMatch() {
  return (
    <Container>
      <MatchCard />
      <TextWrap>
        <Title>매치 시작하기</Title>
        <span>스와이프를 시작하고 매치가 되면 여기에 나타납니다. 여기에서 바로 매치 상대와 대화를 나눌 수 있어요.</span>
      </TextWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MatchCard = styled.div`
  width: 117px;
  height: 170px;
  background-color: #ff4458;
  border-radius: 10px;
`;

const TextWrap = styled.div`
  width: 240px;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 1.7rem;
  font-weight: bold;
  margin: 20px 0px 5px 0px;
`;

export default EmptyMatch;
