import React, { useState, useEffect } from 'react';

import GlobalStyles from 'theme/globalStyles';
import Theme from 'theme/theme';
import { Helmet } from 'react-helmet';

import Hero from 'components/Hero/Hero';
import AboutMe from 'components/AboutMe/AboutMe';
import Portfolio from 'components/Portfolio/Portfolio';
import Footer from 'components/Footer/Footer';
import SideBarNavigation from 'components/SideBarNavigation/SideBarNavigation';
import Hamburger from 'components/Hamburger/Hamburger';
import Contact from 'components/Contact/Contact';

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
