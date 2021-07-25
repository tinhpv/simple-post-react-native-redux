import postPlaceholder from '../apis/postPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const posts = getState().posts;
  const userIds = [...new Set(posts.map(post => post.userId))];
  userIds.forEach(id => dispatch(fetchUser(id)));
  console.log(userIds);
};

export const fetchPosts = () => async dispatch => {
  const response = await postPlaceholder.get('/posts');
  dispatch({type: 'FETCH_POSTS', payload: response.data});
};

export const fetchUser = id => async dispatch => {
  const response = await postPlaceholder.get(`/users/${id}`);
  dispatch({type: 'FETCH_USER', payload: response.data});
};
