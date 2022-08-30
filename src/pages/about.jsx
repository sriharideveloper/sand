import styles from "./About.module.css";
import SandImg from "../content/sandAbout.avif";

const about = () => {
  return (
    <div>
      <>
        <main className={styles.Main}>
          <div>
            <img src={SandImg} alt="sand(resource)" />
          </div>
          <div className={styles.MainContent}>
            <h2>
              <big>About</big>
            </h2>
            <p>
              This website is about SAND the resource. It is a very important
              resource that we use in many applications and most of us don't
              even know about it properly. It is used in construction,silicon
              chip, glass etc.. This website has some details and resources to
              understand SAND better and its use cases. Thank You for your
              valuable time!
            </p>
          </div>
        </main>
      </>
    </div>
  );
};

export default about;
