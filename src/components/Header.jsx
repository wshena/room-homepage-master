import {Slide, NavLink} from '../content/index'
import iconHamburger from '../assets/icon-hamburger.svg'
import iconClose from '../assets/icon-close.svg'
import logo from '../assets/logo.svg'
import iconAngleRight from '../assets/icon-angle-right.svg'
import iconAngleLeft from '../assets/icon-angle-left.svg'
import iconArrow from '../assets/icon-arrow.svg'
import { useState } from 'react'

const Navbar = () => {
	const [click, setClick] = useState(false);
	const toogleNavigation = () => {
		setClick(!click);
	}

	return (
	<>
	<nav className="flex items-center md:justify-between py-[50px] px-[25px] md:px-[64px] md:py-[64px] absolute z-10 top-0 w-[100%] md:w-[40%]" >
		<button className='cursor-pointer md:hidden' onClick={toogleNavigation}>
			<img src={iconHamburger} alt="hamburger-icon" />
		</button>
		<img src={logo} alt="room" className='mx-auto md:mr-[55px]'/>
		<ul className='hidden md:flex justify-between item-center gap-8'>
			<li> <a href="/" className='text-White hover:cursor-pointer hover:border-b-2 hover:pb-3'>{NavLink[0]}</a> </li>
			<li> <a href="/" className='text-White hover:cursor-pointer hover:border-b-2 hover:pb-3'>{NavLink[1]}</a> </li>
			<li> <a href="/" className='text-White hover:cursor-pointer hover:border-b-2 hover:pb-3'>{NavLink[2]}</a> </li>
			<li> <a href="/" className='text-White hover:cursor-pointer hover:border-b-2 hover:pb-3'>{NavLink[3]}</a> </li>
		</ul>

		{
			click && (
				<>
				<div className="flex flex-col absolute top-0 left-0">
					<div className='w-[100vw] py-[50px] px-[25px] flex justify-center items-center bg-White'>
						<button onClick={toogleNavigation} className='mr-[60px]'>
							<img src={iconClose} alt="close-icon" />
						</button>
						<ul className='flex font-bold justify-between item-center gap-4'>
							<li> <a href="/" className='text-Black hover:border-b-2 hover:pb-3 text-[12px]'>{NavLink[0]}</a> </li>
							<li> <a href="/" className='text-Black hover:border-b-2 hover:pb-3 text-[12px]'>{NavLink[1]}</a> </li>
							<li> <a href="/" className='text-Black hover:border-b-2 hover:pb-3 text-[12px]'>{NavLink[2]}</a> </li>
							<li> <a href="/" className='text-Black hover:border-b-2 hover:pb-3 text-[12px]'>{NavLink[3]}</a> </li>
						</ul>
					</div>
					<div className='h-[100vh] w-[100vw] bg-black left-0 opacity-30'></div>
				</div>
				</>
			)
		}

	</nav>
	</>
	)
}

function Header() {
	const [count, setCount] = useState(0);
	const increment = () => {
		(count == 2 ? 2 : setCount(count + 1))
	};
	const decrement = () => {
		(count <= 0 ? 0 : setCount(count - 1))
		// setCount(count - 1);
	}
  return (
	<>
		<header className="flex flex-col md:flex-row justify-between">
			<div className='w-[100vw] md:w-[60%] relative'>
				<img src={Slide[count].ImageMobile} alt="hero-image-1" width={'100%'} height={'100%'} className='md:hidden'/> 
				<img src={Slide[count].ImageDesktop} alt="hero-image-1" width={'100%'} height={'100%'} className='hidden md:block'/>

				<Navbar />

				{/* <NextButtonMobile /> */}
				<div className='flex absolute bottom-0 right-0 md:hidden'>
					<button className='bg-Black p-[23px] hover:cursor-pointer hover:bg-VeryDarkGray'
						onClick={decrement}
					>
						<img src={iconAngleLeft} alt="icon-angle-left" />
					</button>
					
					<button className='bg-Black p-[23px] hover:cursor-pointer hover:bg-VeryDarkGray'
						onClick={increment}
					>
						<img src={iconAngleRight} alt="icon-angle-right" />
					</button>
				</div>
			</div>

			<div className='w-[100vw] md:w-[40%] relative flex items-center'>
				<div className='md:px-[120px] px-[60px] flex flex-col text-start py-[30px]'>
					<h1 className='Title'>{Slide[count].title}</h1>
					<p className='Paragraph'>{Slide[count].paragraph}</p>

					<button className='flex items-center uppercase text-Black font-bold md:tracking-[10px] tracking-[5px] text-[13px] hover:opacity-40'>
						Shop now <img src={iconArrow} alt="arow" className='ml-[30px]'/>
					</button>
				</div>

					{/* <NextButtonDesktop /> */}
					<div className='absolute bottom-0 left-0 hidden md:flex'>
						<button className='bg-Black p-[23px] hover:cursor-pointer hover:bg-VeryDarkGray' onClick={decrement}>
							<img src={iconAngleLeft} alt="icon-angle-left" />
						</button>
						<button className='bg-Black p-[23px] hover:cursor-pointer hover:bg-VeryDarkGray' onClick={increment}>
							<img src={iconAngleRight} alt="icon-angle-right" />
						</button>
					</div>
			</div>
		</header>
	</>
  )
}

export default Header