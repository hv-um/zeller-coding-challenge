import { titleCase } from "./utilities"

export const UserListItem = ({ user }) => {
  return (
    <li className="my-4 flex items-center">
      <p className="text-sm bg-blue-100 h-10 w-10 rounded-md flex justify-center items-center text-blue-700 mr-4">{user.name?.[0]}</p>
      <p className="">{titleCase(user.name)} <br /> <span className="text-sm text-gray-500">{titleCase(user.role)}</span></p>
      {/* <p className=""></p> */}
    </li>
  )
}