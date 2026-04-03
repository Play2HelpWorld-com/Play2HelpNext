const DEFAULT_BACKEND_BASE_URL = "http://127.0.0.1:8000";

const getQueryParam = (name) => {
  return new URLSearchParams(window.location.search).get(name);
};

const getBackendBaseUrl = () => {
  const backendFromQuery = getQueryParam("backend");

  if (backendFromQuery) {
    return backendFromQuery.replace(/\/+$/, "");
  }

  return DEFAULT_BACKEND_BASE_URL;
};

const getAccessToken = () => {
  const tokenFromQuery = getQueryParam("to");

  if (tokenFromQuery && tokenFromQuery !== "null") {
    return tokenFromQuery;
  }

  return window.localStorage.getItem("accessToken");
};

export const sendScore = async (score, gameName) => {
  try {
    let formattedScore = score;

    if (score !== null && score !== undefined) {
      const n = Number(score);
      if (Number.isFinite(n)) {
        formattedScore = Number(n.toFixed(4));
      } else {
        formattedScore = n;
      }
    }

    const accessToken = getAccessToken();
    if (!accessToken) {
      console.warn("No access token found. Score will not be saved.");
      return;
    }

    const tokens = Number((Number(formattedScore) * 0.0002).toFixed(4));
    const backendBaseUrl = getBackendBaseUrl();

    const response = await fetch(`${backendBaseUrl}/api/games/submitScore/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        score: formattedScore,
        game: gameName,
        tokens,
      }),
    });

    if (!response.ok) {
      console.error("Failed to send score:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Failed to send score:", error);
  }
};
