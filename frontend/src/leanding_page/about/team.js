function Team(){
    return(
        <>
            <div className="container">
                <div className="row" style={{textAlign:"center"}}>
                    <h3>People</h3>
                </div>
                <br /><br /><br />
                <div className="row">
                    <div className="col-2">s</div>
                    <div className="col-3">
                        <img src="media/nithinKamath.jpg" alt=""  style={{borderRadius:"100%", width:"90%", alignItems:"left"}}/>
                        <br /><br />
                        <p style={{textAlign:"center", fontSize:"20px"}}>Nithin Kamath</p>
                        <p style={{textAlign:"center", fontSize:"15px"}}>Founder, CEO</p>
                    </div>
                    <div className="col-5 mt-2">
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>Playing basketball is his zen.</p>
                        <p>Connect on <a href="#"  style={{textDecoration:"none"}}>Homepage</a> / <a href="#" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="#" style={{textDecoration:"none"}}>Twitter</a></p>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </>
    )
}

export  default Team