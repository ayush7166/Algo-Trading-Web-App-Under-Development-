import { Outlet } from "react-router-dom";
import "./pricing.css"
import { NavLink } from "react-router-dom";

function Hero() {
    return (
        <>
            <div className="container p-5 mt-5">
                <div className="row p-4">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <h1 style={{ textAlign: "center" }}>Charges</h1>
                        <h4 style={{ color: "grey", textAlign: "center" }}>
                            List of all charges and taxes
                        </h4>
                    </div>
                    <div className="col-3"></div>
                </div>
                <div className="row p-4">
                    <div className="col-4" style={{ textAlign: "center" }}>
                        <img
                            style={{ alignItems: "center", width: "250px", height: "250px" }}
                            src="media\pricing0.svg"
                            alt=""
                        />
                        <h3>Free equity delivery</h3>
                        <p style={{ color: "gray" }}>
                            All equity delivery investments (NSE, BSE), are absolutely free —
                            ₹ 0 brokerage.
                        </p>
                    </div>
                    <div className="col-4" style={{ textAlign: "center" }}>
                        <img
                            style={{ alignItems: "center", width: "250px", height: "250px" }}
                            src="media\intradayTrades.svg"
                            alt=""
                        />
                        <h3>Intraday and F&O trades</h3>
                        <p style={{ color: "gray" }}>
                            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                            intraday trades across equity, currency, and commodity trades.
                            Flat ₹20 on all option trades.
                        </p>
                    </div>
                    <div className="col-4" style={{ textAlign: "center" }}>
                        <img
                            style={{ alignItems: "center", width: "250px", height: "250px" }}
                            src="media\pricing0.svg"
                            alt=""
                        />
                        <h3>Free direct MF</h3>
                        <p style={{ color: "gray" }}>
                            All direct mutual fund investments are absolutely free — ₹ 0
                            commissions & DP charges.
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="col-12">
                                <div className="tab">
                                    <NavLink to="/pricing/equity" className="tab-link">
                                        Equity
                                    </NavLink>

                                    <NavLink to="/pricing/currency" className="tab-link">
                                        Currency
                                    </NavLink>

                                    <NavLink to="/pricing/commodity" className="tab-link">
                                        Commodity
                                    </NavLink>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div>
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
