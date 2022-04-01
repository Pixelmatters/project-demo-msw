import { useEffect, useState } from 'react'

type User = {
  id: number
  name: string
}

export const Users: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((result: User[]) => {
        setUsers(result)
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {/* we conditionally render the loading or success UI */}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
