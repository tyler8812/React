import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
    const [foodName, setFoodName] = useState("");
    const [days, setDays] = useState(0);
    const [newFoodName, setNewFoodName] = useState("");
    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        // Axios.get("http://localhost:3001/read").then(response => {
        //     console.log(response);
        //     setFoodList(response.data);
        // });
        document.getElementById("search").click();
    }, []);

    const readFoodList = () => {
        Axios.get("http://localhost:3001/read").then(response => {
            console.log(response);
            setFoodList(response.data);
        });
    };

    const addToList = () => {
        Axios.post("http://localhost:3001/insert", {
            foodName: foodName,
            days: days
        }).then(response => {
            console.log(response);
            document.getElementById("search").click();
            // setFoodList([
            //     ...foodList,
            //     {
            //         _id: response.data._id,
            //         foodName: foodName,
            //         daySinceIAte: days
            //     }
            // ]);
        });
    };

    const updateFood = id => {
        Axios.put("http://localhost:3001/update", {
            newFoodName: newFoodName,
            id: id
        }).then(() => {
            document.getElementById("search").click();
            // setFoodList(
            //     foodList.map(food => {
            //         return food._id == id
            //             ? {
            //                   _id: id,
            //                   foodName: newFoodName,
            //                   daySinceIAte: food.daySinceIAte
            //               }
            //             : food;
            //     })
            // );
        });
    };

    const deleteFood = id => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
            document.getElementById("search").click();
            // setFoodList(
            //     foodList.filter(food => {
            //         return food._id != id;
            //     })
            // );
        });
    };

    return (
        <div className="App">
            <h1>CRUD App with MERN</h1>
            <label>Food Name:</label>
            <input
                type="text"
                onChange={event => {
                    setFoodName(event.target.value);
                }}
            />
            <label>Days Since You Ate It:</label>
            <input
                type="number"
                onChange={event => {
                    setDays(event.target.value);
                }}
            />
            <button onClick={addToList}>Add to list</button>
            <button onClick={readFoodList} id="search">
                Serach
            </button>
            <h1>Food List</h1>
            {foodList.map((val, key) => {
                return (
                    <div key={key} className="food">
                        <h2>{val.foodName}</h2>
                        <h2>{val.daySinceIAte}</h2>
                        <input
                            tpy="text"
                            placeholder="New Food Name..."
                            onChange={event => {
                                setNewFoodName(event.target.value);
                            }}
                        />
                        <button
                            onClick={() => {
                                updateFood(val._id);
                            }}
                        >
                            Update
                        </button>
                        <button
                            onClick={() => {
                                deleteFood(val._id);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
