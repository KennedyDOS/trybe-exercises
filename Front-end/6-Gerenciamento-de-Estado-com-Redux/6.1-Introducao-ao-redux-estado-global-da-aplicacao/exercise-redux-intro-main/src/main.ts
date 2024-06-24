import { nextColor, previousColor, randomColor } from './redux/actions';
import { getRandomColor } from './utils';


const btnPrevious = document.getElementById('previous') as HTMLButtonElement;
const btnNext = document.getElementById('next') as HTMLButtonElement;
const btnRandom = document.getElementById('random') as HTMLButtonElement;

btnPrevious.addEventListener('click', () => {
  store.dispatch(previousColor());
});

btnNext.addEventListener('click', () => {
  store.dispatch(nextColor());
});

store.subscribe(() => {
  const { colors, index } = store.getState();
  const colorValue = document.getElementById('value') as HTMLSpanElement;
  colorValue.innerHTML = colors[index];

  const container = document.getElementById('container') as HTMLDivElement;
  container.style.backgroundColor = colors[index];
});

btnRandom.addEventListener('click', () => {
  store.dispatch(nextColor());
});
