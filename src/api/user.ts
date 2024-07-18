const USER_URL = "https://skypro-music-api.skyeng.tech/user/";

export async function fetchUser({ email, password }: {email: string, password: string}) {
  const res = await fetch(`${USER_URL}login/`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.detail);
  }

  return json;
};

export async function fetchUserSignUp({ email, password }: {email: string, password: string}) {
  const res = await fetch(`${USER_URL}signup/`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      username: email,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  const json = await res.json();
  console.log(json);

  if (!res.ok) {
    throw new Error(json.detail);
  }

  return json;
}
