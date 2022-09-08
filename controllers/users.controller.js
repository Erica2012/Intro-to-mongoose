const getUsers = (req, res) => {
    res.status(200).send("Get all users")
}
const getUser = (req, res) => {
    res.status(200).send("Get single user")
}
const createUser = (req, res) => {
    res.status(200).send("creat user")
}
const updateUser = (req, res) => {
    res.status(200).send("update user")
}
const deleteUser = (req, res) => {
    res.status(200).send("delete user")
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}