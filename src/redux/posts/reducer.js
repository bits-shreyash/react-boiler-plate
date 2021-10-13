const initState = {}
export default (state = initState, action) => {
    switch (action.type) {

        case "SAVE_POSTS": {
            return {
              ...state,
              posts: action.payload,
            }
          }
        default:
        return state;  

    }
}