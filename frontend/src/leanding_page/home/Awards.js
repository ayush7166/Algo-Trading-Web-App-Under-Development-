import React from 'react';

function Awards() {
    return (
        <>
            <div className='container mt-5 mb-5 p-5'>
                <div className='row'>
                     <div className='col-6'>
                       <img  src='media/largestBroker.svg' alt="" />
                     </div>
                     <div className='col-6 mt-3'>
                        <h2>Largest stock broker in India</h2>
                        <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                        <div className='row '>
                            <div className="col-6 mt-2">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6 mt-2">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <img className="mt-2" style={{width:"90%"}} src="media\pressLogos.png" alt="" />
                        </div>
                     </div>
                    
                </div>
               
            </div>
        </>
    );
}

export default Awards;
