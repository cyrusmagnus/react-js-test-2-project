import projectImg_1 from './../assets/images/projects/01.jpg';
import projectImg_2 from './../assets/images/projects/02.jpg';
import projectImg_3 from './../assets/images/projects/03.jpg';
import projectImg_4 from './../assets/images/projects/04.jpg';
import projectImg_5 from './../assets/images/projects/05.jpg';
import projectImg_6 from './../assets/images/projects/06.jpg';


const Projects = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            <li className="project">
              <a href="./project-page.html">
                <img src={projectImg_1} alt="Project img" className="project__img"/>
                <h3 className="project__title">Gaming streaming portal</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img src={projectImg_2} alt="Project img" className="project__img"/>
                <h3 className="project__title">Video service</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img src={projectImg_3} alt="Project img" className="project__img"/>
                <h3 className="project__title">Video portal</h3>
              </a>
            </li>

            <li className="project">
              <img src={projectImg_4} alt="Project img" className="project__img"/>
              <h3 className="project__title">Dating app</h3>
            </li>
            <li className="project">
              <img src={projectImg_5} alt="Project img" className="project__img"/>
              <h3 className="project__title">Landing</h3>
            </li>
            <li className="project">
              <img src={projectImg_6} alt="Project img" className="project__img"/>
              <h3 className="project__title">Gaming community</h3>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
 
export default Projects;