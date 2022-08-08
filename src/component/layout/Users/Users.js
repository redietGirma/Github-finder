import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/spinner';
import Proptypes from 'prop-types';

const Users = ({users, loading}) =>  {    
    if(loading){
        return <Spinner/>
    }else{
        return (
            <div style={userStyles}>
              {users.map(user => (
                  <UserItem key={user.id} user={user}/>
              ))}
            </div>
          );   
         }    
}

 Users.propTypes = {
    users: Proptypes.array.isRequired,
    loading: Proptypes.bool.isRequired
   }

const userStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users