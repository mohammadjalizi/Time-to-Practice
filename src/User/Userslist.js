import React from 'react';




const UsersList = (props) => {
  return (
    
      <ul className=' bg-red-600'>
        {props.users.map((user) => (
          <li key={user.id} className=" bg-red-900">
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
   
  );
};

export default UsersList;
