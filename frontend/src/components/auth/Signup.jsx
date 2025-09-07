import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaLock } from 'react-icons/fa';
import signupIllustration from '../../assets/signup-illustration.jpg';

const Signup = () => {
  const [input, setInput] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: '',
    file: null,
  });

  const { loading, user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEventHandler = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = e => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const validateInputs = () => {
    const { fullname, email, phoneNumber, password, role, file } = input;

    if (!fullname.trim()) {
      toast.error('Full name is required');
      return false;
    }

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(fullname.trim())) {
      toast.error('Name should contain only alphabets and spaces');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      toast.error('Email is required');
      return false;
    }
    if (!emailRegex.test(email.trim())) {
      toast.error('Please enter a valid email address');
      return false;
    }

    if (!password.trim()) {
      toast.error('Password is required');
      return false;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return false;
    }

    const phoneRegex = /^\d+$/;
    if (!phoneNumber.trim()) {
      toast.error('Phone number is required');
      return false;
    }
    if (!phoneRegex.test(phoneNumber.trim())) {
      toast.error('Phone number should contain only digits');
      return false;
    }
    if (phoneNumber.trim().length < 10) {
      toast.error('Phone number must be at least 10 digits');
      return false;
    }

    if (!role) {
      toast.error('Please select a role');
      return false;
    }

    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      const maxSize = 2 * 1024 * 1024; // 2MB
      if (!validTypes.includes(file.type)) {
        toast.error('Profile image must be JPEG, PNG, or GIF');
        return false;
      }
      if (file.size > maxSize) {
        toast.error('Profile image must be smaller than 2MB');
        return false;
      }
    }

    return true;
  };

  const submitHandler = async e => {
    e.preventDefault();
    if (!validateInputs()) return;

    const formData = new FormData();
    Object.entries(input).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        `${USER_API_END_POINT}/register`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          withCredentials: true,
          timeout: 30000,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/login');
      }
    } catch (error) {
      dispatch(setLoading(false));
      if (error.code === 'ECONNABORTED' || error.message?.includes('timeout')) {
        toast.error('Request timed out. Please try again.');
      } else if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Registration failed. Please try again.');
      }
    } finally {
      if (loading) dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) navigate('/');
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto my-10 px-4">
        <div className="hidden md:block w-1/2 pr-10">
          <img src={signupIllustration} alt="Sign Up Illustration" className="rounded-lg shadow-md w-full" />
        </div>
        <motion.form
          onSubmit={submitHandler}
          className="w-full md:w-1/2 bg-white/70 backdrop-blur-md rounded-lg shadow-lg p-6 border"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text mb-6 border-b-2 border-purple-300 inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Sign Up
          </motion.h1>

          <div className="my-2 relative">
            <Label>Full Name</Label>
            <FaUser className="absolute left-3 top-9 text-gray-400" />
            <Input className="pl-10" type="text" name="fullname" value={input.fullname} onChange={changeEventHandler} />
          </div>

          <div className="my-2 relative">
            <Label>Email</Label>
            <FaEnvelope className="absolute left-3 top-9 text-gray-400" />
            <Input className="pl-10" type="email" name="email" value={input.email} onChange={changeEventHandler} />
          </div>

          <div className="my-2 relative">
            <Label>Phone Number</Label>
            <FaPhone className="absolute left-3 top-9 text-gray-400" />
            <Input className="pl-10" type="text" name="phoneNumber" value={input.phoneNumber} onChange={changeEventHandler} />
          </div>

          <div className="my-2 relative">
            <Label>Password</Label>
            <FaLock className="absolute left-3 top-9 text-gray-400" />
            <Input className="pl-10" type="password" name="password" value={input.password} onChange={changeEventHandler} />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mt-4">
            <RadioGroup className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" id="r1" value="trainer" checked={input.role === 'trainer'} onChange={changeEventHandler} className="cursor-pointer" />
                <Label htmlFor="r1">Trainer</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" id="r2" value="recruiter" checked={input.role === 'recruiter'} onChange={changeEventHandler} className="cursor-pointer" />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <Label>Profile</Label>
              <Input accept="image/*" type="file" onChange={changeFileHandler} className="cursor-pointer" />
            </div>
          </div>

          {loading ? (
            <Button className="w-full my-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90">
              Sign Up
            </Button>
          )}

          <span className="text-sm">
            Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
          </span>
        </motion.form>
      </div>
    </div>
  );
};

export default Signup;
