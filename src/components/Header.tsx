
import logo from '../assets/Logo.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center w-full fixed top-0 h-16 bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
        <div className='ml-10'>
        {/* <div className='border border-black rounded-xl'> */}
            {/* <img src={logo} alt="MCG Logo" className='h-16'/> */}
            <h1 className='font-bold text-lg'>MRGX.DEV</h1>
        </div>
        <ul className='flex gap-10 mr-10'>
            <li><a href="#" className='font-medium hover:text-blue-500'>HOME</a></li>
            <li><a href="#" className='font-medium hover:text-blue-500'>PROJECTS</a></li>
            <li><a href="#" className='font-medium hover:text-blue-500'>CONTACT</a></li>
        </ul>
    </div>
  )
}

export default Header