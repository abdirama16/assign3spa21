import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section>
      <h2>Contact</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} size="2x"/>
          <a className='faGithub app-link social-media-list' href="https://github.com/abdirama16" target="_blank" rel='noopener noreferrer'>
             &nbsp;abdirama16</a>
        </li>{" "}
        <li>
          <FontAwesomeIcon icon={faYoutube} size="2x"/>
          <a className='faYoutube app-link social-media-list' href="https://www.youtube.com/abdirama16" target="_blank" rel='noopener noreferrer'>
            &nbsp;abdirama16
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact