import React, { useState, useEffect } from 'react';

import GlobalStyles from 'theme/globalStyles';
import Theme from 'theme/theme';
import { Helmet } from 'react-helmet';

import Hero from 'components/sections/Hero/Hero';
import AboutMe from 'components/sections/AboutMe/AboutMe';
import Portfolio from 'components/sections/Portfolio/Portfolio';
import Footer from 'components/sections/Footer/Footer';
import SideBarNavigation from 'components/simple/SideBarNavigation/SideBarNavigation';
import Hamburger from 'components/simple/Hamburger/Hamburger';
import Contact from 'components/sections/Contact/Contact';

const IndexPage = () => {
  const [isSideNavActive, setIsSideNavActive] = useState(false);

  const handleSideNav = () => {
    setIsSideNavActive(!isSideNavActive);
  };

  useEffect(() => {
    isSideNavActive &&
      (window.onscroll = () => {
        handleSideNav();
      });
  }, [isSideNavActive]);

  return (
    <Theme>
      <Helmet>
        <title>Kamil Partyka</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cambo&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <GlobalStyles />
      <Hamburger isSideNavActive={isSideNavActive} callbackFn={handleSideNav} />
      <SideBarNavigation
        isSideNavActive={isSideNavActive}
        callbackFn={handleSideNav}
      />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </Theme>
  );
};

export default IndexPage;
