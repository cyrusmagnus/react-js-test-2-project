import './project.css';
import projectImg_1 from './../../assets/images/projects/01.jpg';

const Project = ({title, img}) => {
  return (
    <>
      <li className="project">
        <a href="./project-page.html">
          <img src={img} alt={title} className="project__img"/>
          <h3 className="project__title">{title}</h3>
        </a>
      </li>
    </>
  );
}
 
export default Project;