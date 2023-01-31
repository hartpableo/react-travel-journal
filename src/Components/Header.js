import React from 'react'
import Logo from '../images/logo.svg'

export default function Header() {
    return (
        <header role='banner'>
            <div className="container">
                <div id="logo">
                    <span>my travel journal.</span>
                    <img src={ Logo } alt="my tarvel journal main logo" />
                </div>
            </div>
        </header>
    )
}