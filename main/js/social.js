import React from "react";
// import "./ContactNavbar.css";

const ContactNavbar = () => {
  return (

    <div className="navbar">
      <div className="contacts-section">

      <img src="https://deepansha.gallerycdn.vsassets.io/extensions/deepansha/pretty-pink-theme/1.1.2/1709666236027/Microsoft.VisualStudio.Services.Icons.Default" alt="VS Code" className="icon" id = "hide"/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png" alt="Figma" className="icon" id = "hide" />
      <div class="white-bar"  id="hide" ></div>
      <a href = "https://www.linkedin.com/in/monicatrinhh/" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="icon" />
        </a>
        <a href = "https://github.com/monmon0" target="_blank">
        <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/71-github-512.png" alt="GitHub" className="icon" />
        </a>
        <a href = "https://medium.com/@monicatrinh05" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Medium_logo_Monogram.svg/768px-Medium_logo_Monogram.svg.png" alt="Medium" className="icon" />
        </a>
        <a href = "mailto:monicatrinh05@gmail.com" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png" alt="Gmail" className="icon" />
        </a>
      </div>

      <style jsx>{`
       .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 39%;
        height: 5em;
        margin: 0 auto;
        background-color: white;
        border-radius: 25px;
        background-color: rgba(255, 255, 255, 0.5); 
        border: 2px solid white; 
        padding: 1em 2em;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }

      .white-bar {
        width: 100%;
        height: 2px; /* Adjust the height of the white bar */
        background-color: white;
        margin: 10px 0; /* Adjust the space above and below the bar */
      }
      
      .skills-section,
      .contacts-section {
        display: flex;
        align-items: center;
        gap: 2em;
      }
      
      .icon {
        height: 3em;
        width: auto;
        transition: transform 0.3s, opacity 0.3s;
      }
      
      .icon:hover {
        transform: scale(1.1);
        opacity: 0.8;
      }

      @media (max-width: 600px) {
        .navbar {
          width: 80%;
        }
        #hide {
          visibility: hidden;
        }
      }
      
      `}</style>
    </div>
  );
};

export default ContactNavbar;
