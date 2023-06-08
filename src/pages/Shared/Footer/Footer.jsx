import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import logo from "../../../assets/logo/logo.png";
import Container from "../../../components/Container/Container";

const Footer = () => {
  return (
    <Container>
      <div className="my-5">
        <div className="grid grid-cols md:grid-cols-4 p-5 text-black">
          <div className="flex gap-3 items-center">
            <img className="w-12 h-12 rounded-full" src={logo} alt="" />
            <p className="text-xl font-bold">SportsDreamers</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold my-5">BRANDS</h3>
            <ul>
              <li>Avengers</li>
              <li className="py-2">Transformers</li>
              <li>Marvel</li>
              <li className="py-2">Star Wars</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold my-5">ABOUT US</h3>
            <ul>
              <li>Help Center</li>
              <li className="py-2">Store Location</li>
              <li>Privacy Policy</li>
              <li className="py-2">Terms of Service</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold my-4">CONTACT</h3>
            <p>101 Independence Avenue. S.E </p>
            <p className="my-2 font-medium">
              <a href="#">Phone : +67 14874575</a>
            </p>
            <p className="font-medium">
              Email : <a href="#">battleheroes@gmail.com</a>
            </p>
            <div>
              <ul className="flex gap-8 my-4">
                <li className="text-2xl text-blue-700 hover:text-orange-500">
                  {" "}
                  <FaFacebookF></FaFacebookF>{" "}
                </li>
                <li className="text-2xl text-blue-900 hover:text-blue-700">
                  <FaGoogle></FaGoogle>
                </li>
                <li className="text-2xl text-sky-400 hover:text-blue-700">
                  <FaTwitter></FaTwitter>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center py-4"> SportsDreamers Academy © 2023 </p>
      </div>
    </Container>
  );
};

export default Footer;
