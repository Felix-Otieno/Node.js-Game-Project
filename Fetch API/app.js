const getUsers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    return await response.json();
  };
  
  const render = (users) => {
    return users.map(({ name, email }) => `<li>${name} (${email})</li>`).join('');
  };
  
  (async () => {
    try {
      // fetch the users
      const users = await getUsers();
  
      // show the user list
      document.querySelector('#content').innerHTML = `<ul>${render(users)}</ul>`;
    } catch (err) {
      // show the error message
      document.querySelector('#message').textContent = err.message;
    }
  })();