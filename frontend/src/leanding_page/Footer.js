
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container-fluide footer mt-5 pt-5">
        <div className="container">
          <div className="row box">
            <div className="col-3 innerbox">
              <Link className="navbar-brand " to="/">
                <img style={{ width: "50%" }} src="media\logo.svg" alt="" />
              </Link>
              <p className="mt-2" style={{fontSize:"small"}}>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
              
            </div>

            <div className="col-3 innerbox">
              <ul>
                <li className="mb-3">
                  <h5>Account</h5>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Open demat account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Minor demat account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    NRI demat account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Commodity
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Dematerialisation
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Fund transfer
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    MTF
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Referral program
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-3 innerbox">
              <ul>
                <li className="mb-3">
                  <h5>Support</h5>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Contact us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Support portal
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    How to file a complaint?
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Status of your complaints
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Bulletin
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Circular
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Z-Connect blog
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Downloads
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-3 innerbox">
              <ul>
                <li className="mb-3">
                  <h5>Company</h5>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Philosophy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Press & media
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Careers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Zerodha Cares (CSR)
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Zerodha.tech
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#666666" }}
                  >
                    Open source
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row discription">
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered
              Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
              Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF{" "}
            </p>
            <p>
              Procedure to file a complaint on{" "}
              <Link to="/" style={{ textDecoration: "none" }}>
                SEBI SCORES
              </Link>
              : Register on SCORES portal. Mandatory details for filing
              complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail
              ID. Benefits: Effective Communication, Speedy redressal of the
              grievances{" "}
            </p>
            <p>
              <Link to="/" style={{ textDecoration: "none" }}>
                {" "}
                Smart Online Dispute Resolution | Grievances Redressal Mechanism
              </Link>
            </p>{" "}
            <p>
              {" "}
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>{" "}
            <p>
              India's largest broker based on networth as per NSE.
              <Link to="/" style={{ textDecoration: "none" }}>
                NSE broker factsheet
              </Link>{" "}
            </p>{" "}
            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please{" "}
              <Link to="/" style={{ textDecoration: "none" }}>
                create a ticket here
              </Link>
              .
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
