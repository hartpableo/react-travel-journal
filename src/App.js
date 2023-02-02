import React from 'react'
import Header from './Components/Header'
import Cards from './Components/Cards'

export default function App() {
    return (
        <>
            <Header />
            <main role='main'>
                <div className="container">
                    <h1 className='sr-only'>Hart's Travels</h1>
                    <Cards />
                </div>
            </main>
        </>
    )
}