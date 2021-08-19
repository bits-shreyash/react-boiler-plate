const initState = {

}

export default (state = initState, action) => {
  switch (action.type) {
    case "SAVE_ALERT": {
      return {
        ...state,
        alert: action.payload,
      }
    }
    
    default:
      return state
  }
}
