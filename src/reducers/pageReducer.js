export default(state =[], action) => {
  switch(action.type) {
    case 'FETCH_LIST':
      return action.payload;
    case 'POST_PAGE':
      return [...state, action.payload];
    default:
      return state;
  }
};
