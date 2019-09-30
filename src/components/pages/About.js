import React, {useState, useEffect} from 'react';
import axios from 'axios';

var request = new XMLHttpRequest();
var path = "https://fortnite-api.theapinetwork.com/upcoming/get";
request.open("GET", path, true);
request.setRequestHeader('Origin', 'http://127.0.0.1:3000');

function About() {
    useEffect(() => {
        fetchItems();
    },[]);
    const[items, setItems] = useState([]);


    const fetchItems = async () => {
        const data = await fetch('');
        // const data = axios.get('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json();


        console.log(items.items);
        setItems(items.items);
    };

    setItems.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    

    return (
        <React.Fragment>
           <div>
               {items.map(item => (
                   <h1>{item.name}</h1>
               ))}
           </div>
        </React.Fragment>
    );
}

export default About;