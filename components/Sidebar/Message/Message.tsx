import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

interface MessageProps {
  name: string;
  lastChat?: string;
  url: string | StaticImageData;
}

function Message({ name, lastChat, url }: MessageProps) {
  return (
    <MessageWrap>
      <ProfileWrap>
        <Image src={url} alt="프로필 사진" width={100} height={100} />
      </ProfileWrap>
      <MessageTextWrap>
        <Name>{name}</Name>
        {lastChat ? <MessageText>{lastChat}</MessageText> : null}
      </MessageTextWrap>
    </MessageWrap>
  );
}

export default Message;

const MessageWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const ProfileWrap = styled.div`
  width: 100px;
  height: 100px;

  img {
    border-radius: 50%;
  }
`;

const MessageText = styled.span``;

const MessageTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Name = styled.span`
  font-weight: bold;
`;
