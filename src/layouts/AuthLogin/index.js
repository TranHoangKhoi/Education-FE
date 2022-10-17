import 'bootstrap/dist/css/bootstrap.min.css';
import className from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './AuthLogin.module.scss';
const cx = className.bind(styles);

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    }).then((data) => data.json());
}

export default function AuthLogin({ setToken }) {
    const [authlogin, setAuthLogin] = useState(false);
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // debugger;
        const token = await loginUser({
            username,
            password,
        });
        console.log(token);
        setToken(token);
    };
    const handleAuthLogin = () => {
        setAuthLogin(!authlogin);
    };
    if (authlogin) {
        return (
            <div className={cx('Auth-form-container')}>
                <form className={cx('Auth-form')}>
                    <div className={cx('Auth-form-content')}>
                        <h3 className={cx('Auth-form-title')}>Sign up</h3>
                        <div className="text-center">
                            <span className="link-primary" onClick={handleAuthLogin}>
                                Sign In
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Full Name</label>
                            <input type="email" className="form-control mt-1" placeholder="e.g Jane Doe" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input type="email" className="form-control mt-1" placeholder="Email Address" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input type="password" className="form-control mt-1" placeholder="Password" />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
    return (
        <div className={cx('Auth-form-container')}>
            <form className={cx('Auth-form')} onSubmit={handleSubmit}>
                <div className={cx('Auth-form-content')}>
                    <h3 className={cx('Auth-form-title')}>Sign In</h3>
                    <div className="text-center">
                        Not registered yet?
                        <span className="link-primary" onClick={handleAuthLogin}>
                            Sign Up
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>
    );
}

AuthLogin.propTypes = {
    setToken: PropTypes.func.isRequired,
};
