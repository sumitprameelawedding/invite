import React from "react";
import Logo from "../assets/images/logo.png";
function Footer() {
  return (
    <div className="footer2">
      <div className="oliven-narrow-content">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>
              <a href="/">
                <img src={Logo} alt="" />
                <span>
                  सुमित <small>&</small> प्रमीला
                </span>
              </a>
            </h2>
            <p className="copyright">
            4 मार्च, 2022 –चौपाल नं.2,गांव घॏण्डली कृष्णा नगर दिल्ली
            </p>
            <a
              href="https://www.linkedin.com/in/ankittyagi-webdeveloper/"
              alt="linkedin"
              target="_blank"
              className="copyright"
              style={{ marginTop: "5px" }}
            >
              Made with ❤️ By Ankit Tyagi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
