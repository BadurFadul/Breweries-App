import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <header>
            <nav>
                <Link to={"/"}>home</Link>
                <Link to={"/companies"}>companies</Link>
                <Link to={"/contact"}>contact</Link>
            </nav>
        </header>
        <Outlet/>
    </div>
  )
}

export default Home