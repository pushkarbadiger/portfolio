import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Lead Developer</h4>
                <h5>Plannnout.tech</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built and deployed a live SaaS productivity app from scratch. Designed frontend architecture, backend logic, and deployment workflows. Applied AI-oriented workflow thinking to drive user engagement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder & Developer</h4>
                <h5>PritiCarbon.me</h5>
              </div>
              <h3>RECENT</h3>
            </div>
            <p>
              Developed a sustainability-focused web platform with interactive content systems and responsive UI. Led all frontend engineering and managed the full deployment pipeline.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech. Computer Science</h4>
                <h5>Rajarambapu Institute of Technology</h5>
              </div>
              <h3>Expected 2028</h3>
            </div>
            <p>
              Global 3+2 International Track. Rigorous CS curriculum focused on software engineering, algorithms, and systems. Supplementing academics with real-world product development and startup execution.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>AI & Prompt Engineering</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              ChatGPT for Developers (upGrad), Introduction to Generative AI (upGrad), Advanced Prompt Engineering with ChatGPT (upGrad), Introduction to Cyber Security (Infosys), Certified Game Developer (WhiteHat Jr).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
