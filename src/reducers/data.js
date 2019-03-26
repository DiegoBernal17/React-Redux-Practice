
import schema from '../schemas/index'

const initialState = {
  entities: schema.entities,
  categories: schema.result.categories,
  search: []
}

const data = (state = initialState, action) => {
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
        data: {
          ...state,
          search: results
        }
      }
    }
    default:
      return state
  }
}

export default data