import React , { useState } from 'react'
import TextBox from './TextBox'
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import axios from "axios";


function Horoscope() {
  const [sun, setSun] = useState("");
  const [moon, setMoon] = useState("");
  const [rising, setRising] = useState("");
  //TODO: Fill in the ? with appropriate names/values for a horoscope.
  //HINT: Look at the HoroscopeHandler's response in Main.java to choose a default useState value.
  const [horoscope, setHoroscope] = useState([]);

  const requestHoroscope = () => {
    const toSend = {
        //TODO: Pass in the values for the data. Follow the format the route expects!
        sun : sun,
        moon : moon,
        rising : rising
    };

    let config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        }
    }

    axios.post("http://localhost:4567/horoscope", toSend, config)
    .then(response => {
        console.log(response.data);
        //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
        //Note: It is very important that you understand how this is set up and why it works!
        setHoroscope(response.data["horoscope"]);
    })
    .catch(error => {
        console.log(error);
    });
  }

  return (
    <div>
      <h1>Hello</h1>
      <TextBox label="sun" change={setSun}/>
      <TextBox label="moon" change={setMoon}/>
      <TextBox label="rising" change={setRising}/>
      <AwesomeButton onPress={requestHoroscope}>Submit</AwesomeButton>
      <div>{horoscope.map((x) => {return (<p>{x}</p>)})}</div>
      </div>
    
  )
}

export default Horoscope