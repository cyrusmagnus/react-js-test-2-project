import './project.css';
import projectImg_1 from './../../assets/images/projects/01.jpg';

const Project = () => {
  return (
    <>
      <li className="project">
        <a href="./project-page.html">
          <img src={projectImg_1} alt="Project img" className="project__img"/>
          <h3 className="project__title">Gaming streaming portal</h3>
        </a>
      </li>
    </>
  );
}
 
export default Project;