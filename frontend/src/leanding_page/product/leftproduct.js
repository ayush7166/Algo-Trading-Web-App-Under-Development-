function Leftproduct({
  productimg,
  productname,
  productdiscription,
  trylink,
  tryname,
  demolink,
  demoname,
  glink,
  applink,
}) {
  return (
    <>
      <div className="contaIner">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-5">
            <img src={productimg} alt="" />
          </div>
          <div className="col-1"></div>
          <div className="col-3" style={{ marginTop: "50px" }}>
            <h2>{productname}</h2>
            <p style={{ fontSize: "18px", marginTop: "35px" }}>
              {productdiscription}
            </p>

            <span>
              <a href={trylink} style={{ textDecoration: "none", fontSize:"20px"}}>
               {tryname} 
              </a>
            </span>
            <span style={{ marginLeft: "40px" }}>
              <a href={demolink} style={{ textDecoration: "none" ,fontSize:"20px"}}>
                { demoname} 
              </a>
            </span>
            <br />
            <br />
            <button type="button" class="btn btn-dark btn-lg">
              <span>
                <a href={glink} style={{color:"white",  textDecoration: "none" }}>
                  GOOGLE
                </a>
              </span>
            </button>
            <button type="button" class="btn btn-dark btn-lg" style={{ marginLeft: "40px" }}>
              <span >
                <a href={applink} style={{color:"white", textDecoration: "none" }}>
                  App Store
                </a>
              </span>
            </button>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default Leftproduct;
