const defaultState = {
  heroes: [],
};
const ADD_HEROES = "ADD_HEROES";

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_HEROES:
      return { ...state, heroes: [...state.heroes, action.payload] };
    default:
      return state;
  }
};


