import wanderpal from '../asset/images/projects_imgs/wanderpal-resize.png';

// import wandertest from '../asset/images/projects_imgs/wandertest.png';
import wander1 from '../asset/images/projects_imgs/wanderpal/wander1.png';
import wander2 from '../asset/images/projects_imgs/wanderpal/wander2.png'
import wander3 from '../asset/images/projects_imgs/wanderpal/wander3.png'
import wander4 from '../asset/images/projects_imgs/wanderpal/wander4.png'
// import costtest from '../asset/images/projects_imgs/costtest.png';
import cutcost_resize from '../asset/images/projects_imgs/cost-resize.png';
import cost1 from '../asset/images/projects_imgs/costapp/costcut1.png';
import cost2 from '../asset/images/projects_imgs/costapp/costcut2.png';
import cost3 from '../asset/images/projects_imgs/costapp/costcut3.png';
import cost4 from '../asset/images/projects_imgs/costapp/costcut4.png';

import stockProject from '../asset/images/projects_imgs/test2.png';
import stock1 from '../asset/images/projects_imgs/stock-pr/stock-project1.png';
import stock2 from '../asset/images/projects_imgs/stock-pr/stock-project2.png';
import stock3 from '../asset/images/projects_imgs/stock-pr/stock-project3.png';
import stock4 from '../asset/images/projects_imgs/stock-pr/stock-project4.png';

const projectsTop = [
  {
    id: 1,
    name: 'Wanderpal Fullstack',
    description: `The app is built  with React Vite in the Front-End and Rails in the Back-end.`,


    fullDescription: `The app is built  with React Vite in the Front-End and Rails in the Back-end.

    The primary functionality of the app is to allow users to book reservations for tours. To access this functionality, users need to be logged in.
    
    The app supports different types of requests that users can execute. These requests include creating, retrieving (getting), and deleting reservations and items. This indicates that the app has a comprehensive set of features related to managing reservations and items associated with tours.`,
    image: wanderpal,
    year: '2023',
    technologies: ['react', 'redux', 'bootstrap', 'rails', 'ruby', 'psql'],
    repoLink: 'https://github.com/danielamoreno699/wanderpal-frontend',
    demoLink: 'https://fancy-toffee-1b590d.netlify.app',
    imageProjectItem1: wander1,
    imageProjectItem2: wander2,
    imageProjectItem3: wander3,
    imageProjectItem4: wander4,
  },
  {
    id: 2,
    name: 'Cost-Cut App',
    description: `A rails built app for budget managing.`,
    fullDescription: `The Ruby on Rails Cost Cut App application exemplifies the MVC architecture and leverages the Devise gem for authentication and the CanCanCan gem for authorization. Demonstrating the robust capabilities of Ruby on Rails, this app seamlessly interacts with a database to deliver an impressive user experience.
    This system provides users with enhanced capabilities for managing their budgets. Users are empowered to efficiently handle their finances through various features`,
    image: cutcost_resize,
    year: '2023',
    technologies: [ 'rails', 'ruby', 'psql'],
    repoLink: 'https://github.com/danielamoreno699/CostCutApp',
    demoLink: 'https://rails-emv5.onrender.com',
    imageProjectItem1: cost1,
    imageProjectItem2: cost2,
    imageProjectItem3: cost3,
    imageProjectItem4: cost4,
  },
  {
    id: 3,
    name: 'Stock App',
    description: `This project is a React-Redux app that allows users to search for stocks .`,
    fullDescription: `This project is a web and mobile application that takes inspiration from the design of Nelson Sawka. 
    It consists of two pages: the home page and the detail page. 
    The home page showcases a selection of stocks from the Stock Market Exchange, each represented by its symbol (e.g., AAPL for APPLE Inc).
     Additionally, it displays the company's CIK as a numerical value, which serves as the registration number of the company before the SEC. 
     The data used in the application is obtained from the Polygon API documentation`,
    image: stockProject,
    year: '2023',
    technologies: [ 'react', 'redux', 'javascript'],
    repoLink: 'https://github.com/danielamoreno699/react-project-capstone',
    demoLink: 'https://venerable-sprinkles-b40b30.netlify.app',
    imageProjectItem1: stock1,
    imageProjectItem2: stock2,
    imageProjectItem3: stock3,
    imageProjectItem4: stock4,
  },

];

export default projectsTop;
