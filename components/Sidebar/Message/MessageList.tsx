import EmptyMessage from '../Empty/EmptyMessage';
import Message from './Message';
import { MATCH_LIST } from '@/service/api/matchList/model';
import empty_user from 'public/empty_user.png';
import styled from 'styled-components';

interface Props {
  matchedList: MATCH_LIST[];
}

function MessageList({ matchedList }: Props) {
  return (
    <>
      {matchedList.length === 0 ? (
        <EmptyMessage />
      ) : (
        <Container>
          {matchedList.map((matched) => (
            <Message
              key={matched.id}
              name={matched.User.name}
              url={matched.User.Profile_images[0]?.url || empty_user}
              lastChat={matched.lastchat ? matched.lastchat.chat : ''}
            />
          ))}
        </Container>
      )}
    </>
  );
}

export default MessageList;

const Container = styled.div`
  width: 375px;
`;
