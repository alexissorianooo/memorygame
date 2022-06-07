import fruityheader from './images/fruityheader.jpg'

export default function Navbar(){
    return(
        <div 
            className='w-full h-20 md:h-36 relative'
        >
            <div
                className='w-full h-full opacity-70 absolute'
                style={{backgroundImage: `url(${fruityheader})`}}
            ></div>
            <p 
                className='text-3xl md:text-6xl text-white font-bold relative text-center p-4'
            >
                Fruity Memory Game
            </p>
        </div>
    )
}