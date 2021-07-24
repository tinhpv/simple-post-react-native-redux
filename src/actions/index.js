import postPlaceholder from '../apis/postPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await postPlaceholder.get('/posts');
  dispatch({type: 'FETCH_POSTS', payload: response.data});
};

export const fetchUser = id => async dispatch => {
  const response = await postPlaceholder.get(`/users/${id}`);
  dispatch({type: 'FETCH_USER', payload: response.data});
};
