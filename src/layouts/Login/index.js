import 'bootstrap/dist/css/bootstrap.min.css';
import className from 'classnames/bind';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './AuthLogin.module.scss';
const cx = className.bind(styles);
export default function Login() {
    const [authlogin, setAuthLogin] = useState(false);
    const navigate = useNavigate();
    const [email, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ setUserEmail, password });
        axios
            .post('https://reqres.in/api/login', {
                email: email,
                password: password,
            })
            .then((response) => {
                console.log(response.data);
                alert('Success');
                localStorage.setItem('token', response.data.token);
                navigate('/student');
            })
            .catch((error) => {
                console.log(error);
            });
        // const account = users.find((user) => user.username === username);
        // if (account && account.password === password) {
        //     localStorage.setItem('authenticated', true);
        //     navigate('/student');
        // }
    };
    const handleLoginRegister = () => {
        setAuthLogin(!authlogin);
    };
    if (authlogin) {
        return (
            <div className={cx('Auth-form-container')}>
                <form className={cx('Auth-form')}>
                    <div className={cx('Auth-form-content')}>
                        <h3 className={cx('Auth-form-title')}>Sign up</h3>
                        <div className="text-center">
                            <span className="link-primary" onClick={handleLoginRegister}>
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
                        <span className="link-primary" onClick={handleLoginRegister}>
                            Sign Up
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            name="Password"
                            value={password}
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
