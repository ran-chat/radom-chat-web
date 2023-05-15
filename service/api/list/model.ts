export type MATCH_USER = {
  id: number;
  sent_user: number;
  received_user: number;
  roomkey: string;
  sentuser_superlike: boolean;
  receiveduser_boost: boolean;
  User: {
    account: string;
    name: string;
    job: string;
    age: number;
    id: number;
    Profile_images: [
      {
        url: string;
      }
    ];
  };
  lastchat: {
    chat: string;
    sentAt: string;
    receiver: number;
  };
};
