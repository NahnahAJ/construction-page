staff = [
  { image: 'https://picsum.photos/200',
  name: 'Janet Jumah',
  tags: 'CEO & CO-FOUNDER',
  about: 'A lot of text'
  },
  { image:'https://picsum.photos/200',
  name: 'Hilary Doe',
  tags: 'Chief Architect',
  about: 'A lot of text'
  },
  { image:'https://picsum.photos/200',
  name: 'John James',
  tags: 'Head of Marketing',
  about: 'A lot of text'
  },
  { image:'https://picsum.photos/200',
  name: 'Nahnah Ahjuwah',
  tags: 'Customer Service Rep',
  about: 'A lot of text'
  },
  { image:'https://picsum.photos/200',
  name: 'Otis Perry',
  tags: 'Customer Service Rep',
  about: 'A lot of text'
  },
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



