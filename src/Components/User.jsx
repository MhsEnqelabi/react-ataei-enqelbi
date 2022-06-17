import React from 'react'
import "../App.css"

function User(props) {
  return (
    <span  className='user'>
<div className='userTextClass'>

<strong>
{props.user}
</strong>
<strong>
{props.email}
</strong>
</div>
<img src={props.img} alt="" width={80}/>

    </span>
  )
}

export default User