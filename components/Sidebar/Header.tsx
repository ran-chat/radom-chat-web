import { USER_PROFILE } from '@/service/api/profile/model';
import { StaticImageData } from 'next/image';
import empty_user from 'public/empty_user.png';
import styled from 'styled-components';

interface Props {
  profile: USER_PROFILE | Record<string, never>;
}

function Header({ profile }: Props) {
  return (
    <Container>
      <ProfileWrap>
        <Profile url={profile.Profile_images ? profile.Profile_images[0].url : empty_user} />
        <Name>{profile.name}</Name>
      </ProfileWrap>
      <ButtonList>
        <Button>둘러보기</Button>
        <Button>안전</Button>
      </ButtonList>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 79px;
  background-color: #ff4458;
  justify-content: space-between;
`;

const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 12px;
`;

const Profile = styled.div<{ url: string | StaticImageData }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-image: ${(props) => `url(${props.url})`};
  background-position: 50% 50%;
  background-size: auto 120%;
`;

const Name = styled.span`
  color: white;
  font-weight: bold;
`;

const ButtonList = styled.div`
  display: flex;
  margin: 0px 12px;
`;

const Button = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  margin: 0px 8px;
  cursor: pointer;
`;
