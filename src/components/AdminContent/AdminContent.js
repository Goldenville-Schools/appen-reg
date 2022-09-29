import React, {useState, useEffect} from 'react'
import '../AdminContent/AdminContent.css'
import { FaUser, FaUserCheck} from "react-icons/fa";
import axios from 'axios'


const AdminContent = () => {
  const Admin = JSON.parse(localStorage.getItem('admin')).userName
<<<<<<< HEAD
  // let users = JSON.parse(localStorage.getItem('adminUser'))
=======
<<<<<<< HEAD
  // let users = JSON.parse(localStorage.getItem('adminUser'))
=======
<<<<<<< HEAD
  let users = JSON.parse(localStorage.getItem('adminUser'))
  console.log(users)
=======
  // let users = JSON.parse(localStorage.getItem('adminUser'))
>>>>>>> 4d7090c29d2acca1719ece5797e3f5bee3be1a74
>>>>>>> 4b39019da9b1f66582aadd120597024411715119
>>>>>>> 8b5128889b60307635c24851157461d085e5ff16

  const[users, setUsers] = useState([])
  const[totalUsers, setTotalUsers] = useState(0)
  
  useEffect(() => {
    const headers = {
      Accept: '*/*',
      // Authorization: `Bearer ${token}`
    }
    axios.get(`${process.env.REACT_APP_API_URL}/admin/users`, { headers })
    .then(response => {
      console.log(response.data.users);
      setUsers(response.data.users)
      setTotalUsers(response.data.users.length)
    })
    
  }, [])
    
 
  return (
    <div className='MainDash'>
      <h2>Hello, <span>Admin</span></h2>
      <div className='card_cta'>
       <div className='cards'>
        <div className='user'>
          <h1>Total Users</h1>
          <h3>{totalUsers}</h3>
        </div>
        <div className='users_icon'>
          <FaUser className='icons2'/>
        </div>
       </div>
      </div>
      <div className='table_cta'>
          <div className='table_header'>
            <h2>All USERS</h2>
            <div className='liner'></div>
          </div>
          <div className='container2'> 
            { users. length > 0 ? 
              <table>
                <tr>
                    <th>Fullname</th>
                    <th>Email</th> 
                  </tr> 
                  {users.map(user => {
                    return(
                    <tr>
                      <td>{user.fullName}</td>
                      <td>{user.email}</td>
                  </tr>
                    )
                  })}
                  
              </table>
              :
              <p>There are no users on this platform</p>
            }   
      </div>

    </div>
    </div>
    // </div>
  )
}

export default AdminContent
