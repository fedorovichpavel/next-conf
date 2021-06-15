import { useRef } from "react";
import { React, useState, useEffect } from "react";


import MainLayout from "./MainLayout";

import $ from "jquery";

const App = () => {
  const [scrolled, setScrolled] = useState(0);

  const listenScrollEvent = () => {
    setScrolled($(window).scrollTop());
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <MainLayout scrolled={scrolled}>
      <>
        123123
       
      </>
    </MainLayout>
  );
};

export default App;
