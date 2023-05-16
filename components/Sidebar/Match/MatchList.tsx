import EmptyMatch from '../Empty/EmptyMatch';
import Match from './Match';
import { MATCH_LIST } from '@/service/api/matchList/model';
import empty_user from 'public/empty_user.png';
import styled from 'styled-components';

interface Props {
  matchedList: MATCH_LIST[];
}

function MatchList({ matchedList }: Props) {
  return (
    <>
      {matchedList.length === 0 ? (
        <EmptyMatch />
      ) : (
        <MatchContainer>
          {matchedList.map((matched) => (
            <Match key={matched.id} name={matched.User.name} url={matched.User.Profile_images[0]?.url || empty_user} isCheck={true} />
          ))}
        </MatchContainer>
      )}
    </>
  );
}

export default MatchList;

const MatchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 113px;
  justify-items: center;
  row-gap: 20px;
  width: 375px;
  padding: 10px 0;
`;
