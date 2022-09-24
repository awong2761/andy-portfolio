import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className="font-main w-full h-screen bg-gradient-to-b from-deep-purple to-black">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div>
                <p className="text-4xl pb-8 justify-center flex text-white"><span className="text-yellow-500 pr-3">Questions? </span>Let's get in touch!</p>
            </div>
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/11ade7fb-7c37-42fc-be56-3d3cb0e85891" method="POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder="Name" className="placeholder-white p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></input>
                    <input type="text" name="email" placeholder="E-mail" className="placeholder-white my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></input>
                    <textarea type="text" name="message" placeholder="Message" className="placeholder-white p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                    <br/>
                    <button className="text-black text-2xl bg-yellow-500 px-6 py-3 flex mx-auto items-center rounded-lg hover:scale-105">Send it!</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact