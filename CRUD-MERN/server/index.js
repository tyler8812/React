const express = require("express");
const mongoose = require("mongoose");
const app = express();
const FoodModel = require("./models/Food");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://tyler:12345@crud.twkqo.mongodb.net/FoodData?retryWrites=true&w=majority",
    { useNewUrlParser: true }
);

app.post("/insert", async (req, res) => {
    console.log(req);
    const foodName = req.body.foodName;
    const daySinceIAte = req.body.days;
    const food = new FoodModel({
        foodName: foodName,
        daySinceIAte: daySinceIAte
    });

    try {
        await food.save();
        res.send(food);
    } catch (err) {
        console.log(err);
    }
});

app.get("/read", async (req, res) => {
    // FoodModel.find({ foodName: "orange" }, (err, result) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.send(result);
    // });
    FoodModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});

app.put("/update", async (req, res) => {
    const newFoodName = req.body.newFoodName;
    const id = req.body.id;
    try {
        await FoodModel.findById(id, (err, updateFood) => {
            updateFood.foodName = newFoodName;
            updateFood.save();
            res.send("update");
        });
    } catch (err) {
        console.log(err);
    }
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await FoodModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});

app.listen(3001, () => {
    console.log("server running on port3001");
});
