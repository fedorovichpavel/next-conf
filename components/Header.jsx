import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Header = ({ scrolled }) => {
  const Router = useRouter();
  const [load, setLoad] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const openCloseMenu = () => setOpenMenu((prev) => !prev);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <>
      
    </>
  );
};

export default Header;