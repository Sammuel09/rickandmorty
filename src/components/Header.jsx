import { useState, useEffect } from "react";
import rickAndMortyLogo from "../assets/images/rickandmorty.svg";
import clsx from "clsx";

const Header = () => {
  const [extraClass, setExtraClass] = useState("solid");

  const handleScroll = () => {
    const show = window.scrollY > 310;
    if (show) {
      setExtraClass("transparent");
    } else {
      setExtraClass("solid");
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={clsx({
        ["header"]: true,
        [extraClass]: true,
      })}
    >
      <img src={rickAndMortyLogo} alt="Rick and Morty Logo" />
    </div>
  );
};

export default Header;
