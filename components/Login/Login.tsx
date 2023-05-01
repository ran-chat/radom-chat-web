import { signIn } from "@/service/api/user/api";
import styled from "styled-components";

const Login = () => {
  const login = async () => {
    const response = await signIn({
      account: "test1",
      password: "test1",
      longitude: "126.966169",
      latitude: "37.4800384",
    });

    console.log("response", response);
  };

  return (
    <div>
      <Button onClick={login}>로그인</Button>
    </div>
  );
};

export default Login;

const Button = styled.button`
  width: 200px;
  height: 100px;
  background: red;
`;
