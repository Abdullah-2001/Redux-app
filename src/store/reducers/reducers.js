const INITIAL_STATE = {
    users: [
        {
            name: "Abdullah",
            email: "Abdullah@yahoo.com",
        },
        {
            name: "Akber",
            email: "Akber@yahoo.com",
        }
    ]
}

const updateUser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SETDATA":
            return ({
                users: [...state.users, action.user]
            })
        default:
            return state
    }
}

export default updateUser;