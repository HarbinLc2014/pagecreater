import pages from '../api/page';


export const fetchPageList = () => async dispatch => {
  const response = await pages.get('/pages');
  dispatch({ type: 'FETCH_LIST', payload: response.data });
}

export const postPage = page => async dispatch => {
  const response = await pages.post('/pages', page);
  dispatch({ type: 'POST_PAGE', payload: response.data });
}

export const selectPage = id => {
  return ({ type: 'SELECT_PAGE', payload: id });
}
