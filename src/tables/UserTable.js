import React from "react"

const UserTable = (props) => (
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>DOB</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.dob}</td>
            <td>
              <button 
              onClick={() => {
                  props.editRow(user)
              }}>Edit</button>
              <button
              onClick={() => props.deleteUser(user.id)}>
                  Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No friends to display :(</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable