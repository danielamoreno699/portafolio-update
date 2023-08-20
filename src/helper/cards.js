import bookstorereact3 from '../asset/images/projects_imgs/bookstorereact3.png';
import movies2 from '../asset/images/projects_imgs/movies2.png';
import spaceX from '../asset/images/projects_imgs/spaceX.png';
import stock from '../asset/images/projects_imgs/stock.png';

const projectDetailList = [
    {
      id: 0,
      name: 'Bookstore',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      imageLink: bookstorereact3,
      technologies: ['html', 'css', 'react', 'redux'],
      role: 'FrontEnd Dev',
      company: 'Microverse',
      year: '2023',
      repoLink: 'https://github.com/danielamoreno699/bookstore',
      demoLink: 'https://comfy-unicorn-6d6cfd.netlify.app/Books',
    },
    {
      id: 1,
      name: 'Popcorn Pulse',
      description: 'PopcornPulse is a web app that uses Webpack, Jest, HTML, SCSS, and JavaScript. It fetches data from a movie API and displays the latest trendy movies. Users can like or leave comments on movies, with like and comment counts stored using another API',
      imageLink: movies2,
      technologies: ['html', 'css', 'javascript', 'Bootstrap'],
      role: 'Full Stack Dev',
      company: 'Facebook',
      year: '2015',
      repoLink: '#',
      demoLink: '#',
    },
    {
      id: 2,
      name: 'Space X',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
      imageLink: spaceX,
      technologies: ['html', 'css', 'React', 'Redux'],
      role: 'Back end Dev',
      company: 'Facebook',
      year: '2015',
      repoLink: '#',
      demoLink: '#',
    },
    {
      id: 3,
      name: 'React stock Market app',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      imageLink: stock,
      technologies: ['html', 'css', 'React', 'Redux'],
      role: 'Lead developer',
      company: 'Uber',
      year: '2018',
      repoLink: '#',
      demoLink: '#',
    },
    {
      id: 4,
      name: 'Uber Navigation',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      imageLink: 'assets/card3.png',
      technologies: ['html', 'css', 'javascript'],
      role: 'Lead developer',
      company: 'Uber',
      year: '2018',
      repoLink: '#',
      demoLink: '#',
    },
  ];

  export default projectDetailList