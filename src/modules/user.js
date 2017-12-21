export const UPDATE_FIELD = 'user/UPDATE_FIELD';

const initialState = {
  name: 'Pablo Picasso',
  username: 'El Bandito',
  hometown: 'Alabama',
  bio: 'I come from a land down under...'
};

export default (state = initialState, action) => {
  switch(action.type){
    case UPDATE_FIELD:
      const attribute = action.attribute.className;
      return {
        ...state,
        [attribute]: action.attribute.value
      }
    default:
      return state;
  }
};

export const update = (attribute) => (dispatch) => {
  return dispatch => {
    dispatch({
      type: UPDATE_FIELD,
      attribute: attribute
    })
  }
}
