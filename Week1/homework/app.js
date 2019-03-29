'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    'willpower_instinct',
    'mythos',
    'black_powder_war',
    'what_doesnt_kill_us',
    'the_oxygen_advantage',
    'the_memoirs_of_sherlock_holmes',
    'hyperfocus',
    'morgawr',
    'throne_of_jade',
  ];

  const books = {
    harry_potter_chamber_secrets: {
      id: 'harry_potter_chamber_secrets',
      title: 'Harry Potter and the Chamber of Secrets',
      language: 'english',
      author: 'J.K. Rowling',
    },
    willpower_instinct: {
      id: 'willpower_instinct',
      title: 'The Willpower Instinct',
      language: 'english',
      author: 'Kelly McGonigal',
    },
    mythos: { id: 'mythos', title: 'Mythos', language: 'english', author: 'Stephen Fry' },
    black_powder_war: {
      id: 'black_powder_war',
      title: 'Temeraire: Black Powder War',
      language: 'english',
      author: 'Naomi Novik',
    },
    what_doesnt_kill_us: {
      id: 'what_doesnt_kill_us',
      title: "What doesn't Kill Us",
      language: 'english',
      author: 'Scott Carney',
    },
    the_oxygen_advantage: {
      id: 'the_oxygen_advantage',
      title: 'The Oxygen Advantage',
      language: 'english',
      author: 'Patrick McKeown',
    },
    the_memoirs_of_sherlock_holmes: {
      id: 'the_memoirs_of_sherlock_holmes',
      title: 'The Memoirs of Sherlock Holmes',
      language: 'english',
      author: 'Sir Arthur Conan Doyle',
    },
    hyperfocus: {
      id: 'hyperfocus',
      title: 'Hyperfocus',
      language: 'english',
      author: 'Chris Bailey',
    },
    morgawr: {
      id: 'morgawr',
      title: 'Voyage of the Jerle Shannara: Morgawr',
      language: 'english',
      author: 'Terry Brooks',
    },
    throne_of_jade: {
      id: 'throne_of_jade',
      title: 'Temeraire: The Throne of Jade',
      language: 'english',
      author: 'Naomi Novik',
    },
  };

  const covers = {
    harry_potter_chamber_secrets:
      'https://supposedlyfunblog.files.wordpress.com/2015/10/harry-potter-and-the-chamber-of-secrets.jpg',
    willpower_instinct:
      'https://cdn.thrivepersonalfitness.com/wp-content/uploads/posts/willinst.jpg',
    mythos: 'https://dynamic.indigoimages.ca/books/0718188748.jpg?width=400&quality=100&lang=en',
    black_powder_war: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Black_Powder_War_cover.jpg',
    what_doesnt_kill_us:
      'http://res.cloudinary.com/scribe-publications/image/upload/t_fbtransformbook/v1484518020/newcovers/9781925321999.jpg',
    the_oxygen_advantage: 'https://i.harperapps.com/covers/9780062349453/y648.jpg',
    the_memoirs_of_sherlock_holmes:
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Memoirs_of_sherlock_holmes.jpg',
    hyperfocus:
      'https://www.sanity.com.au/media/Images/fullimage/491894/SDC_2406522_2019-03-1--15-31-58.jpg',
    morgawr:
      'https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Morgawrcover.jpg/220px-Morgawrcover.jpg',
    throne_of_jade:
      'http://1.bp.blogspot.com/-Oq94uk3UfUI/UJ-doGygOOI/AAAAAAAAHFg/hnSmKjWMbgY/s1600/Throne+of+Jade.jpg',
  };

  function insertCover(id, path) {
    const liElem = document.getElementById(id);
    console.log(liElem, id, path);
    const img = document.createElement('img');
    img.src = path;
    liElem.appendChild(img);
  }

  // Replace with your own code
  function li(book) {
    const elem = document.createElement('li');
    elem.id = book.id;
    const title = document.createElement('h3');
    title.innerText = book.title;
    const language = document.createElement('span');
    language.innerText = book.language;
    const author = document.createElement('h4');
    author.innerText = book.author;

    elem.appendChild(title);
    elem.appendChild(author);
    elem.appendChild(language);

    return elem;
  }

  function ul(ids, books) {
    const ul = document.createElement('ul');
    for (let id of ids) {
      ul.appendChild(li(books[id]));
    }
    return ul;
  }

  document.body.appendChild(ul(bookTitles, books));
  console.log(Object.keys(covers));
  for (let key of Object.keys(covers)) {
    console.log(key);
    insertCover(key, covers[key]);
  }
}
