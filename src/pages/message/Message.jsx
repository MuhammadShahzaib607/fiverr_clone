import React from 'react'
import "./message.scss"
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className='breadCrumbs'>
          <Link to="/messages">MESSAGES</Link> - JOHN DOE -
        </span>

        <div className="messages">
          <div className="item">
            <img className='pp' src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sunt aperiam maiores, accusamus itaque impedit. Natus totam omnis doloribus aliquid odio recusandae laboriosam eaque? Vel, voluptas.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sunt aperiam maiores, accusamus itaque impedit. Natus totam omnis doloribus aliquid odio recusandae laboriosam eaque? Vel, voluptas.
            </p>
          </div>
          <div className="item owner">
            <img className='pp' src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sunt aperiam maiores, accusamus itaque impedit. Natus totam omnis doloribus aliquid odio recusandae laboriosam eaque? Vel, voluptas.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sunt aperiam maiores, accusamus itaque impedit. Natus totam omnis doloribus aliquid odio recusandae laboriosam eaque? Vel, voluptas.
            </p>
          </div>
        </div>

        <div className="write">
          <textarea name="" placeholder='write a message' id="" cols={30} rows={10}></textarea>
          <button>Send</button>
        </div>

      </div>
    </div>
  )
}

export default Message