export const UserListItem = ({ user }) => {
  return (
    <li>
      <p>{user.name?.[0]}</p>
      <p>{user.name}</p>
      <p>{user.role}</p>
    </li>
  )
}