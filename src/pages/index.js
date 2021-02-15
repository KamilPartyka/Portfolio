import React from 'react';

import GlobalStyles from 'theme/globalStyles';

import Hero from 'components/Hero/Hero';
import Theme from 'theme/theme';
import AboutMe from 'components/AboutMe/AboutMe';
import Skills from 'components/Skills/Skills';
import Portfolio from 'components/Portfolio/Portfolio';
import Footer from 'components/Footer/Footer';

const IndexPage = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Footer />
    </Theme>
  );
};

export default IndexPage;
