import React from "react";
import styles from '../styles/Home.module.css';

const ContactNavbar_Mobile = () => {
  return (
    <div className="navbar">
      <div className="contacts-section">
        {/* Contact Icons */}
        <div className="contact-icon">
        {/* Hidden icons for desktop */}

        <img
          src="https://deepansha.gallerycdn.vsassets.io/extensions/deepansha/pretty-pink-theme/1.1.2/1709666236027/Microsoft.VisualStudio.Services.Icons.Default"
          alt="VS Code"
          className="icon"
          id="hide"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png"
          alt="Figma"
          className="icon"
          id="hide"
        />
          <a href="https://www.linkedin.com/in/monicatrinhh/" target="_blank">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="icon"
            />
          </a>
          <a href="https://github.com/monmon0" target="_blank">
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/71-github-512.png"
              alt="GitHub"
              className="icon"
            />
          </a>
          <a href="https://medium.com/@monicatrinh05" target="_blank">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Medium_logo_Monogram.svg/768px-Medium_logo_Monogram.svg.png"
              alt="Medium"
              className="icon"
            />
          </a>
          <a href="mailto:monicatrinh05@gmail.com" target="_blank">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png"
              alt="Gmail"
              className="icon"
            />
          </a>
        </div>
      </div>

      {/* Styling */}
      <style jsx>{`
        .navbar {
            border-radius: 25px;
            background-color: rgba(255, 255, 255, 0.5); 
            border: 2px solid white; 
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.6em 2em;
        }

        .contacts-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .icon {
            width: 3em; 
            height: 3em; 
            margin: 0.1em;
            margin-left: 1em;
            object-fit: contain; /* Ensures the image fits within the box */
            cursor: pointer;
            transition: transform 0.2s;
          }

        .icon:hover {
          transform: scale(1.1);
        }


        @media (max-width: 768px) {
          .navbar {
            padding: 5px 10px;
          }
        #hide {
            display: none;
          }

          .contact-icon {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
          }

          .icon {
            width: 30px;
            height: auto;
            margin: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactNavbar_Mobile;


