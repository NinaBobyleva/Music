const USER_URL = "https://skypro-music-api.skyeng.tech/user/";

type TokenProp = {
  email: string;
  password: string;
};

export async function getToken({ email, password }: TokenProp) {
  const tokens = await fetch(`${USER_URL}token/`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (!tokens.ok) {
    throw new Error(tokens.statusText);
  }
  console.log(tokens);
  return tokens.json();
}

export async function refreshToken(refresh: string) {
  console.log(refresh);
  const res = await fetch(`${USER_URL}token/refresh/`, {
    method: "POST",
    body: JSON.stringify({
      refresh,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  console.log(res);
  return res.json();
}
