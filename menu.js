staff = [
  { image: '/Icons/constructor-2.jpg',
  name: 'Hilary Doe',
  tags: 'CEO & Co-founder',
  about: 'A lot of text'
  },
  { image:'./Icons/c.jpg',
  name: 'Mark Olsen',
  tags: 'Chief Architect',
  about: 'A lot of text'
  },
  { image:'./Icons/constructor-3.jpg',
  name: 'John James',
  tags: 'Construction Manager',
  about: 'A lot of text'
  },
  { image:'./Icons/constructor-4.jpg',
  name: 'Janet Jumah',
  tags: 'Head of Marketing',
  about: 'A lot of text'
  },
  { image:'./Icons/constructor-5.jpg',
  name: 'Lena Perry',
  tags: 'Interior Designer',
  about: 'A lot of text'
  },
  { image:'./Icons/constructor-5.jpg',
  name: 'Lena Perry',
  tags: 'Interior Designer',
  about: 'A lot of text'
  }
]
 let staffCard = '';
 staff.forEach((element) => {
  staffCard = `${staffCard}<div class="staffCon">
  <div class="staffCon-image"><img src=${element.image}></div>
  <div class="staffCon-about"><h2>${element.name}</h2><p class="red-text"><i>${element.tags}</i></p><hr><p>${element.about}</p></div>
  </div>`
 });

const main = document.getElementById('featured-speakers')
const workers = document.createElement('div')
workers.className = 'workers';
workers.innerHTML = staffCard;

main.append(workers);



