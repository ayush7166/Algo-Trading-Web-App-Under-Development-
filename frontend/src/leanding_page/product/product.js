import Hero from "./hero.js";
import Leftproduct from "./leftproduct.js";
import Rightproduct from "./rightproduct.js";

function ProductPage() {
  return (
    <>
      <Hero></Hero>
      <br />
      <br />
      <Leftproduct
        productimg="\media\kite.png"
        productname="Kite"
        productdiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        trylink="#"
        tryname="Try demo →"
        demolink="#"
        demoname="Learn more →"
        glink="#"
        applink="#"
      ></Leftproduct>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <Rightproduct
        productimg="media\console.png"
        productname="Console"
        productdiscription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        alink="#"
        aname="Learn more "
      ></Rightproduct>
       <br /><br /><br /><br /><br /><br /><br /><br />
        <Leftproduct
        productimg="\media\kite.png"
        productname="Coin"
        productdiscription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        trylink="#"
        tryname="Coin →"
        glink="#"
        applink="#"
      ></Leftproduct>
        <br /><br /><br /><br /><br /><br /><br /><br />
      <Rightproduct
        productimg="media\kiteconnect.png"
        productname="Kite Connect API"
        productdiscription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        alink="#"
        aname="Kite Connect "
      ></Rightproduct>
       <br /><br /><br /><br /><br /><br /><br /><br />
        <Leftproduct
        productimg="media\varsity.png"
        productname="Varsity mobile"
        productdiscription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        glink="#"
        applink="#"
      ></Leftproduct>
        <br /><br /><br /><br /><br /><br /><br /><br />

    </>
  );
}

export default ProductPage;
