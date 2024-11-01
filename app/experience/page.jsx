import { experiences } from "./experience";
import "./experience.css";

export default function Experience() {
  return (
    <div className="experience-container">
      <h1>Experience</h1>
      <div className="timeline">
        {experiences.slice(0).reverse().map((exp, index) => (
          <div
            key={exp.id}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="content">
              <img
                src={exp.companyLogo}
                alt={`${exp.company} Logo`}
                className="company-logo"
              />
              <h2 className="experience-position">{exp.position}</h2>
              <h3 className="experience-company">{exp.company}</h3>
              <p className="experience-dates">
                {exp.startDate} - {exp.endDate}
              </p>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
              <p className="experience-tech">
                <strong>Technologies used:</strong> {exp.tech}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
