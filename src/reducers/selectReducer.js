export default(state = 0, action) => {
  switch(action.type) {
    case 'SELECT_PAGE':
      return action.payload;
    default:
      return state;
  }
};
