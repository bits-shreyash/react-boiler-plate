export const login = (data) => async (dispatch, getState) => {
}


export const logout = (data) => async (dispatch, getState) => {
    try {
        const { username, password } = data;
        await dispatch({
            type: 'LOG_OUT',
        });
    } catch (error) {
        console.log(error);
    }
}