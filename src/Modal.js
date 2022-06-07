import React from 'react'

export default function Modal(props){
    return(
        <div className='bg-zinc-200 bg-opacity-80 fixed inset-0 z-50'>
            <div className='flex h-screen justify-center items-center'>
                <div className='flex-col justify-center bg-white py-6 px-12 md:py-12 md:px-24 border-2 border-sky-500 rounded-xl opacity-100'>
                    <div className='text-xl text-zinc-600 mb-10'>
                        Completed in just {props.turns} turns!
                    </div>
                    <div className='flex justify-between'>
                        <button className='rounded px-6 py-4 text-white bg-green-400' onClick={props.tryAgain}>Try again!</button>
                        <button className='rounded px-6 py-4 text-white bg-blue-500' onClick={props.closeButton}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}