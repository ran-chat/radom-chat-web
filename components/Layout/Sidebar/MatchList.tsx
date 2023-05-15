import EmptyMatch from '@/components/EmptyLayout/Sidebar/EmptyMatch';
import { MATCH_USER } from '@/service/api/list/model';
import Image from 'next/image';
import user_empty from 'public/user_empty.png';
import styled from 'styled-components';

type MatchListProps = {
  matchedList: MATCH_USER[];
};

const MatchList = ({ matchedList }: MatchListProps) => {
  return (
    <Container>
      {matchedList.length === 0 ? (
        <EmptyMatch />
      ) : (
        <MatchListContainer>
          {matchedList.map((matchedUser) => (
            <MatchUser key={matchedUser.id}>
              <Image src={matchedUser.User.Profile_images[0]?.url || user_empty} alt={'프로필 이미지'} width={100} height={100} />
              <span className="user-name">{matchedUser.User.name}</span>
            </MatchUser>
          ))}
        </MatchListContainer>
      )}
    </Container>
  );
};

export default MatchList;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  justify-content: center;
  background: white;
`;

const MatchListContainer = styled.div`
  display: grid;
  padding: 0px 12px;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 15px;
  justify-items: center;
`;

const MatchUser = styled.div`
  position: relative;
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 15px;

  img {
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      transform: scale(1.03);
      transition: 0.15s;
    }
  }

  .user-name {
    position: absolute;
    bottom: 5px;
    left: 5px;
    color: white;
    cursor: pointer;
  }
`;
