import React from 'react';

function Hero() {
    return ( 
        <>
           <div className='container   herocontainer'>
                <div className='row text-center hero'>
                   <img className='mb-5' src="media/homeHero.png" alt="" />
                   <h2 className='mt-5'>Invest in everything</h2>
                   <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                   <button className=' herobutton btn btn-primary'>Sign up for free</button>
                </div>
           </div>
        </>
    );
}

export default Hero;