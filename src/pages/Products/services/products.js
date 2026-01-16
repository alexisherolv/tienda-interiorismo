const API_URL = 'http://localhost:5001/v1/productos/';

export async function getProducts() {
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Error fetching products');
  }

  return response.json();
}

export async function getProductById(productoId) {
  const response = await fetch(`${API_URL}${productoId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Error fetching products');
  }

  return response.json();
}