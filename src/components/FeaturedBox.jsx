import React from "react";
import actor from "../assets/image/photo.jpg";
function FeaturedBox() {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Electri Shop</span>
        </div>
        <div className="featured-text-info">
          <p>จะบัคอะไรหนักหนาว้างงตอนแรกยังใช้ได้อยู่ดีๆก็เอ๋อ</p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Shop now <i className="uil uil-import"></i>
          </button>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Know More <i className="uil uil-import"></i>
          </button>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/kingharem011/">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/profile.php?id=100079720480957">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/thanakorn03">
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={actor} alt="" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
}

export default FeaturedBox;
