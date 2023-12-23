import avatar from '../assets/mcg_avatar.png'

const HeroMain = () => {
  return (
    <div className=" h-96 mt-60 mb-[20px] mx-10 flex justify-between">
        <div className="flex flex-col w-[750px]">
            <h1 className="self-center font-semibold text-2xl mb-6">Full Stack Developer</h1>
            <p className="font-normal text-base text-center leading-10 ">Hi I'm Margaux Galvez, you can call me dok. A passionate Front-End developer who also loves to create Full-Stack Applications built from famous JS libraries, I am based on Manila Philippines </p>
            {/* Hi I'm Margaux Galvez, you can call me dok. A passionate Front-End developer who also loves to create Full-Stack Applications built from famous JS libraries, I am based on Manila Philippines */}
        </div>
        <div className='mr-10 '>
            <img src={avatar} alt="" className='h-64 rounded-[100%] -mt-10 border border-black'/>
        </div>
    </div>
  )
}

export default HeroMain