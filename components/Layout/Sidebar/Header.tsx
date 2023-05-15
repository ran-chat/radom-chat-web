import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <ProfileWithName>
        <img />
        <span>길로틴</span>
      </ProfileWithName>

      <ModeWrapper>
        <Button>얍</Button>
        <Button>얍</Button>
        <Button>얍</Button>
      </ModeWrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 87px;
  background: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
`;

const ProfileWithName = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 36px;
    height: 36px;
    border-radius: 100%;
    margin-right: 8px;
  }

  span {
    color: white;
  }
`;

const ModeWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background: black;
  color: white;

  & + & {
    margin-left: 8px;
  }
`;
