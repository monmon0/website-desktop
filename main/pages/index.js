import Head from 'next/head';
import styles from '../styles/Home.module.css';
import CurrentDayAndDate from "../js/date.js";
import CurrentTime from "../js/time.js";
import ContactNavbar from "../js/social.js";
import Swal from 'sweetalert2'


export default function Home() {
  const experience = () => {
    Swal.fire({
      // title: "Hello!",
      // text: "You clicked on the text!",
      // icon: "info",
      // confirmButtonText: "OK",
      title: "Experience",
      // icon: "info",
      html: `
        <ul>
        <li> halo 1</li>
        <li> halo 2</li>
        <ul/>
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

  const art = () => {
    Swal.fire({
      title: "Experience",
      // icon: "info",
      html: `
        <ul>
        <li> halo 1</li>
        <li> halo 2</li>
        <ul/>
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
      // text: "You clicked on the text!",
      imageUrl: "../img/test.png",
      // imageHeight: 1500,
      html: `<p>
      I grew up in the heart of Vietnam and now curently attending the University of Waterloo as a second year Comp Sci/Data Sci student.
      </br>
      </br> I love endowing myself in new possibilities and easily obsessed over anything I find remotely interesting.
      
      <ul>
      <li>people person but lil bit nerdy, introverted extrovert.
      <li>passionate about art, set for art school but have a change of heart (more on my art)
      <li>easily obsessed, too many hobbies; love internet subcultures and reading classics
      <li> love a certain lifestyle so i'll do whatever i can for it 
      <ul>
      </p>
      
      `,
    
      confirmButtonText: "OK",
    });
  };

  const projects = () => {
    Swal.fire({
      title: "Projects",
      // icon: "info",
      html: `
       <div> <img src = "./img/1.svg" /></div>
      <div>
      <h3> seismology </h3>

      </br>------------------
      </div>

      <div> <img src = "./img/2.svg" /></div>
      <div>seismology</div>

      <div> <img src = "./img/3.svg" /></div>
      <div>seismology</div>

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
        <CurrentDayAndDate />
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
        <ContactNavbar/>
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
