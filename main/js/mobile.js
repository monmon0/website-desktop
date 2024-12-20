import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import CurrentDayAndDate from "date.js";
import CurrentTime from "time.js";
import ContactNavbar from "social.js";
import Swal from 'sweetalert2';

export default function HomeMobile() {
  const experience = () => {
    Swal.fire({
      title: "Experience",
      icon: "info",
      html: `
        <img src="https://i.pinimg.com/736x/2b/53/59/2b5359dd9d8a0c3b042993d84a9100f9.jpg" style="width: 100%; max-width: 300px;"/>
        <h3>Currently updating my resume</h3>
      `,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: `<i class="fa fa-thumbs-up"></i> slay!`,
      cancelButtonText: `<i class="fa fa-thumbs-down"></i>`,
      width: "90%",
      color: "#716add",
    });
  };

  const art = () => {
    Swal.fire({
      title: "Art / Commission",
      html: `
        <img src="./img/ii.jpg" style="width: 100%; max-width: 300px;"/>
        <a href="https://www.notion.so/monmon12/Art-Portflio-12cc27f0488480c28a80d6dce536767f" target="_blank"><h3>My personal artwork</h3></a>
        <img src="./img/mon.GIF" style="width: 100%; max-width: 300px;"/>
        <a href="https://www.notion.so/monmon12/Art-Portflio-12cc27f0488480c28a80d6dce536767f" target="_blank"><h3>Commission of my OC (NOT MY ART)</h3></a>
      `,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: `<i class="fa fa-thumbs-up"></i> slay!`,
      cancelButtonText: `<i class="fa fa-thumbs-down"></i>`,
      width: "90%",
      padding: "1.5em",
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
      html: `
        <p>A little music to keep you occupied ~~ !</p>
        <iframe style="border-radius:12px; width: 100%; max-width: 300px;" src="https://open.spotify.com/embed/track/0mk9lGk7y9HpnoaAllUfmv?utm_source=generator" height="152" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <div style="margin-top: 20px;">
          <img src="./img/nasa.svg" style="width: 100%; max-width: 300px;"/>
          <h3>Seismology Detection - NASA Space APP</h3>
          <a href="https://github.com/br0mabs/planetary-seismology" target="_blank">Github</a>
        </div>
      `,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: `<i class="fa fa-thumbs-up"></i> slay!`,
      cancelButtonText: `<i class="fa fa-thumbs-down"></i>`,
      width: "90%",
      padding: "1.5em",
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
            <img src="./img/soda.svg" onClick={experience} alt="app"/>
            <div><a onClick={experience}>experience</a></div>
          </div>

          <div className={styles.card}>
            <img src="./img/cake.svg" onClick={projects} alt="app"/>
            <div><a onClick={projects}>projects</a></div>
          </div>

          <div className={styles.card}>
            <img src="./img/pudding.svg" onClick={personal} alt="app"/>
            <div><a onClick={personal}>personal</a></div>
          </div>

          <div className={styles.card}>
            <img src="./img/matcha.svg" onClick={art} alt="app"/>
            <div><a onClick={art}>art</a></div>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-text">
          <p className="text-1">skills</p>
          <p className="text-2">contacts</p>
        </div>
        <ContactNavbar/>
      </footer>

      <style jsx>{`
        main {
          padding: 2rem 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .footer-text {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 90%;
          max-width: 600px;
        }
        .text-1, .text-2 {
          color: white;
        }
      `}</style>

      <style jsx global>{`
        html, body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
