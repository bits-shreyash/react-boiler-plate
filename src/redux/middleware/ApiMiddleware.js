import apiService from "../../utils/apiService";
/**
 * Api middleware can be used to call any API services
 * @param {*} store 
 * @returns 
 */
 const ApiMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    switch (action.type) {

      case 'PROCESS_POSTS':
        apiService.get('posts',{page:0}).then(async(response)=>{
          
          if(response){
            console.log(response)
            await store.dispatch({type:'SAVE_POSTS',payload:response.data})
          }
        })

        break;

      default:
        break;  

    }
    return result;
  };
  
export default ApiMiddleware;
  