/**
 * Api middleware can be used to call any API services
 * @param {*} store 
 * @returns 
 */
 const ApiMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    return result;
  };
  
export default ApiMiddleware;
  