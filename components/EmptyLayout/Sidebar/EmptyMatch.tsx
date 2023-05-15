import styled from 'styled-components';

const EmptyMatch = () => {
  return (
    <Container>
      <ImageCard />
      <h3 className="header">매치 시작하기</h3>
      <span>스와이프를 시작하고 매치가 되면 여기에 나타납니다. 여기에서 바로 매치 상대와 대화를 나눌 수 있어요.</span>
    </Container>
  );
};

export default EmptyMatch;

const Container = styled.div`
  width: 240px;
  height: 100%;
  padding-top: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;

  h3 {
    margin-top: 15px;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 6.5px;
  }

  span {
    font-size: 1rem;
    color: #656e7b;
    text-align: center;
  }
`;

const ImageCard = styled.div`
  background: red;
  width: 117px;
  height: 170px;
`;
