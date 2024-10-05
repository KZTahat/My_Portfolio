import "./main.css";
import { Howl } from "howler";
import download from "../../../assets/sounds/download.wav";
import myResume from "../../../assets/resumes/khaled_Tahat_24_10.pdf";
import myResume2 from "../../../assets/resumes/khaled_tahat_23_11.pdf";
import myResume3 from "../../../assets/resumes/khaled tahat_12_8_2024.pdf";
import myResume4 from "../../../assets/resumes/khaled tahat_5_10_2024.pdf";

function Main() {
  let handleDownload = () => {
    let sound = new Howl({
      src: [download],
    });
    sound.play();
  };

  return (
    <>
      <section className="home_text_area">
        <span className="home_greetings">
          <span>Hello, </span>I'm
        </span>
        <h1>Khaled Zayed Tahat</h1>
        <span className="job_title">I'm a Front-End Web Developer </span>
        <p>
          I am a dedicated front-end web developer with a solid foundation in
          biomedical informatics engineering, holding a bachelor's degree in the
          field. Following my graduation, I undertook a transformative journey
          by enrolling in an intensive six-month web development course at the
          ASAC department in Luminous Technical University College. The course
          covered a comprehensive range of front-end technologies, including
          JavaScript, HTML, CSS, React.js, Redux, and various tools and
          libraries such as Bootstrap and MUI. Exploring the back-end, I gained
          proficiency in Node.js, RESTful APIs, SQL, and noSQL databases.
          Alongside technical skills, I refined my collaboration abilities by
          navigating Git and GitHub.
          <br />
          <div className="middle_image_container"></div>
          <br />
          After completing the course, I assumed the role of a full-stack
          developer and a teacher assistant at ASAC. Over the course of two
          rewarding years, I actively contributed to diverse projects utilizing
          GitHub Projects and Jira for efficient project management.
          Simultaneously, I took on the role of a mentor, guiding students
          through the same web development course I had successfully completed.
          This dual role allowed me to seamlessly blend practical experience
          with educational support, creating an environment of continuous
          learning and growth.
        </p>
        <a href={myResume4} download="Khaled Tahat" onClick={handleDownload}>
          <button>Download Resume</button>
        </a>
      </section>
    </>
  );
}

export default Main;
