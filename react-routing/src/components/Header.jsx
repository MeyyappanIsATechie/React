import React from 'react'

const Header = () => {
  return (
    <header>
        <div>Home Page</div>
        <ul style={{display:'flex', gap:'20px', listStyle:'none'}}>
            <li>Recipes</li>
            <li>Comment</li>
        </ul>
    </header>
  )
}

export default Header
