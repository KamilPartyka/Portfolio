import React, { useState, useEffect } from 'react';
import { InView } from 'react-intersection-observer';

import Hero from 'sections/Hero';
import AboutMe from 'sections/AboutMe';
import Portfolio from 'sections/Portfolio';
import SideBarNavigation from 'components/SideBarNavigation';
import ToTopArrow from 'components/ToTopArrow';
import Hamburger from 'components/Hamburger';
import Contact from 'sections/Contact';
import Footer from 'sections/Footer';
import Modal from 'components/Modal';

import { theme } from 'theme/theme';
import { Helmet } from 'react-helmet';
import GlobalStyles from 'theme/globalStyles';

import { ThemeProvider } from 'styled-components';

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
        <ThemeProvider theme={theme}>
          <Helmet>
            <html lang='en' />
            <title>Kamil Partyka</title>
            <link
              href='https://fonts.googleapis.com/css2?family=Cambo&display=swap'
              rel='stylesheet'
            />
            <link
              href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap'
              rel='stylesheet'
            />
          </Helmet>
          <GlobalStyles />
          <>
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
          </>
        </ThemeProvider>
      )}
    </InView>
  );
};

export default IndexPage;
