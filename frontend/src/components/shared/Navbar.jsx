import React, { useEffect } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2, Menu, X, Dumbbell } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const Navbar = () => {
    const { user } = useSelector(store => store.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    const handleNavClick = () => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };

    useEffect(() => {
        const spacer = document.createElement('div')
        spacer.id = 'navbar-spacer'
        spacer.style.height = '64px'
        document.body.insertBefore(spacer, document.body.firstChild)

        return () => {
            const existingSpacer = document.getElementById('navbar-spacer')
            if (existingSpacer) existingSpacer.remove()
        }
    }, [])

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true })
            if (res.data.success) {
                dispatch(setUser(null))
                navigate("/")
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message || "Logout failed")
        }
    }

    const navLinks = user && user.role === 'recruiter' ? [
        { name: "Companies", path: "/admin/companies" },
        { name: "Jobs", path: "/admin/jobs" }
    ] : [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Watch Video", path: "/watchvideo" },
        { name: "Search Job", path: "/home" },
        { name: "Choose Location", path: "/jobs" },
        { name: "Apply Trainer Job", path: "/browse" },
        { name: "Meal Plan", path: "/mealplan" }
    ]

    return (
        <>
            <header className="fixed top-0 left-0 w-full h-16 bg-[#121212] text-white z-50 border-b border-gray-800 shadow-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-4">
                    <Link to="/" className="flex items-center gap-2">
                        <motion.div
                            animate={location.pathname === "/" ? { rotate: [0, 360] } : false}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <Dumbbell className="text-purple-500 w-6 h-6" />
                        </motion.div>
                        <h1 className="text-2xl font-bold tracking-wide text-white">
                            <span className="text-purple-500">Power<span className="text-white">Flex</span></span>
                        </h1>
                    </Link>

                    <div className="hidden md:flex  items-center gap-8">
                        <ul className="flex gap-3 lg:gap-6 justify-center  flex-wrap items-center font-medium">
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="hover:text-purple-400  
                                        hover:border-b-2  hover:border-purple-500 transition-colors"
                                        onClick={handleNavClick}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {!user ? (
                            <div className="flex items-center gap-2">
                                <Link to="/login" onClick={handleNavClick}><Button variant="outline" className="text-black border-gray-500 hover:bg-[#3be660]">Login</Button></Link>
                                <Link to="/signup" onClick={handleNavClick}><Button className="bg-[#6A38C2] hover:bg-[#5b30a6] text-white">Signup</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80 bg-[#1e1e1e] text-white border border-gray-700">
                                    <div>
                                        <div className='flex gap-3 items-center border-b border-gray-700 pb-3'>
                                            <Avatar>
                                                <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium text-lg'>{user?.fullname}</h4>
                                                <p className='text-sm text-gray-400'>{user?.profile?.bio}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-3 mt-3'>
                                            {user?.role === 'trainer' && (
                                                <div className='flex items-center gap-2'>
                                                    <User2 className="w-5 h-5" />
                                                    <Button variant="link" className="p-0 h-auto text-left text-white">
                                                        <Link to="/profile" onClick={handleNavClick}>View Profile</Link>
                                                    </Button>
                                                </div>
                                            )}
                                            <div className='flex items-center gap-2'>
                                                <LogOut className="w-5 h-5" />
                                                <Button 
                                                onClick={() => {logoutHandler(); window.scrollTo(0, 0);}} variant="link" className="p-0 h-auto text-left text-white">
                                                    Logout
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none">
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={clsx(
                        "md:hidden bg-[#1c1c1c] text-white transition-all duration-300",
                        mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 overflow-hidden opacity-0"
                    )}
                >
                    <ul className="flex flex-col gap-4 p-4 font-medium">
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    onClick={handleNavClick}
                                    className="hover:text-[#F83002]"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        {!user ? (
                            <>
                                <li><Link to="/login" 
                                onClick={() => {window.scrollTo(0, 0);setMobileMenuOpen(false)}}>Login</Link></li>
                                <li><Link to="/signup" 
                                onClick={() => {window.scrollTo(0, 0);setMobileMenuOpen(false)}}>Signup</Link></li>
                            </>
                        ) : (
                            <>
                                {user.role === 'trainer' && (
                                    <li>
                                        <Link to="/profile" 
                                        onClick={() => {window.scrollTo(0, 0);setMobileMenuOpen(false)}}>View Profile</Link>
                                    </li>
                                )}
                                <li>
                                    <button
                                        onClick={() => {
                                            window.scrollTo(0, 0);
                                            logoutHandler();
                                            setMobileMenuOpen(false);
                                        }}
                                        className="text-left w-full text-red-500"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Navbar
