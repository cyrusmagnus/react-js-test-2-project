import BtnGit from '../components/btnGit/BtnGit';
import img from './../assets/images/projects/02-big.jpg';

const Project = () => {
  return (
    <>
      <main class="section">
        <div class="container">
          <div class="project-details">

            <h1 class="title-1">Video service</h1>

            <img src={img} alt="" class="project-details__cover"/>

            <div class="project-details__desc">
                <p>Skills: React, Node.js, MongoDB</p>
            </div>

            <BtnGit link='https://github.com/cyrusmagnus'/>

            </div>
        </div>
      </main>
    </>
  );
}
 
export default Project;