import React from 'react'
import UserItem from './UserItem.jsx'
const Users = ({ users }) => {
    return (
        <div className='row justify-content-center m-auto'>
            { users.map(user => (
                <UserItem key={user.id} user={ user}/>
            ))}
        </div>
    )
}

export default Users