import { useState } from "react";
import axios from "axios";

export const AddCountry = ()=>{
    const [country, setCountry] = useState({
        name : "",
    })

    const handleChange = (e)=>{
        const {className, value} = e.target;
        setCountry({
            ...country,
            [className] : value,
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:1342/countries",country).then((res)=>{
            alert("Country has been added");
            console.log(res);
        })
    }
    return (
        <>
        <div>
            <h1>Add Country</h1>
            <form onSubmit={handleSubmit}>
            <label>Country Name :</label>
            <input type="text" placeholder="Enter the Country Name" className="name" value = {country.name} onChange={handleChange} ></input>
            <input type="submit"/>
            </form>

            <a href="/"><button>Go to home</button></a>

        </div>
        </>
    )
}