import { bindActionCreators } from "redux";

const data = (state ,action) => {
  switch(action.type) {
    case 'SEARCH_VIDEO': {
      if(!action.payload.query) {
        return state;
      }
      let results = []
      state.data.categories.map((category) => {
        category.playlist.filter((item) => {
          return item.author.toLowerCase().includes(action.payload.query.toLowerCase())  && results.push(item)
        })
      })
      return {
        ...state,
        search: results
      }
    }
    default:
      return state
  }
}

export default data