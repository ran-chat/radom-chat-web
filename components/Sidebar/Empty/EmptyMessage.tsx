import styled from 'styled-components';

function EmptyMessage() {
  return (
    <Container>
      <MatchCard />
      <TextWrap>
        <Title>인사를 건네보세요</Title>
        <span>{`내가 LIKE한 상대와 매치가 되면 '매치' 탭에서 메시지를 보낼 수 있어요 :)`}</span>
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

export default EmptyMessage;
