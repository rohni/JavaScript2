const init = () => {

  const elem = document.querySelector("div#eventTower");
  const removeHandlerAfterNumClicks = 5;
  let clicks = 0;
  const eventGen = (num) => (event) => {
    console.log(`Event ${num}`, clicks);
    clicks =  clicks + 1;
    if(clicks > removeHandlerAfterNumClicks){
      console.log("Removing Handler1");
      elem.removeEventListener('click', handler1);
    }
  };

  handler1 = eventGen(1);
  handler2 = eventGen(2);
  elem.addEventListener('click', handler1);
  elem.addEventListener('click', handler2);
};

document.addEventListener("DOMContentLoaded", init);
