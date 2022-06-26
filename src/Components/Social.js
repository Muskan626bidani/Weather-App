import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Social = () => {
  return (
    <div className='social-container'>
      <a href='tps://github.com/Muskan626bidani' className='social-link'>
        <FontAwesomeIcon icon={faGithub} className='icon-social' />
      </a>
      <a href='www.linkedin.com/in/muskan-bidani-a25016209' className='social-link'>
        <FontAwesomeIcon icon={faLinkedin} className='icon-social' />
      </a>
    </div>
  );
};

export default Social;