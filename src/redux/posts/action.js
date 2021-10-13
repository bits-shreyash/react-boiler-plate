export const fetchPostList = (model) => async (dispatch,getState) =>{
    dispatch({
        type:"PROCESS_POSTS",
        payload:model
    })
}