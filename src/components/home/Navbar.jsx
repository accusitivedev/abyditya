import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">abyditya</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" href="/">home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="https://blog.abyditya.space">blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact">contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
