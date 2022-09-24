import React from 'react'

const About = () => {

    const langs = [
        {
            id: 1,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            title: "JAVA",
        },
        {
            id: 2,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            title: "PYTHON",
        },
        {
            id: 3,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
            title: "C++",
        },
        {
            id: 4,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            title: "HTML",
        },
        {
            id: 5,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            title: "CSS",
        },
        {
            id: 6,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            title: "JAVASCRIPT",
        },
        {
            id: 7,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            title: "REACT",
        },
        
    ]

  return (
    
    <div name="about" className="w-full h-full bg-gradient-to-b from-gray-900 via-deep-purple to-deep-purple-trans">
        <div>
            
            <div className="max-w-screen-lg mx-auto flex flex-col h-full px-4 md:flex-row font-main text-white text-4xl pt-12">
                <p className="text-left text-yellow-500">About</p>
            </div>
            <br/>
            <br/>
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row font-main text-white text-3xl pb-1">
                <p>
                    Hi there! My name is Andy Wong and I am based in Orange County. Currently I am pursuing a bachelor's 
                    degree in computer science at California State University, Long Beach.  My interests in computer science range from web
                    development to game design.  Most of my front-end experience comes from being self taught so I am hoping to find opportunities
                    to level up my front-end skills! My main goal is to try and expand my knowledge and skillsets throughout my career and hopefully
                    become a powerhouse of a developer.
                </p>
            </div>
        </div>
        <div>
            <div className="max-w-screen-lg mx-auto flex flex-col h-full px-4 md:flex-row font-main text-yellow-500 text-4xl p-10">
                <p>Experience</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 text-white font-main text-center max-w-screen-lg mx-auto flex-col h-full">
                {langs.map(({id, src, title, style}) => (
                    <div
                        key={id}
                        className={`py-2 ${style}`}
                    >
                    <img src={src} alt="" className="w-20 mx-auto"/>
                    <p className="mt-4">{title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About