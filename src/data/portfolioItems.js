import staconPage from 'images/pages/staconPage.png';
import thisPage from 'images/pages/thisPage.png';
import calculatorPage from 'images/pages/calculatorPage.png';
import todoPage from 'images/pages/todoPage.png';

const portfolioItemsArr = [
  {
    id: 0,
    gitLink: 'https://github.com/KamilPartyka/Portfolio',
    image: thisPage,
    description: 'Currently viewed page, created using Gatsby.js',
  },
  {
    id: 1,
    webLink: 'https://stacon.net.pl/',
    gitLink: 'https://github.com/KamilPartyka/Stacon-2.0',
    image: staconPage,
    description:
      'Simple webpage for Stacon company, created using HTML CSS and JS',
  },
  {
    id: 2,
    webLink: 'https://kamilpartyka.github.io/Simple-Calculator',
    gitLink: 'https://github.com/KamilPartyka/Simple-Calculator',
    image: calculatorPage,
    description: 'Calculator Page',
  },
  {
    id: 3,
    webLink: 'https://kamilpartyka.github.io/ToDo-List/',
    gitLink: 'https://github.com/KamilPartyka/ToDo-List',
    image: todoPage,
    description: 'ToDo Page',
  },
  {
    id: 4,
    webLink: 'https://duckduckgo.com/',
    gitLink: 'https://duckduckgo.com/',
    image: 'https://unsplash.it/1000/1000',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum, leo eu varius lacinia, lacus tortor pretium sem, at pretium lectus orci sed sapien. Nam consectetur elementum enim at aliquam. In hac habitasse platea dictumst.',
  },
];

export default portfolioItemsArr;
