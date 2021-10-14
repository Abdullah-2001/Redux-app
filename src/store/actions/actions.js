const setData = (user) => {
    return (dispatch) => {
        dispatch({ type: "SETDATA", user: user })
    }
}

export { setData };