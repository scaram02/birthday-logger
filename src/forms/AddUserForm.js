import React, {useState} from "react"

const AddUserForm = (props) => {

const initialFormState = { id: null, name: '', dob: ''}
const [user, setUser] = useState(initialFormState)

const handleInputChange = (event) => {
    const {name, value} = event.target

    setUser({...user, [name]: value})
}

const handleSubmit = e => {
    e.preventDefault()
    if (!user.name || !user.dob) return 
    props.addUser(user)
    setUser(initialFormState)
}

    return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input 
      type="text" 
      name="name" 
      value={user.name}
      onChange={handleInputChange} />

      <label>Birthday:</label>
      <input 
      type="text" 
      name="dob" 
      value={user.dob}
      onChange={handleInputChange} />

      <button>Add new friend</button>
    </form>
    )
}

export default AddUserForm