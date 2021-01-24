import React, {useState, Fragment} from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

const App = () => {

  const usersData = [
    { id: 1, name: 'Sanjay', dob: '20.05.1996' },
    { id: 2, name: 'Robert', dob: '30.06.1948' },
    { id: 3, name: 'Hope', dob: '07.12.2012' },
  ]

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id != id))
  }

  // edit
  const initialFormState = {id: null, name: '', dob: ''}
  const [currentUser, setCurrentUser] = useState(initialFormState)

  // toggle the edit
  const editRow = (user) => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, dob: user.dob})
  }

// actually edit
const updateUser= (id, updatedUser) =>{
  setEditing(false)

  setUsers(users.map((user) => (user.id === id? updatedUser: user)))
}

  return (
    <div className="container">
    <h1>Add a person</h1>
    <div className="flex-row">
      <div className="flex-large">
        {editing ? (
          <Fragment>
            <h2>Edit user</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </Fragment>
        ) : (
          <Fragment>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser} />
          </Fragment>
        )}
      </div>
      <div className="flex-large">
        <h2>View users</h2>
        <UserTable 
        users={users} 
        editRow={editRow} 
        deleteUser={deleteUser} />
      </div>
    </div>
  </div>

  )
}

export default App