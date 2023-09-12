import wanderpal from '../asset/images/projects_imgs/wanderpal-resize.png';
import wander1 from '../asset/images/projects_imgs/wanderpal/wander1.png';
import wander2 from '../asset/images/projects_imgs/wanderpal/wander2.png'
import wander3 from '../asset/images/projects_imgs/wanderpal/wander3.png'
import cutcost_resize from '../asset/images/projects_imgs/cost-resize.png';
import cost1 from '../asset/images/projects_imgs/costapp/costcut1.png';
import cost2 from '../asset/images/projects_imgs/costapp/costcut2.png';
import cost3 from '../asset/images/projects_imgs/costapp/costcut3.png';
import cost4 from '../asset/images/projects_imgs/costapp/costcut4.png';

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
    repoLink: 'https://github.com/danielamoreno699/bookstore',
    demoLink: '',
    imageProjectItem1: wander1,
    imageProjectItem2: wander2,
    imageProjectItem3: wander3,
  },
  {
    id: 2,
    name: 'Cost-Cut App',
    description: `A rails built app for budget managing.`,
    image: cutcost_resize,
    year: '2023',
    technologies: [ 'rails', 'ruby', 'psql'],
    repoLink: 'https://github.com/danielamoreno699/bookstore',
    demoLink: '',
    imageProjectItem1: cost1,
    imageProjectItem2: cost2,
    imageProjectItem3: cost3,
    imageProjectItem4: cost4,
  }
];

export default projectsTop;
