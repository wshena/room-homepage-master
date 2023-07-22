import Logo from '../assets/logo.svg'
import HamburgerMenu from '../assets/icon-hamburger.svg'
const Navbar = () => {
	return (
		<>
		<nav className="px-[25px] py-[50px] bg-black flex items-center">
			<img src={HamburgerMenu} alt="hamburger-icon" className='md:hidden'/>
			<img src={Logo} alt="Logo" className='md:mr-[56px]'/>
			<div className="flex items-center justify-between">
				<a href="#" className='hidden md:block mr-[33px] text-white font-bold hover:cursor-pointer'>home</a>
				<a href="#" className='hidden md:block mr-[33px] text-white font-bold hover:cursor-pointer'>shop</a>
				<a href="#" className='hidden md:block mr-[33px] text-white font-bold hover:cursor-pointer'>about</a>
				<a href="#" className='hidden md:block mr-[33px] text-white font-bold hover:cursor-pointer'>contact</a>
			</div>
		</nav>
		</>
	)
}

export default Navbar