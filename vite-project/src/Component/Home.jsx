import React from 'react'
const Home = () => {
    let isLogin = false;
  return (
    <div>
      <h1>Home Component</h1>
      {isLogin?"Welcome":"please login"}
    </div>
  )
}
export default Home
