'use strict';
{
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    'the_oxygen_advantage',
    'what_doesnt_kill_us',
    'temeraire_black_powder_war',
    'mastermind',
    'voyage_of_jerle_shannara_ilse_witch',
    'hyperfocus',
    'other_minds',
    'spinning_silver',
    'dogs_that_know_when_their_owners_are_coming_home'
  ];

  const books = {
    harry_potter_chamber_secrets: {
      title: 'Harry Potter and the Chamber of Secrets',
      language: 'english',
      author: 'J. K. Rowling'
    },
    the_oxygen_advantage: {
      title: 'The Oxygen Advantage',
      language: 'english',
      author: 'Patrick McKeown'
    },
    what_doesnt_kill_us: {
      title: "What Doesn't Kill Us",
      language: 'english',
      author: 'Scott Carney'
    },
    temeraire_black_powder_war: {
      title: 'Temeraire: Black Powder War',
      language: 'english',
      author: 'Naomi Novik'
    },
    mastermind: {
      title: 'Mastermind: How to think like Sherlock Holmes',
      language: 'english',
      author: 'Maria Konnikova'
    },
    voyage_of_jerle_shannara_ilse_witch: {
      title: 'Voyage of Jerle Shannara: The Ilse Witch',
      language: 'english',
      author: 'Terry Brooks'
    },
    hyperfocus: {
      title: 'HyperFocus',
      language: 'english',
      author: 'Chris Bailey'
    },
    other_minds: {
      title: 'Other Minds: The Octopus, The Sea, and the Deep Origins of Conciousness',
      language: 'english',
      author: 'Peter Godfrey-Smith'
    },
    spinning_silver: {
      title: 'Spinning Silver',
      language: 'english',
      author: 'Naomi Novik'
    },
    dogs_that_know_when_their_owners_are_coming_home: {
      title: 'Dogs That Know When Their Owners Are Coming Home',
      language: 'english',
      author: 'Rupert Sheldrake'
    }
  };

  // Replace with your own code
  function unorderedList(bookKeys, books) {
    const ul = document.createElement('ul');
    for (let i = 0; i < bookKeys.length; i++) {
      const key = bookKeys[i];
      const li = listItem(books[key]);
      ul.appendChild(li);
    }
    return ul;
  }

  function listItem(obj) {
    console.log(obj);
    const li = document.createElement('li');
    const title = textRow('Title', obj.title);
    const language = textRow('Language', obj.language);
    const author = textRow('Author', obj.author);
    li.appendChild(title);
    li.appendChild(language);
    li.appendChild(author);
    return li;
  }

  function textRow(label, value) {
    const div = document.createElement('div');
    const spanLabel = document.createElement('span');
    spanLabel.innerText = label;
    const spanValue = document.createElement('span');
    spanValue.innerText = value;
    const colon = document.createTextNode(' : ');
    div.appendChild(spanLabel);
    div.appendChild(colon);
    div.appendChild(spanValue);
    return div;
  }

  // attach to dom
  const root = document.getElementById('myapp');
  const bookList = unorderedList(bookTitles, books);
  root.appendChild(bookList);

  //   <ul>
  //     <li>
  // <div><span></span>:<span></span></div>
  // <div><span></span>:<span></span></div>
  // <div><span></span>:<span></span></div>
  //     </li>
  // </ul>
}
