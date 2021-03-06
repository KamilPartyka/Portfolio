import React, { useState, useEffect } from 'react';

import Theme from 'theme/theme';
import { Helmet } from 'react-helmet';
import GlobalStyles from 'theme/globalStyles';
import { InView } from 'react-intersection-observer';

import Hero from 'components/sections/Hero/Hero';
import AboutMe from 'components/sections/AboutMe/AboutMe';
import Portfolio from 'components/sections/Portfolio/Portfolio';
import SideBarNavigation from 'components/simple/SideBarNavigation/SideBarNavigation';
import ToTopArrow from 'components/simple/ToTopArrow/ToTopArrow';
import Hamburger from 'components/simple/Hamburger/Hamburger';
import Contact from 'components/sections/Contact/Contact';
import Footer from 'components/sections/Footer/Footer';
import Modal from 'components/simple/Modal/Modal';

const IndexPage = () => {
  const [isSideNavActive, setIsSideNavActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSideNav = () => {
    setIsSideNavActive(!isSideNavActive);
  };
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    isSideNavActive &&
      (window.onscroll = () => {
        handleSideNav();
      });
  }, [isSideNavActive]);

  return (
    <InView>
      {({ inView, ref }) => (
        <Theme>
          <Helmet>
            <html lang="en" />
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
          <Hamburger
            isSideNavActive={isSideNavActive}
            callbackFn={handleSideNav}
          />
          <SideBarNavigation
            isSideNavActive={isSideNavActive}
            callbackFn={handleSideNav}
          />
          {isModalOpen && <Modal callbackFn={handleModal} />}
          {!inView && <ToTopArrow />}

          <Hero reference={ref} />
          <AboutMe />
          <Portfolio />
          <Contact />
          <Footer callbackFn={handleModal} />
        </Theme>
      )}
    </InView>
  );
};

export default IndexPage;
