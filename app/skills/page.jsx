import "./skills.css";

export default function Skills() {

   const techSkillsLogos = [
      "/languages/html.png",
      "/languages/css.png",
      "/languages/JavaScript-Logo.png",
      "/languages/reactLogo.png",
      "/languages/nodeJs.png",
      "/languages/postgresSQL.png",
      "/languages/Mongodb.png",
      "/languages/java.svg",
      "/languages/python-logo.png",
      "/languages/pytorch.png",
      "/languages/tensorflow.png",
   ];

   return (
      <div className="skills-container" id="skills">
         <div className="scroller">
            {techSkillsLogos.map((skill, index) => (
               <div key={index} className="skill">
                  <img src={skill} alt="" className="tech"/>
               </div>
            ))}
            {/* Duplicate the skills to enable smooth looping */}
            {techSkillsLogos.map((skill, index) => (
               <div key={{index}} className="skill">
                  <img src={skill} alt="" className="tech"/>
               </div>
            ))}
         </div>
         <div className="skills-list">
            <div className="skill-category">
               <h1>Languages:</h1>
               <p>Python | Java | C/C++ | JavaScript | TypeScript | HTML/CSS | SQL | MongoDB </p>
            </div>
            <div className="skill-category">
               <h1>Tools:</h1>
               <p>VSCode | PyCharm | Xcode | Jupyter Notebook | Linux | Postman | Git/GitHub | Google Cloud Platform | Google Colab | Eclipse | Firebase | Docker </p>
            </div>
            <div className="skill-category">
               <h1>Frameworks:</h1>
               <p>React.JS | Node.JS | Express.JS | Next.JS | JUnit | Flask | JavaFX | Tailwind CSS | TensorFlow | Pytorch</p>
            </div>
            <div className="skill-category">
               <h1>Libraries:</h1>
               <p>Pandas | NumPy | Matplotlib | Seaborn | Scikit-learn | Keras</p>
            </div>
         </div>
      </div>
   );
}