
async function fetchUsers() {
  const res = await fetch('/users')
  const users = await res.json()
  const userList = document.getElementById('user-list')
  userList.innerHTML = users.map(u => `<p>${u.name} - ${u.email}</p>`).join('')
}

async function addUser() {
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value

  await fetch('/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
  })

  fetchUsers()
}

fetchUsers()
