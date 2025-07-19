export async function fetchUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if (!response.ok) throw new Error('Network error');
  return response.json();
}
