import { AnyAction } from 'redux';
import { getRandomColor } from '../../utils';
import { NEXT_COLOR, PREVIOUS_COLOR, RANDOM_COLOR } from '../actions';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case NEXT_COLOR:
      // ...
    case PREVIOUS_COLOR:
      // ...
    case RANDOM_COLOR:
      return {
        ...state,
        colors: [...state.colors, getRandomColor()],
        index: state.colors.length,
      };
    default:
      return state;
  }
};

export default reducer;