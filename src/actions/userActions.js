export function fetchUser() {
    return {
        type: "FETCH_USER_FULFILLED",
        payload: {
            name: "Will",
            age: 35,
        }
    }
}

export function setUserName() {
    return {
        type: "SET_USER_NAME",
        payload: name,
    }
}

export function setUserAge() {
    return {
        type: "SET_USER_AGE",
        payload: age,
    }
}
