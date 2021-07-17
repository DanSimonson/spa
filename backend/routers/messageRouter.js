import express from "express";
import expressAsyncHandler from "express-async-handler";
import Message from "../models/messageModel.js";
import data from "../data.js";

const messageRouter = express.Router();

messageRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const messages = await Message.find({});
    res.send(messages);
  })
);

messageRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    //await Message.remove({});
    const createdMessages = await Message.insertMany(data.messages);
    res.send({ createdMessages });
  })
);

messageRouter.post(
  "/create",
  expressAsyncHandler(async (req, res) => {
    const message = new Message({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      message: req.body.message,
    });
    const createdMessage = await message.save();
    res.send({ note: "Message Created", message: createdMessage });
  })
);

messageRouter.put(
  "/update",
  expressAsyncHandler(async (req, res) => {
    const messageUpdate = await Message.findById(req.body._id);
    console.log("messageUpdate: ", messageUpdate);
    if (messageUpdate) {
      messageUpdate.firstName = req.body.firstName || user.firstName;
      messageUpdate.lastName = req.body.lastName || user.lastName;
      messageUpdate.phone = req.body.phone || user.phone;
      messageUpdate.email = req.body.email || user.email;
      messageUpdate.message = req.body.message || user.message;
      const updatedMessage = await messageUpdate.save();
      res.send({
        //_id: updatedMessage._id,
        firstName: updatedMessage.firstName,
        lastName: updatedMessage.lastName,
        phone: updatedMessage.phone,
        email: updatedMessage.email,
        message: updatedMessage.message,
      });
    } else {
      res.status(404).send({ message: "Message Not Found" });
    }
  })
);

export default messageRouter;

// // @route GET api/items
// // @desc Get all Items
// // @access Public
// router.get("/", (req, res) => {
//   Item.find()
//     .then((items) => res.status(200).json(items))
//     .catch((error) => {
//       res.json({ message: error });
//     });
// });

// // @route POST api/items
// // @desc Create an item
// // @access Public
// /*router.post('/', (req, res) => {
//     const newItem = new Item({
//       title: req.body.title,
//       description: req.body.description,
//       price: req.body.price,
//       url: req.body.url
//     })
//     newItem.save().then(item => res.json(item))
//   })*/
// router.post("/", async (req, res) => {
//   const reservation = req.body;
//   const newReservation = new Item(reservation);
//   try {
//     await newReservation.save();
//     res.status(201).json(newReservation);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });
// // @route delete api/items/:id
// // @desc delete a item
// // @access Public
// router.delete("/:id", async (req, res) => {
//   const { id: _id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(_id)) {
//     return res.status(404).send("No post with that id");
//   }
//   await Item.findByIdAndRemove(_id);
//   res.json({ message: "Reservation deleted successfully" });
// });
// /*router.delete('/:id', (req, res) => {
//     Item.findById(req.params.id)
//       .then(item => item.remove().then(() => res.json({success: true})))
//       .catch(err => res.status(404).json({success: true}))
//     })*/
// router.patch("/:id", async (req, res) => {
//   const { id: _id } = req.params;
//   const reservation = req.body;
//   if (!mongoose.Types.ObjectId.isValid(_id)) {
//     return res.status(404).send("No post with that id");
//   }
//   const updatedReservation = await Item.findByIdAndUpdate(_id, reservation, {
//     new: true,
//     useFindAndModify: false,
//   });
//   res.json(updatedReservation);
//   //mongoose.set("useFindAndModify", false);
// });

// module.exports = router;
