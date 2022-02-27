import React from "react";

function Organization() {
  return (
    <div id="organization" className="organization section-padding bg-pink">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <span className="oliven-title-meta">Wedding</span>
            <h2 className="oliven-title">Organization</h2>
          </div>
        </div>
        <div
          className="row bord-box bg-img"
          data-background="images/slider.jpg"
        >
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">01</h2>
            <h6 className="title">हल्दी</h6>
            <p>बुधवार, 2 मार्च,2022</p>
            <p>समय- 2:00PM</p>
            <p>स्थान -दिल्ली</p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">02</h2>
            <h6 className="title">मेहंदी</h6>
            <p>शुक्रवार, 3 मार्च,2022</p>
            <p>समय- 2:00PM</p>
            <p>स्थान -दिल्ली</p>
          
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">03</h2>
            <h6 className="title">घुड़ चडी</h6>
            <p>शनिवार, 4 मार्च,2022</p>
            <p>समय- 5:00PM</p>
            <p>स्थान -दिल्ली</p>
     
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">04</h2>
            <h6 className="title">प्रतिभाभोजी</h6>
            <p>शनिवार, 4 मार्च,2022</p>
            <p>समय- 5:00PM</p>
            <p>स्थान - चौपाल नं.2,गांव घॏण्डली कृष्णा नगर दिल्ली</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
