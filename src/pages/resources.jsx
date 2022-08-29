import styles from "./Resources.module.css";
import ResourcesData from "../data/ResourcesData";

const resources = () => {
  const ResourcesElement = ({ ElementContent }) => (
    <a href={ElementContent} target="blank">
      <div className={styles.ResourcesElement}>{ElementContent}</div>
    </a>
  );

  return (
    <div>
      <main className={styles.Main}>
        <div>
          <h1>
            <big>Resources</big>
          </h1>
          <p>Here are some resources to help you understand SAND better!</p>
        </div>
        <div>
          {ResourcesData.map((ElementContent, index) => (
            <ResourcesElement key={index} ElementContent={ElementContent} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default resources;
