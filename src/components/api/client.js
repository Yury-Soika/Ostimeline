// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

const localStorageKey = window.localStorage.getItem('user');

export async function client(endpoint, { body, ...customConfig } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  
  const token = localStorageKey 
    ? JSON.parse(localStorageKey).token
    : null;
  
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  let data;
  try {
    const response = await window.fetch(endpoint, config);
     if (response.status === 401) {
      logout();
      window.location.assign(window.location)
      return;
    }
    data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error(response.message)
  } catch (err) {
    return Promise.reject(err.message ? err.message : data)
  }
}

client.get = function (endpoint, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'GET' })
}

client.post = function (endpoint, body, customConfig = {}) {
  return client(endpoint, { ...customConfig, body })
}

function logout() {
  window.localStorage.removeItem('user');
}
