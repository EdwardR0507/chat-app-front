const baseUrl = import.meta.env.VITE_API_URL;

export const fetchWithoutToken = async (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;

  if (method === "GET") {
    const response = await fetch(url);
    return await response.json();
  } else {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
};

export const fetchToken = async (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  const token = window.localStorage.getItem("token") || "";

  if (method === "GET") {
    const response = await fetch(url, {
      headers: {
        Authorization: token,
      },
    });
    return await response.json();
  } else {
    const response = await fetch(url, {
      method,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
};
