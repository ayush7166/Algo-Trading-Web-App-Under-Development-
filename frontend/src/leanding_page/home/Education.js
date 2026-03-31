import React from 'react';


function Education() {
    return ( 
        <>
           <div className='container p-5 m-5'>
            <div className='row'>
                <div className='col'>
                    <img src="media\education.svg" alt="" />
                </div>
                <div className='col'>
                    <h1>Free and open market education</h1>
                    <br /><br />
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <br />
                    <a style={{textDecoration:"none"}} href="#">Versity →</a>
                    <br /><br />
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <br />
                    <a href="#">TradingQ&A →</a>
                </div>
            </div>
           </div>
        </>
     );
}

export default Education;