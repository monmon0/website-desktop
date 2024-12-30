import Head from 'next/head';
import styles from '../styles/Home.module.css';
import CurrentDayAndDate from "../js/date.js";
import CurrentTime from "../js/time.js";
import ContactNavbar from "../js/social.js";
import ContactNavbar_Mobile from "../js/social-mobile.js";
import Swal from 'sweetalert2'


export default function Home() {
  const experience = () => {
    Swal.fire({
      title: "Experience",
      icon: "info",
      html: `
        <h3>Currently updating my resume</h3>
        <iframe src="https://drive.google.com/file/d/1AK3V7VPcewly_ucC6-tuCLY8JrsdLJ45/preview" width="500" height="700" allow="autoplay"></iframe>
        <img src = "https://i.pinimg.com/736x/2b/53/59/2b5359dd9d8a0c3b042993d84a9100f9.jpg" height = "20%"/>

      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> slay !
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: "Thumbs down",
      width: 600,
      color: "#716add",
    });
  };

  const art = () => {
    Swal.fire({
      title: "Art / Commission",
      // icon: "info",
      html: `
        <img src = "./img/ii.jpg" height = "50%"/>
        <a href = "https://www.notion.so/monmon12/Art-Portflio-12cc27f0488480c28a80d6dce536767f" target="_blank"><h3>My personal artwork</h3></a>
        <img src = "./img/mon.GIF" height = "50%"/>
        <a href = "https://www.notion.so/monmon12/Art-Portflio-12cc27f0488480c28a80d6dce536767f" target="_blank"><h3>Commimssion of my OC (NOT MY ART)</h3></a>
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> slay !
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: "Thumbs down",
      width: 600,
      padding: "3em",
      color: "#716add",
    });
  };
  
  const personal = () => {
    Swal.fire({
      title: "Personal",
      imageUrl: "../img/personal.svg",
      confirmButtonText: "OK",
    });
  };

  const projects = () => {
    Swal.fire({
      title: "Projects",
      // icon: "info",
      html: `
      <p>a little music to keep you occupied ~~ !</br></p>
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0mk9lGk7y9HpnoaAllUfmv?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      
      <div> <p></br></p>
      <img src = "./img/nasa.svg" /></div>
      <div>
      <h3> Seismology Detection - NASA Space APP </h3>
      <a href = "https://github.com/br0mabs/planetary-seismology" target="_blank"> Github </a>

      </br>------------------
      </div>
      <div> <p></br></p>
      <div> <img src = "./img/2.svg" /></div>
      <h3>AMath Research - Image Optimization Methods </h3>
      <a href = "https://github.com/monmon0/AM-5-DRP-Optimization-Methods-for-Image-Processing" target="_blank"> Github </a>

      </br>------------------
      </div>


      <div> <p></br></p>
      <div> <img src = "./img/tbbt.svg" /></div>
      <h3>TBBT Image Classification </h3>
      <a href = "" target="_blank"> WIP </a>

      </br>------------------
      </div>

      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> slay !
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: "Thumbs down",
      width: 800,
      padding: "3em",
      color: "#716add",
    });
  };
  return (
    <div className={styles.main}>
      <Head>
        <title>Monica's Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.description}>
          <CurrentDayAndDate className ={styles.time}/>
          <h3><CurrentTime /></h3>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            {/* <h3>Documentation &rarr;</h3> */}
            <img src = "./img/soda.svg" onClick={experience} alt = "app"/>
            <div><a onClick={experience}>experience</a></div>
          </div>

          <div  className={styles.card}>
            {/* <h3>Learn &rarr;</h3> */}
            <img src = "./img/cake.svg" onClick={projects} alt = "app"/>
            <div><a onClick={projects}>projects</a></div>
          </div>

          <div className={styles.card}>
            <img src = "./img/pudding.svg" onClick={personal} alt = "app"/>
            <div><a onClick={personal}>personal</a></div>
          </div>

          <div
            className={styles.card}
          >
            <img src = "./img/matcha.svg" onClick={art} alt = "app"/>
            <div><a onClick={art}>art</a></div>
          </div>
        </div>
      </main>
      <footer>

        <div className = "footer-text">

        <p className = "text-1">skills</p>

        <p className = "text-2">contacts</p>
        </div>
        {/* <ContactNavbar/> */}
        <ContactNavbar_Mobile/>
          {/* <img src="../img/app.svg" alt="Vercel"  /> */}
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 10em;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .footer-text {
          display: flex;
          flex-direction: row;
        }
        .text-1 {
          align-self: flex-start;
          padding-right: 20em;
          color: white;
        }
        .text-2{
          color: white;
        }

        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }

        @media (max-width: 600px) {
          .footer-text {
            visibility: hidden;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
