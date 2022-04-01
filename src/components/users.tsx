import { useEffect, useState } from 'react'

type User = {
  id: number
  name: string
}

export const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((result: User[]) => {
        setUsers(result)
      })
      .catch(console.error)
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
