import React from 'react'
import Item from './Item';

export default function Body({user,deleteUser,handleUpdateUser}) {
  return (
    <div className='container-body'>
      <table className='table-container' >
        <tr>
          <th>#</th>
          <th>Content</th>
          <th>Due date</th>
          <th>Status</th>
          <th>Assigned to</th>
          <th>Action</th>
        </tr>     
        {user.map((item,index)=>(<Item item={item} index={index} deleteUser={deleteUser} handleUpdateUser={handleUpdateUser} />))}
      </table>
    </div>
  )
}
