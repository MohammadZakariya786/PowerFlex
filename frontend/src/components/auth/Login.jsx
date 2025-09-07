import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import bgImage from '../../assets/signup-illustration.jpg'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const { loading, user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
                navigate("/");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'Login failed');
        } finally {
            dispatch(setLoading(false));
        }
    }

    useEffect(() => {
        if (user) navigate("/");
    }, [user, navigate]);

    return (
        <div
            className="relative min-h-screen flex flex-col"
            style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-black opacity-60" />
            <Navbar />
            <div className='flex items-center justify-center flex-grow px-4'>
                <motion.form
                    onSubmit={submitHandler}
                    className='relative w-full max-w-md bg-white/100 backdrop-blur-md rounded-2xl shadow-2xl p-8'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className='font-extrabold text-4xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500'>
                        Welcome Back
                    </h1>

                    <div className='my-4'>
                        <Label>Email</Label>
                        <Input type="email" value={input.email} name="email" onChange={changeEventHandler} className='mt-1' />
                    </div>

                    <div className='my-4'>
                        <Label>Password</Label>
                        <Input type="password" value={input.password} name="password" onChange={changeEventHandler} className='mt-1' />
                    </div>

                    <RadioGroup className="flex items-center gap-6 my-5">
                        {['trainer', 'recruiter'].map(roleValue => (
                            <div key={roleValue} className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value={roleValue}
                                    checked={input.role === roleValue}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label>{roleValue.charAt(0).toUpperCase() + roleValue.slice(1)}</Label>
                            </div>
                        ))}
                    </RadioGroup>

                    {loading ? (
                        <Button type="submit" className="w-full my-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                            <Loader2 className='mr-2 h-5 w-5 animate-spin' /> Please wait
                        </Button>
                    ) : (
                        <Button type="submit" className="w-full my-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90">
                            Login
                        </Button>
                    )}

                    <p className='text-center text-sm'>
                        Don&apos;t have an account?{' '}
                        <Link to="/signup" className='font-medium text-blue-600 hover:underline'>Signup</Link>
                    </p>
                </motion.form>
            </div>
        </div>
    )
}

export default Login;
