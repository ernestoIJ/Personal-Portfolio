import { educations } from "./education";
import "./education.css";

export default function Education() {
  return (
    <div className="experience-container">
      <h1>Education</h1>
      <div className="timeline">
        {educations.slice(0).reverse().map((ed, index) => (
          <div
            key={ed.id}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="content">
              <img
                src={ed.schoolLogo}
                alt={`${ed.school} Logo`}
                className="company-logo"
              />
              <h2 className="experience-position">{ed.school}</h2>
              <h3 className="experience-company">{ed.degree}</h3>
              <p className="experience-dates">
                {ed.startDate} - {ed.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
