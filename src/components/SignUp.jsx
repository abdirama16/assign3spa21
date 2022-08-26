import React from 'react'

const SignUp = () => {
  return (
    <section>
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="userName">Full name</label>
        <input type="text" />
        <label htmlFor="userName">Email</label>
        <input type="email" />
        <label htmlFor="userName">User name</label>
        <input type="text" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <label htmlFor="password">Repeat Password</label>
        <input type="password" />
        <button className="btn" type="submit">Sign Up</button>
      </form>
    </section>
  )
}

export default SignUp