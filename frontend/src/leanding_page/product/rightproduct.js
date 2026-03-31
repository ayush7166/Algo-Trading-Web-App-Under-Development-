function Rightproduct({
  productimg,
  productname,
  productdiscription,
  alink,
  aname
 
}) {
  return (
    <>
      <div className="contaIner">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-3" style={{ marginTop: "50px" }}>
            <h2>{productname}</h2>
            <p style={{ fontSize: "18px", marginTop: "35px" }}>
              {productdiscription}
            </p>

            <span>
              <a href={alink} style={{ textDecoration: "none"  ,fontSize:"20px"}}>
               { aname }→
              </a>
            </span>
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <img src={productimg} alt="" />
          </div>
         
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default Rightproduct;
