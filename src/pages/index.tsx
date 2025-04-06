import Hamburger from 'components/Hamburger';
import Modal from 'components/Modal';
import SideBarNavigation from 'components/SideBarNavigation';
import ToTopArrow from 'components/ToTopArrow';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { InView } from 'react-intersection-observer';

import AboutMe from 'sections/AboutMe';
import Contact from 'sections/Contact';
import Footer from 'sections/Footer';
import Hero from 'sections/Hero';
import Portfolio from 'sections/Portfolio';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'theme/globalStyles';
import { theme } from 'theme/theme';

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
    if (isSideNavActive) {
      window.onscroll = () => {
        handleSideNav();
      };
    }
  }, [isSideNavActive]);

  return (
    <InView>
      {({ inView, ref }) => (
        <ThemeProvider theme={theme}>
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
          <>
            <Hamburger isSideNavActive={isSideNavActive} callbackFn={handleSideNav} />
            <SideBarNavigation isSideNavActive={isSideNavActive} callbackFn={handleSideNav} />
            {isModalOpen && <Modal callbackFn={handleModal} />}
            {!inView && <ToTopArrow />}

            <Hero reference={ref} />
            <AboutMe />
            <Portfolio />
            <Contact />
            <Footer callbackFn={handleModal} />
          </>
        </ThemeProvider>
      )}
    </InView>
  );
};

export default IndexPage;
