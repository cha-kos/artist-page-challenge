export const UPDATE_FIELD = 'user/UPDATE_FIELD';

const initialState = {
  name: 'Pablo Picasso',
  username: '_cubist',
  hometown: 'Málaga, Spain',
  bio: 'Pablo Picasso was a Spanish painter, sculptor, printmaker, ceramicist, stage designer, poet and playwright who spent most of his adult life in France.'
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
