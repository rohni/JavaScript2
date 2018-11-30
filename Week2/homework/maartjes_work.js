'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);

const debugging = true;
const logging = (...message) => debugging && console.log(...message);
// Add your code here
const hoursWorked = tasks.map(item => item.duration / 60);
logging(hoursWorked);
const validHours = hoursWorked.filter(h => h > 2);
logging('VALID HOURS', validHours);
const maartjesRate = 100;
const charged = validHours.map(n => n * maartjesRate);
logging('CHARGED', charged);
const sum = (a, b) => a + b;
const total = charged.reduce(sum, 0);

const reduceAllTheThings = () =>
  tasks.reduce((total, item) => (item.duration > 120 ? total + (item.duration / 60) * maartjesRate : total), 0);

console.log('REDUCE ALL THE THINGS', reduceAllTheThings(tasks).toLocaleString('en-EN', { style: 'currency', currency: 'EUR' }));

logging(
  'TOTAL',
  total.toLocaleString('en-EN', {
    style: 'currency',
    currency: 'EUR'
  })
);
