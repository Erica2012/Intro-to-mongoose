const router = require ("express").Router

const { 
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
 } = require("../controllers/users.controller")

const userRouter = router()

userRouter.route("/").get(getUsers).post(createUser);
userRouter.route("/:userId").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;
