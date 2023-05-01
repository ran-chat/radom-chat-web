// 회원가입 리퀘스트 타입
export type SIGN_UP_MODEL_TYPE = {
    account: string,
    password: string,
    password2: string,
    name: string,
    address: string,
    job: string,
    school: string,
    age: string,
    gender: string,
    height: string,
    weight: string,
  }

export type SIGN_UP_RESOPNSE_TYPE = {
  message: {
    id: number;
    password: string;
    account: string;
    name: string;
    address: string;
    job: string;
    school: string;
    age: string;
    gender: string;
    height: string;
    weight: string;
    coordinates: {
      val: string;
    },
    updatedAt: string;
    createdAt: string;
  }
}


// 로그인 리퀘스트 타입
export type SIGN_IN_MODEL_TYPE = {
  account: string;
  password: string;
  longitude: string;
  latitude: string;  
}

export type SIGN_IN_RESPONSE_TYPE = {
  user: {
    accessToken: string;
    userid: number;
  }
}