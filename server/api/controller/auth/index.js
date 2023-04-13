// controllers/todo.js
import Users from "../../../model/signup.js";
import _ from "lodash";

export const getAllMedbot = (req, res) => {
  Users.register
    .findById()
    .then((register) => res.json(register))
    .catch((err) =>
      res.status(404).json({ message: "User not found", error: err.message })
    );
};

export const getUser = async (request, response) => {
  try {
    const UserRef = await Users.findById(request.params.id);

    const user = await Users.findOneAndUpdate(
      { _id: request.params.id },
      { done: !todoRef.done }
    );

    await medbot.save();

    return response.status(200).json(medbot);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const register = async (req, res) => {
  console.log("printttt")
  try {
    const existingUser = await Users.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "email already exists" });
    }
    const user = await Users.create(req.body);
    return res
      .status(200)
      .json({ message: "user added successfully", user: user });
  } catch (error) {
    console.log(
      "Error | controller | auth | signup | postCreateMedbot | catch",
      error
    );
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error });
  }
};

export const putUpdateMedbot = (req, res) => {
  Users.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({ message: "updated successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to update user info", error: err.message })
    );
};

export const login = async (req, res) => {
  try {
    const existingUser = await Users.findOne({ email: req.body.email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    if (req.body.password !== existingUser.password) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const modifiedObj = _.omit(existingUser, ["password", "confirmPassword"]);
    res.status(200).json({
      message: "Successfully Logged In!",
      user: {
        _id: existingUser._id,
        email: existingUser.email,
        Username: existingUser.Username,
      },
    });
  } catch (error) {
    console.log("Error | controller | auth | login | catch", error);
    res.status(500).json({ message: "Something went wrong", error: error });
  }
};
