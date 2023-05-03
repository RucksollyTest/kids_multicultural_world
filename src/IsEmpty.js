const IsEmpty = (x) => {
    // const typs = typeof x
    const check = Object.keys(x).length === 0
    return check
}

export default IsEmpty