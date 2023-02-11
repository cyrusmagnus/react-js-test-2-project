import './footer.css'

import vk from './../../assets/images/icons/vk.svg';
import instagram from './../../assets/images/icons/instagram.svg';
import twitter from './../../assets/images/icons/twitter.svg';
import linkedIn from './../../assets/images/icons/linkedIn.svg';
import gitHub from './../../assets/images/icons/gitHub.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
            <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
            <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
            <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link" /></a></li>
            <li className="social__item"><a href="#!"><img src={gitHub} alt="Link" /></a></li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;