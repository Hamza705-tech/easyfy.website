import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-teal-700 to-emerald-600 text-white">
      <div className="container px-5 py-3 mx-auto flex justify-center text-center items-center">
        <p className="text-sm">
          Copyright &copy; easyfy 2024. All rights reserved | <Link href="/privacypolicy">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
