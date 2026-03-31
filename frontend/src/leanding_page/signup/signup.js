function Signup() {
    return ( 
        <>
           
           <div className="container signupcontainer">
                <div className="row pb-5 mb-5 ">
                    <h2 className="mb-4">Open a free demat and trading account online</h2>
                    <h4 className="  mb-3" style={{color:"#666666" ,font:"none"}}>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h4>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5">
                        <img style={{width:"90%"}} src="media\signup.png" alt="" />
                    </div>
                    <div style={{textAlign:"start"}} className="col-5">
                        <h3>Signup now</h3>
                        <p>Or track your existing application</p>
                        <form action="">
                            <span className="india p-2">
                                <img src="https://zerodha.com/static/images/india-flag.svg" alt="" />
                                "+91"
                            </span>
                        <input style={{width:"90%" , height:"60px"}} type="text" placeholder="Enter your mobile number"/>
                            <button className="otpbtn btn btn-primary">Get OTP</button>
                        </form>
                    </div>
                    <div className="col-1"></div>
                </div>
                <br />
            </div>  
            </>
     );
}

export default Signup;