import React, { useState, useEffect } from 'react';

import GlobalStyles from 'theme/globalStyles';
import Theme from 'theme/theme';

import Hero from 'components/Hero/Hero';
import AboutMe from 'components/AboutMe/AboutMe';
import Skills from 'components/Skills/Skills';
import Portfolio from 'components/Portfolio/Portfolio';
import Footer from 'components/Footer/Footer';
import SideBarNavigation from 'components/SideBarNavigation/SideBarNavigation';
import Hamburger from 'components/Hamburger/Hamburger';

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
      <GlobalStyles />
      <Hamburger isSideNavActive={isSideNavActive} callbackFn={handleSideNav} />
      <SideBarNavigation
        isSideNavActive={isSideNavActive}
        callbackFn={handleSideNav}
      />
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Footer />
    </Theme>
  );
};

export default IndexPage;
