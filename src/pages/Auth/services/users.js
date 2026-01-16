const API_URL = 'http://localhost:5001/v1/usuarios/';

export async function getUserById(userId, token) {
  const response = await fetch(`${API_URL}${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
       Authorization: `Token ${token}`
    }
  });

  if (!response.ok) {
    throw new Error('Error fetching user');
  }

  return response.json();
}

export async function login(credentials) {
  const response = await fetch(`${API_URL}entrar`, {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (!response.ok) {
    throw new Error('Error fetching user');
  }

  return response.json();
}

export async function signUp(user) {
  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (!response.ok) {
    throw new Error('Error creating user');
  }

  return response.json();
}