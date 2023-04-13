// controllers/todo.js
import Users from "../model/signup";

export const getAllMedbot = (req, res) => {
    Users.register.findById()
        .then((register) => res.json(register))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "User not found", error: err.message })
        );
};
export const getUser = async (request, response) => {
    try {
        const UserRef = await Users.findById(request.params.id);

        const user = await Users.findOneAndUpdate(
            { _id: request.params.id },
            { done: !todoRef.done }
        )

        await medbot.save();

        return response.status(200).json(medbot);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
export const postCreateMedbot = (req, res) => {
    //console.log(req.body);
    Users.create(req.body)
        .then((formData) => res.json({ message: "user added successfully", formData }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add user", error: err.message })
        );
};

export const putUpdateMedbot= (req, res) => {
    Users.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update user info", error: err.message })
        );
};

//exports.deleteTodo = (req, res) => {
    //Users.findByIdAndRemove(req.params.id, req.body)
      //  .then((data) =>
       //     res.json({ message: "user deleted successfully", data })
        //)
       // .catch((err) =>
        //    res
         //       .status(404)
           //     .json({ //message: "user not found", error: err.message })
       // );
//};