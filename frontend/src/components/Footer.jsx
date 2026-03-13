import React from "react"
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        <div>
          <h3 className="font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li><Link to={"https://expressjs.com/"}>Express</Link></li>
            <li><Link to={"https://react.dev/"}>React</Link></li>
            <li><Link to={"https://nodejs.org/en"}>Node JS</Link></li>
            <li><Link to={"https://tailwindcss.com/"}>tailwindcss</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Design to code</h3>
          <ul className="space-y-2">
            <li>Figma plugin</li>
            <li>Templates</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Comparison</h3>
          <ul className="space-y-2">
            <li>DhiWise vs Anima</li>
            <li>DhiWise vs Appsmith</li>
            <li>DhiWise vs FlutterFlow</li>
            <li>DhiWise vs Monday Hero</li>
            <li>DhiWise vs Retool</li>
            <li>DhiWise vs Bubble</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact Us</Link></li>
            <li>Career</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
     </div>
    </footer>
  );
};

export default Footer;