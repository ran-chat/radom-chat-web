import Header from './Header';
import MatchList from './MatchList';
import { getMatchList } from '@/service/api/list/api';
import { useQuery } from 'react-query';
import styled from 'styled-components';

const Sidebar = () => {
  const { data: matchedList } = useQuery(['getUserCountInfo', 1], () => getMatchList(1));

  return (
    <Container>
      <Header />
      <MatchList matchedList={matchedList || []}></MatchList>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  height: 100vh;
  width: 375px;
  background: #eeeeee;
`;
