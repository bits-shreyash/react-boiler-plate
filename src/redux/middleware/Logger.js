/**
 * Logger middleware can be used to connect to any third party logging service
 * @param {*} store 
 * @returns 
 */
const Logger = (store) => (next) => (action) => {
    const result = next(action);
    return result;
  };
  
export default Logger;
  