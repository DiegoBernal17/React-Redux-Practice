const initialState = {
  visibility: false,
  mediaId: null
}

const modal = (state = initialState, action) => {
  switch(action.type) {
    case 'OPEN_MODAL':

    case 'CLOSE_MODAL':

    default:
      return state
  }
}

export default modal;