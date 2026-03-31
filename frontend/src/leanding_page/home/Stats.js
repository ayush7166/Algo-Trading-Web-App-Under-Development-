import React from 'react';

function Stats() {
    return (  
        <>
           <div className="container p-5 mb-5">
            <div className='row'>
                <div className="col-4">
                    <h2>Trust with confidence</h2>
                    <br /><br />
                    <h3>Customer-first always</h3>
                    <p>That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.</p>
                    <br />
                    <h3>No spam or gimmicks</h3>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <br />
                    <h3>The Zerodha universe</h3>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <br />
                    <h3>Do better with money</h3>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    <br />
                </div>
                <div className="col-1"></div>
                <div className="col-7 mt-2">
                    <img style={{width:"65%", position:"relative", left:"90px"}} src="media\ecosystem.png" alt="" />
                    <div className='row'>
                        <div className='col-3 mt-2'>
                            <a style={{textDecoration:"none", position:"relative",left:"170px" }} href="#">Explore our products &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className='col-3 mt-2'>
                            <a  style={{textDecoration:"none", position:"relative", left:"190px"}} href="#">Try Kite demo &nbsp;   <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </>
    );
}

export default Stats;
