import React from "react";

const ProjectsBox = () => {
  return (
    <section className="section" id="project">
      <div className="top-header">
        <h1>Product</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <img src="https://inwfile.com/s-cr/hjqudx.jpg" alt="001" />
          <ul>
            <h3>ฟิวส์</h3>
            <label>15+ Finished projects</label>
          </ul>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <img
            src="https://media-cdn.bnn.in.th/437856/vivo-Smartphone-Y200-Dreamy-Violet-5G-1-square_medium.jpg"
            alt="002"
          />
          <h3>vivo Y200</h3>
          <label>25+ happy</label>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <img
            src="https://www.yellowpages.co.th/sites/storage/files/content/2022/05/rscomponents/Pic1.jpg"
            alt="003"
          />
          <h3>Completed</h3>
          <label>15+ Finished projects</label>
        </div>
        <br></br>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <img
            src="https://www.yellowpages.co.th/sites/storage/files/content/2022/05/rscomponents/Pic5.jpg"
            alt="004"
          />
          <h3>ตัวเก็บประจุ</h3>
          <label>15+ Finished projects</label>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <img
            src="https://lh6.googleusercontent.com/proxy/zRzpvHc5KSlFN5xQwJOgkZL_VuYg2YIR2J3VG6DvdxIbV_UcPzUyogTwVcF5SBzubvFVRP9RcQ"
            alt="005"
          />
          <h3>GPS ติดรถ</h3>
          <label>15+ Finished projects</label>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <img src="https://inwfile.com/s-cs/08aos0.jpg" alt="006" />
          <h3>ตู้เย็น</h3>
          <label>15+ Finished projects</label>
        </div>
      </div>
    </section>
  );
};

export default ProjectsBox;
