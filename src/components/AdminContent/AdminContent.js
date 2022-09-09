import React from 'react'
import '../AdminContent/AdminContent.css'
import { FaUser, FaUserCheck} from "react-icons/fa";


const AdminContent = () => {
  const Admin = JSON.parse(localStorage.getItem('admin')).userName
  let users = JSON.parse(localStorage.getItem('adminUser'))

  //Set the Usestate to count the total no of users
  // const [first, setfirst] = useState(second)

  return (
    <div className='MainDash'>
      <h2>Hello, <span>{Admin}</span></h2>
      <div className='card_cta'>
       <div className='cards'>
        <div className='user'>
          <h1>Total Users</h1>
          <h3>2232</h3>
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
              <table>
                <tr>
                    <th>Fullname</th>
                    <th>Email</th>
                    <th>Phone</th> 
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
                  <tr>
                    <td>Frank Jordan</td>
                    <td>frankelvis46@gmail.com</td>
                    <td>09089838929</td>
                  </tr>
              </table>
      </div>

    </div>
    </div>
    // </div>
  )
}

export default AdminContent
