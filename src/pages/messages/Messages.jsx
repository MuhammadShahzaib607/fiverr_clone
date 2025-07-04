import React from 'react'
import "./messages.scss"
import { Link } from 'react-router-dom'

const Messages = () => {

  const currentUser = {
    id: 1,
    userName: "john Doe",
    isSeller: true
  }

  const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dignissimos atque? Officia incidunt earum rem veritatis minima nihil fugiat libero corrupti accusantium."

  return (
    <div className='messages'>
      <div className="container">
        <div className="title">
          <h2>Messages</h2>
        </div>

        <table>

          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>

          <tr className='active'>
            <td>John Doe</td>
            <td><Link to="/message/123">{message.slice(0, 64)} .....</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as read</button>
            </td>

          </tr>
          <tr className='active'>
            <td>John Doe</td>
            <td><Link to="/message/123">{message.slice(0, 64)} .....</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as read</button>
            </td>

          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123">{message.slice(0, 64)} .....</Link></td>
            <td>1 day ago</td>

          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123">{message.slice(0, 64)} .....</Link></td>
            <td>1 day ago</td>

          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123">{message.slice(0, 64)} .....</Link></td>
            <td>1 day ago</td>

          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123">{message.slice(0, 64)} .....</Link></td>
            <td>1 day ago</td>

          </tr>
          
        </table>

      </div>
    </div>
  )
}

export default Messages