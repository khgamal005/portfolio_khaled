import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://github.com/khgamal005" className='Github' target="_blank" rel="noreferrer" aria-label="Github">

      <AiFillGithub />
      </a>
    </div>
    <div>
    <a href='https://www.facebook.com/khaled.gamal.1611' className='Facebook' target="_blank" rel="noreferrer" aria-label="Facebook">
      <FaFacebookF />
      </a>
    </div>
    <div>
    <a href='https://www.linkedin.com/in/khaled-gamal-769b02235' className='Linkedin' target="_blank" rel="noreferrer" aria-label="Linkedin">
 <AiFillLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
