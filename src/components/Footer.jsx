import { footerContent } from '../content'
import imageDark from '../assets/image-about-dark.jpg'
import imageLight from '../assets/image-about-light.jpg'

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center">
      <img src={imageDark} alt="image-about-dark" />
      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center text-start px-[48px] py-7'>
          <h1 className='text-[15px] text-Black font-bold uppercase'>{footerContent.title}</h1>
          <p className='text-[12px] text-DarkGray mt-7'>{footerContent.paragraph}</p>
        </div>
      </div>
      <img src={imageLight} alt="image-about-light" />
  </footer>
  )
}

export default Footer