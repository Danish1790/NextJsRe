import React from 'react'
import DisplayUsers from '@/src/components/DisplayUsers'
import AddUsers from '@/src/components/AddUsers'

const Users = () => {
  return (
    <div>
        <h2>Users</h2>

        <AddUsers />
        <DisplayUsers />

    </div>
  )
}

export default Users