import React from 'react';


function Pricing() {
    return ( 
        <>
            <div className='container p-5 mt-5 mb-5'>
                <div className='row'>
                    <div className='col-4'>
                        <h2>Unbeatable pricing</h2>
                        <br />
                        <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <br />
                        <a style={{textDecoration:"none"}} href="">See pricing →</a>
                    </div>
                    <div className='col-2'></div>
                    <div className='col'>
                        <div className='row  '>
                            <div className='col-6 pricingbox'>
                                <h1>₹0</h1>
                                <br />
                                <p style={{width:"190px" ,paddingLeft:"20px"}}>Free equity delivery and direct mutual funds</p>
                            </div>
                            <div className='col-6 pricingbox'>
                                <h1>₹20</h1>
                                <br />
                                <p>Intraday and F&O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Pricing;