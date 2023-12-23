
const Contact = () => {
  return (
    <div className="w-full flex ">
        <div className="w-1/2 py-16 px-10 ">
            <h1 className="text-[40px] font-semibold mb-8">GOT A PROBLEM TO SOLVE?</h1>
            <p className="font-normal leading-10">Get your space suit ready and tell me your ideas to develop your dream website.</p>
        </div> 
        <div className="flex flex-col w-1/2 p-10 border border-black mr-5 mb-5 rounded-lg">
            <label className="font-medium" htmlFor="name">Name</label>
            <input type="text" id="name" className="border border-dark mb-6 h-12 p-5 rounded-lg "/>
            <label className="font-medium" htmlFor="email">Email</label>
            <input type="text" id="email" className="border border-dark mb-6 h-12 p-5 rounded-lg "/>
            <label className="font-medium" htmlFor="message">Message</label>
            <input type="text" id="message" className="border border-dark mb-6 h-12 p-5 rounded-lg "/>
            <button className="border border-dark mt-4 h-12 rounded-lg hover:bg-dark hover:text-primary duration-200">Hit me Up</button>
        </div>
    </div>
  )
}

export default Contact