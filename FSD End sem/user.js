async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    for (let i = 0; i < 5; i++) {
      console.log(users[i].name);
    }
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

getUsers();