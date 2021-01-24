import React, {useState, useEffect} from 'react'

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = e => {
        const {name, value} = e.target

        setUser({...user, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.updateUser(user.id, user)
    }

    useEffect(() => {
        setUser(props.currentUser)
      }, [props])


    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}/>

        <label>Birthday</label>
        <input
        type="text"
        name="dob"
        value={user.dob}
        onChange={handleInputChange}
      /> 

      <button>Update User</button>
      <button className="delete" onClick={() => props.setEditing(false)}>Cancel</button>

        </form>
    )
}

export default EditUserForm