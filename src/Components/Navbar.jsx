import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-center items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar