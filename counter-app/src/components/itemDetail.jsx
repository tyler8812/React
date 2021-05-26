import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ match }) => {
    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({ images: {} });

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://fortnite-api.com/v1/playlists/${match.params.id}`
        );
        const item = await fetchItem.json();
        console.log(item.data);
        setItem(item.data);
    };
    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.images.showcase} alt="" />
        </div>
    );
};

export default ItemDetail;
