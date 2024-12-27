"use client"
import 'animate.css';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")
    const [fadeIn, setFadeIn] = useState(false)

    useEffect(() => {
        // Trigger fade-in animation on page load
        const timer = setTimeout(() => setFadeIn(true), 300); // Delay for smooth fade-in
        return () => clearTimeout(timer);
    }, [])

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")   
                setshorturl("")
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className={`mx-auto max-w-lg bg-gradient-to-t from-teal-500 to-emerald-100 my-16 p-8 rounded-lg flex flex-col gap-4 mb-64 transition-all duration-500 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className='font-bold text-2xl text-emerald-900 hover:text-emerald-700 transition-colors duration-300 ease-in-out transform animate__animated animate__fadeIn animate__delay-1s'>
                Generate your short URLs
            </h1>
            <div className='flex flex-col gap-4 mt-4'>
                <input
                    type="text"
                    value={url}
                    className='px-4 py-2 focus:outline-teal-600 rounded-md transition-transform duration-200 transform hover:scale-105 focus:ring-2 focus:ring-teal-300 animate__animated animate__fadeIn animate__delay-2s'
                    placeholder='Enter your URL'
                    onChange={e => { seturl(e.target.value) }} 
                />

                <input
                    type="text"
                    value={shorturl}
                    className='px-4 py-2 focus:outline-teal-600 rounded-md transition-transform duration-200 transform hover:scale-105 focus:ring-2 focus:ring-teal-300 animate__animated animate__fadeIn animate__delay-2s'
                    placeholder='Enter your preferred short URL text'
                    onChange={e => { setshorturl(e.target.value) }} 
                />

                <button
                    onClick={generate}
                    className='bg-gradient-to-t from-emerald-800 to-teal-100 rounded-lg shadow-lg p-3 py-1 my-3 text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl active:scale-95 animate__animated animate__fadeIn animate__delay-2s'
                >
                    Generate
                </button>
            </div>

            {generated && (
                <div className="transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 animate__animated animate__fadeIn animate__delay-2.5s">
                    <code className="block mt-4">
                        <span className='font-bold text-lg'>Your Link: </span> 
                        <Link target="_blank" className="text-blue-700 hover:text-blue-900 transition-colors duration-300 ease-in-out" href={generated}>{generated}</Link>
                    </code>
                </div>
            )}
        </div>
    )
}

export default Shorten
