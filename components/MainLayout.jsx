import Head from "next/head";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children, scrolled }) => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <>
      <Head>
        <title>Superb</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />

        {load && (
          <>
            {/* GOOGLE TAG */}
            
          </>
        )}
      </Head>
      {/* GOOGLE TAG */}
      <noscript>
        
      </noscript>
      <Header/>
      <>{children}</>
      <Footer />
    </>
  );
};

export default MainLayout;
