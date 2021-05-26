import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch("https://fortnite-api.com/v1/playlists");
        const items = await data.json();
        // console.log(items.data);
        setItems(items.data);
    };
    return (
        <div>
            {items.map(item => (
                <h1 key={item.id}>
                    <Link to={`/Shop/${item.id}`}>{item.name}</Link>
                </h1>
            ))}
        </div>
    );
};

export default Shop;
