export const getTodos = () => {
  return fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json());
};

export const getUser = (id: any) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) =>
    response.json()
  );
};
