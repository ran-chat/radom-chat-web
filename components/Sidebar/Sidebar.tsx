import Header from './Header';
import MatchList from './Match/MatchList';
import MessageList from './Message/MessageList';
import { getMatchList } from '@/service/api/matchList/api';
import { getUserProfile } from '@/service/api/profile/api';
import { useState, useRef } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

function Sidebar() {
  const [selected, setSelected] = useState<number>(0);
  const { data: matchedList } = useQuery(['getMached', 2], () => getMatchList(2));
  const { data: userProfile } = useQuery(['getUserProfile', 2], () => getUserProfile(2));
  const scrollRef = useRef<HTMLDivElement>(null);

  const onClick = (num: number) => {
    setSelected(num);
    if (scrollRef && scrollRef.current) {
      const move = num === 0 ? -375 : 375;
      scrollRef.current.scrollBy({ left: move, top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <Header profile={userProfile || {}} />
      <div>
        <OptionWrap>
          <div>
            <OptionBtnWrap>
              <OptionBtn onClick={() => onClick(0)}>매치</OptionBtn>
            </OptionBtnWrap>
            <OptionBtnWrap>
              <OptionBtn className="right" onClick={() => onClick(1)}>
                메시지
              </OptionBtn>
            </OptionBtnWrap>
          </div>
          <Line width={selected === 0 ? 48 : 64} className={selected === 1 ? 'active' : ''} />
        </OptionWrap>
        <ListContainer ref={scrollRef}>
          <ListWrap>
            <MatchList matchedList={matchedList || []} />
            <MessageList matchedList={matchedList || []} />
          </ListWrap>
        </ListContainer>
      </div>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  width: 375px;
`;

const OptionWrap = styled.div`
  height: 47px;
  padding: 12px 20px;
  box-sizing: border-box;
`;

const OptionBtnWrap = styled.div`
  display: inline-block;
`;

const OptionBtn = styled.button`
  border: none;
  background-color: transparent;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  padding: 0px 8px;
  &.right {
    margin-left: 16px;
  }
`;

const Line = styled.hr<{ width: number }>`
  width: ${(props) => `${props.width}px`};
  height: 3px;
  background-color: #ff4458;
  border: none;
  margin: 0px;
  transition: all 0.3s ease;

  &.active {
    margin-left: 64px;
  }
`;

const ListContainer = styled.div`
  height: calc(100vh - 79px - 47px);
  width: 100%;
  margin-top: 10px;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ListWrap = styled.div`
  display: flex;
  width: calc(375px * 2);
  height: calc(100vh - 79px - 47px);
`;
