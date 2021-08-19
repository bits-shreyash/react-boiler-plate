export const toggleModal = (showModal) => async (dispatch,getState) =>{
    dispatch({
        type:"TOGGLE_MODAL",
        payload:showModal
    })
}


export const toggleAlert = (showAlert) => async (dispatch,getState) =>{
    dispatch({
        type:"TOGGLE_ALERT",
        payload:showAlert
    })
}