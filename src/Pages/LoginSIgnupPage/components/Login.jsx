import React, { useState, } from 'react'

const Login = ({ toggleForm, handleLoginRequest, history, loginStatus }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = event => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }

    const handleSubmit = event => {
        handleLoginRequest(email, password)
        history.replace('/all_movies')
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="fields-wrapper">
                <h1>Sign In</h1>
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
                <div className="submit-btn">
                    <button type="submit">Sign In</button>
                </div>
                <div className="remember-help">
                    <div className="remember">
                        <input type="checkbox" id="remember" name="remember"/>
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <div className="help">
                        Need help?
                    </div>
                </div>
                <div className="signup-instead">
                    <div className="new-to-netflix">
                        New to Netflix? 
                    </div>
                    <div className="signup" onClick={toggleForm}>
                        Sign up now.
                    </div>
                </div>
                <div className="captcha">
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="learn-more">Learn more</span>.
                </div>
            </div>
        </form>
    )
}

export default Login
