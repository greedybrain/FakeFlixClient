import React, { useState } from 'react'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = event => {
        setUsername(event.target.value)
    }

    const handleEmailChange = event => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="username">
                <input
                    onChange={handleUsernameChange}
                    type="text"
                    placeholder="Username"
                    value={username}
                />
            </div>
            <div className="email">
                <input
                    onChange={handleEmailChange}
                    type="email"
                    placeholder="Email"
                    value={email}
                />
            </div>
            <div className="password">
                <input
                    onChange={handlePasswordChange}
                    type="password"
                    placeholder="Password"
                    value={password}
                />
            </div>
        </form>
    )
}

export default Signup

// params.permit(:username, :email, :password, :image)