import { useState } from "react";
import DropdownMenu from "./DropdownMenu/DropdownMenu.jsx";
import { Howl } from "howler";
import plastic_click from "../../assets/sounds/plastic_click.wav";
import { useDarkMode } from "../../Context.api/DarkMode.jsx";
import "./listMenu.css";

function ListMenu() {
  let [showMenuItems, setShowMenuItems] = useState(false);
  const { darkMode, switchThemMode } = useDarkMode();

  let iconsArray = [
    {
      category: "Home",
      icon: <i className="ri-home-2-line"></i>,
      destination: "home_view",
    },
    {
      category: "Technologies",
      icon: <i className="ri-computer-line"></i>,
      destination: "technologies_view",
    },
    {
      category: "Services",
      icon: <i className="ri-customer-service-2-line"></i>,
      destination: "services_view",
    },
    {
      category: "My_Projects",
      icon: <i class="ri-pages-line"></i>,
      destination: "projects_view",
    },
    {
      category: "Contact_Me",
      icon: <i className="ri-phone-line"></i>,
      destination: "contact_view",
    },
  ];

  function handleListOpen() {
    setShowMenuItems(!showMenuItems);
    let plastic_click_sound = new Howl({
      src: [plastic_click],
    });
    iconsArray.forEach((ele, idx) => {
      setTimeout(() => {
        plastic_click_sound.play();
      }, 100 * idx);
    });
  }

  return (
    <>
      <section className="menu_list_container" id="list_menu">
        <button
          id="dark_mode_button"
          className="small_screens_list"
          onClick={switchThemMode}
        >
          {darkMode ? (
            <i className="ri-sun-line"></i>
          ) : (
            <i className="ri-moon-line"></i>
          )}
        </button>
        <button
          className={`small_screens_list menu_items_clicked_${showMenuItems}`}
          onClick={handleListOpen}
        >
          <i className="ri-list-check"></i>
        </button>

        <DropdownMenu
          iconsArray={iconsArray}
          showMenuItems={showMenuItems}
          className="menu_items"
        />
      </section>
    </>
  );
}

export default ListMenu;
