import React from 'react'

function Header(props) {
  return (
    <div>
      <p className='text-success'>This is paragraph {props.phone}</p>
      <p>This is child {props.email} || {props.phone} || {props.vill}</p>
    </div>
  )
}

export default Header
