import styles from "./About.module.css";

const about = () => {
  return (
    <div>
      <>
        <main className={styles.Main}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1620056897337-0f940bf24eaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=347&q=80"
              alt="sand(resource)"
            />
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
