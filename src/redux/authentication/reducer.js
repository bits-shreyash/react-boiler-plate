const initState = {
};

const authentication = (state = initState, action) => {

  switch (action.type) {
    
    case 'SAVE_AUTH':
      return {
        ...state,
        auth: action.payload,
      };
      
    case 'LOG_OUT': {
      return {};
    }
    default:
      return state;
  }
};

export default authentication
