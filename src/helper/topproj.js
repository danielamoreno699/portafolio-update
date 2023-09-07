import wanderpal from '../asset/images/projects_imgs/wanderpal.png';

const projectsTop = [
  {
    id: 0,
    name: 'Wanderpal Fullstack',
    description: `The app is built using React with Vite, which are technologies used for creating web applications. React is a popular JavaScript library for building user interfaces, and Vite is a build tool that enhances the development experience.

The primary functionality of the app is to allow users to book reservations for tours. To access this functionality, users need to be logged in, suggesting that there's likely a user authentication system in place.

The app supports different types of requests that users can execute. These requests include creating, retrieving (getting), and deleting reservations and items. This indicates that the app has a comprehensive set of features related to managing reservations and items associated with tours.`,
    imageLink: wanderpal,
    year: '2023',
    technologies: ['react', 'redux', 'bootstrap', 'rails', 'ruby', 'psql'],
    repoLink: 'https://github.com/danielamoreno699/bookstore',
    demoLink: '',
  }
];

export default projectsTop;
