export type USER_PROFILE = {
  id: number;
  account: string;
  name: string;
  job: string;
  age: number;
  Basic: {};
  Lifestyle: {};
  Interest: {};
  Profile_images: [
    {
      url: string;
      is_primary: boolean;
    }
  ];
};
