import Login from "@/components/Login/Login";
import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Random Chat App</title>
        <meta name="description" content="Generated by Random Chat App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>랜덤 채팅 앱 입니다.</h1>
        <TestButton>
          테스트 버튼 허스키 적용dddddddㅇㅇㅇㄴㅇdsddㄴㅇ
        </TestButton>
        <Login />
      </div>
    </>
  );
}

const TestButton = styled.button`
  width: 200px;
  height: 100px;
  border-radius: 10px;
`;
