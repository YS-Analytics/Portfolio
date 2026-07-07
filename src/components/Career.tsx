import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Intern</h4>
                <h5>Maharashtra Remote Sensing Application Centre</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Collected, cleaned, and transformed real-time traffic datasets. Automated data analysis using Google Gemini AI to extract actionable insights. Designed interactive geospatial dashboards and automated reporting solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE</h4>
                <h5>G H Raisoni College of Engineering</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Bachelor of Technology in Computer Science and Engineering. CGPA: 6.39
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary</h4>
                <h5>Guru Nanak Public H/S School</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Higher Secondary Certificate (12th Maharashtra State Board – 81.67%)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
