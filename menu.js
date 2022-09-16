const staff = [
  {
    image: './Icons/constructor-2.jpg',
    name: 'Hilary Doe',
    tags: 'CEO & Co-founder',
    about: 'After starting out the company as a regular construction comapny, Hilary saw to make a change in how buildings are made so as to sustain the environment. With his vision, Eco-Builders was formed.',
  },
  {
    image: './Icons/c.jpg',
    name: 'Mark Olsen',
    tags: 'Chief Architect',
    about: 'Mark brings technical and creative skills together to create plans for residential and commercial buildings. This aids in meeting the wishes of clients and ensuring compliance with building regulations.',
  },
  {
    image: './Icons/constructor-3.jpg',
    name: 'John James',
    tags: 'Construction Manager',
    about: 'James and his team perform a critical role in the running of any construction or renovation project. His teams skills and knowledge largely determine if a project is completed on time and within budget.',
  },
  {
    image: './Icons/constructor-4.jpg',
    name: 'Janet Jumah',
    tags: 'Site Manager ',
    about: 'Janet oversees work schedules and coordinating the arrival of materials and labour to the construction site. She operates as a liaison between boots on the ground and the companys management.',
  },
  {
    image: './Icons/constructor-5.jpg',
    name: 'Lena Perry',
    tags: 'Interior Designer',
    about: 'Lena is in charge of sketch designs and ideas using traditional methods or computer software. She and her team work to a brief, following design principles to produce exemplary results.',
  },
  {
    image: './Icons/constructor-6.jpg',
    name: 'Francis Drew',
    tags: 'Head Engineer',
    about: 'Francis and his team use their training to design, construct, and test structures and problem-solving systems. They specialise in particular areas and drive innovation to meet both client demands environmental demands.',
  },
];

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu-nav');
const close = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('display');
  hamburger.classList.toggle('hidden');
  document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
  navMenu.classList.toggle('display');
  hamburger.classList.toggle('hidden');
  document.body.style.overflow = 'auto';
});

document.querySelectorAll('.menu-link').forEach((n) => n.addEventListener('click', () => {
  navMenu.classList.toggle('display');
  hamburger.classList.toggle('hidden');
  document.body.style.overflow = 'auto';
}));

let staffCard = '';
staff.forEach((element) => {
  staffCard = `${staffCard}<div class="staffCon">
  <div class="staffCon-image"><img src=${element.image}></div>
  <div class="staffCon-about"><h2>${element.name}</h2><p class="red-text"><i>${element.tags}</i></p><hr><p>${element.about}</p></div>
  </div>`;
});

const main = document.getElementById('featured-speakers');
const workers = document.createElement('div');

workers.className = 'workers';
workers.innerHTML = staffCard;
if (main) {
  main.append(workers);
}
