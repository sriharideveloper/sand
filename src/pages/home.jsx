import styles from "./Home.module.css";
import QuizComponent from "../components/QuizComponent";
import video from "../content/sand-video.mp4";

export default function Home() {
  return (
    <div>
      <>
        <main className={styles.Main}>
          <section>
            <video
              autoPlay={true}
              controls
              muted
              loop
              type="video/mp4"
              src={video}
              controlsList="nodownload"
            >
              Sorry, your browser doesn't support embedded videos.
            </video>
            <p>
              Want a much informative video explaining the shortage and
              conservation of sand?
              <a href="https://youtu.be/6KzP-tobpMU" target="blank">
                <>
                  <u>
                    Then take this video from CNBC, click here to see the video!
                  </u>
                </>
              </a>
            </p>
          </section>
          <div>
            <h2>
              <big>
                A Resource - Sand is the{" "}
                <big>
                  <b>SECOND</b>
                </big>{" "}
                most-used resource after <>water</>
              </big>
            </h2>
            <p>
              Sand is a granular material composed of finely divided rock and
              mineral particles.{" "}
              <a href="https://en.wikipedia.org/wiki/Sand" target="blank">
                <small>
                  Learn more on <i>Wikipedia..</i>
                </small>
              </a>
            </p>
          </div>
        </main>
        <QuizComponent />
      </>
    </div>
  );
}
