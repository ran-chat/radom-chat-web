export const rest = {
    get: {
        liked: "list/liked",
        distance: "list/userlist",
        matchedlist: "list/userlist",
        chatlist: "list/chatlist",
        profile: "profile",
        otherUserDistance: "profile",
        profileImage: "profile/image"
    },
    post: {
      signIn: 'user/signin',
      signUp: 'user/signup',
      like: "like",
      uploadProfileImage: 'profile/uploadimage',
      profileLifeStyle: "profile/lifestyle",
      profileBasic: "profile/basic",
      profileInterests: "profile/interests",
      block: "block",
      kakaoLogin: "social/oauth/callback",
      naverLogin: "social/nauth/callback",
      googleLogin: "social/gauth/callback",
      pass: "pass",
      authToken: "authtoken"
    },
    put: {
      test: ""
    },
    delete: {
      deleteimage: "profile/deleteimage"
    },
    patch: {
      profile: "profile",
      profileImage: "profile/crimage"
    },
  };