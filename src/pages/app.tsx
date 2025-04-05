import React, { useState, useEffect } from 'react';
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

function App() {
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
      )}
    </InView>
  );
}

export default App;
