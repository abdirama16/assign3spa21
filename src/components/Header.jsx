import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h2>Hi,</h2>
      <h2>I'm Ahmad</h2>
      <h4>Welcome to my landing page</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga sequi
        necessitatibus asperiores officia eos tenetur a voluptatem ducimus, ut
        quisquam ad, quia et minima tempora excepturi cumque earum, laudantium
        ipsum.
      </p>
      <Link to="/about">
        <button className="btn"> Read more..</button>
      </Link>
    </header>
  )
}

export default Header