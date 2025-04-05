import React, { useState, useEffect } from 'react';

import Theme from 'theme/theme';
import { Helmet } from 'react-helmet';
import GlobalStyles from 'theme/globalStyles';
import { InView } from 'react-intersection-observer';

import Hero from 'sections/Hero/Hero';
import AboutMe from 'sections/AboutMe/AboutMe';
import Portfolio from 'sections/Portfolio/Portfolio';
import SideBarNavigation from 'components/SideBarNavigation/SideBarNavigation';
import ToTopArrow from 'components/ToTopArrow/ToTopArrow';
import Hamburger from 'components/Hamburger/Hamburger';
import Contact from 'sections/Contact/Contact';
import Footer from 'sections/Footer/Footer';
import Modal from 'components/Modal/Modal';

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
