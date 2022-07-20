let select = 'weekly';

let data = [];

document.querySelector('[data-option="daily"]').addEventListener('click', () => {
  document.querySelector('[data-option="daily"]').classList.add('btn--active')
  document.querySelector(`[data-option="${select}"]`).classList.remove('btn--active');
  select = 'daily';
  filterCard();
});

document.querySelector('[data-option="weekly"]').addEventListener('click', () => {
  document.querySelector('[data-option="weekly"]').classList.add('btn--active');
  document.querySelector(`[data-option="${select}"]`).classList.remove('btn--active');
  select = 'weekly';
  filterCard();
});

document.querySelector('[data-option="monthly"]').addEventListener('click', () => {
  document.querySelector('[data-option="monthly"]').classList.add('btn--active');
  document.querySelector(`[data-option="${select}"]`).classList.remove('btn--active');
  select = 'monthly';
  filterCard();
});

const filterCard = () => {
  for (const iterator of data) {
    if (iterator.title === 'Work') {
      createCardInformation('[data-title="work"]', iterator.timeframes[select]);
      continue;
    }
    if (iterator.title === 'Play') {
      createCardInformation('[data-title="play"]', iterator.timeframes[select]);
      continue;
    }
    if (iterator.title === 'Study') {
      createCardInformation('[data-title="study"]', iterator.timeframes[select]);
      continue;
    }
    if (iterator.title === 'Exercise') {
      createCardInformation('[data-title="exercise"]', iterator.timeframes[select]);
      continue;
    }
    if (iterator.title === 'Social') {
      createCardInformation('[data-title="social"]', iterator.timeframes[select]);
      continue;
    }
    if (iterator.title === 'Self Care') {
      createCardInformation('[data-title="self care"]', iterator.timeframes[select]);
      continue;
    }
  }
}

const createCardInformation = (title, timeFrame) => {
  const card = document.querySelector(title).querySelector('.card--information');

  const current = document.createElement('span');
  current.textContent = `${timeFrame.current}hr`;
  current.classList.add('actual-time');

  const previous = document.createElement('span');
  previous.textContent = `Previous - ${timeFrame.previous}hrs`;
  previous.classList.add('previous-time');

  card.replaceChildren(current, previous);
}

window.onload = async function () {
  const response = await fetch('./data.json');
  data = await response.json();
  filterCard();
}