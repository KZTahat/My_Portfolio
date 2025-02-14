import "./projects.css";
import dashboard from "../../assets/my_projects/workshop_dashboard.png";
import comics from "../../assets/my_projects/comics.png";
import react_animation from "../../assets/my_projects/react_animation.png";
import art_house from "../../assets/my_projects/art_house.png";
import restaurant_chain from "../../assets/my_projects/restaurant_chain.png";
import it_company from "../../assets/my_projects/it_company.png";

function Projects() {
  let projects = [
    {
      project_name: "My_Workshop",
      project_image: dashboard,
      description:
        "The Workshop Dashboard is a web application designed to provide an intuitive interface for managing user data, products, and transactions in a workshop environment. It serves as a centralized platform for administrators to perform CRUD operations seamlessly.",
      github_link: "https://github.com/KZTahat/workshop_dashboard",
    },
    {
      project_name: "Restaurant Chain Manager",
      project_image: restaurant_chain,
      description:
        "A React single page application to display, create, delete and update (CRUD ops) a chain of restaurants with a complete setup to a backend server APIs to handle data exchange as a bridge to mySQL DB.",
      github_link: "https://github.com/KZTahat/Restaurant-Chain-InfoGraph-",
      live_url: "https://restaurantchainkzt.netlify.app/",
    },
    {
      project_name: "Comics",
      project_image: comics,
      description:
        "Within this project, we developed a full-stack React application with CRUD functionality. The app integrates with two deferent APIs to fetch data related to movies, comics, and cartoon characters. Users can log in to their accounts where they have the ability to add, delete, or update any movie, comic or character.",
      github_link: "https://github.com/6Pixels/comic-front-end",
      live_url: "https://comic-pixels.netlify.app/",
    },
    {
      project_name: "React Animation",
      project_image: react_animation,
      description:
        "A collection of stylish and customizable CSS3 animations and React components to enhance the visual appeal of your web applications. Whether you're building a dynamic website or a sleek web app.",
      github_link: "https://github.com/KZTahat/react_animation",
      live_url: "https://react-animation-tahat.netlify.app/",
    },
    {
      project_name: "IT Company",
      project_image: it_company,
      description:
        "An Angular single page application to show the projects, clients, services and an overall overview about an IT company where you can navigate through different views (Typescript and SCSS).",
      github_link: "https://github.com/KZTahat/IT_company_angular",
      live_url: "https://it-companykzt.netlify.app/",
    },
    {
      project_name: "Art House",
      project_image: art_house,
      description:
        "We built this website with a mission to support art freelancers who may not have a physical space to exhibit their work. Essentially functioning as an E-commerce platform, our site offers these talented individuals a dedicated space to showcase and sell their unique collections and connect with potential buyers.",
      github_link: "https://github.com/merge-confilicts/art-house",
      live_url: "https://merge-confilicts.github.io/art-house/",
    },
  ];

  return (
    <>
      <section className="projects_view_container" id="projects_view">
        <h2>My Projects</h2>
        <p className="projects_heading_paragraph">
          I engineer transformative digital experiences, bringing ideas to life
          through elegant code and innovative design solutions.
        </p>
        <div className="projects_boxes">
          {projects.map((element, index) => {
            return (
              <div className="one_project_box" key={index}>
                <img src={element.project_image} alt={element.project_name} />
                <div className="project_text_content">
                  <h4>{element.project_name}</h4>
                  <p>{element.description}</p>
                  <div className="project_links">
                    {element.github_link ? (
                      <a href={element.github_link} target="_blank">
                        <span>Repo Link</span>
                        <i class="ri-github-fill"></i>
                      </a>
                    ) : (
                      <></>
                    )}
                    {element.live_url ? (
                      <a href={element.live_url} target="_blank">
                        <span>Live URL</span>
                        <i class="ri-links-line"></i>
                      </a>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Projects;
