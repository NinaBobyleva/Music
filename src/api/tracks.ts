import { fetchWithAuth } from "@/utils/fetchWithAuth";

const BASE_URL = "https://skypro-music-api.skyeng.tech/";
const TRACK_URL = "https://skypro-music-api.skyeng.tech/catalog/track/";

export async function getTracks() {
  const res = await fetch(`${TRACK_URL}all/`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}

export async function likeTrack({
  trackId,
  access,
  refresh,
}: {
  trackId: number;
  access: string;
  refresh: string;
}) {
  const res = await fetchWithAuth(
    BASE_URL + `catalog/track/${trackId}/favorite/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access}`,
      },
    },
    refresh
  );

  return res.json();
}

export async function dislikeTrack({
    trackId,
    access,
    refresh,
  }: {
    trackId: number;
    access: string;
    refresh: string;
  }) {
    const res = await fetchWithAuth(
      BASE_URL + `catalog/track/${trackId}/favorite/`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${access}`,
        },
      },
      refresh
    );
  
    return res.json();
  }

export async function fetchFavoriteTracks({
  access,
  refresh,
}: {
  access: string;
  refresh: string;
}) {
  const res = await fetchWithAuth(
    BASE_URL + `catalog/track/favorite/all/`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access}`,
      },
    },
    refresh
  );

  return res.json();
}
