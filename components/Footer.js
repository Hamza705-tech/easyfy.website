import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-teal-700 to-emerald-600 text-white">
      <div className="container px-5 py-3 mx-auto flex justify-center text-center items-center">
        <p className="text-sm">
          Copyright &copy; easyfy {new Date().getFullYear()}. All rights reserved |&nbsp;</p> <p><Link href="/privacypolicy" className='hover:text-green-300 hover:text-base hover:font-bold transition-all'>Privacy Policy</Link></p>       
      </div>
    </footer>
  )
}

export default Footer
