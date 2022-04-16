import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

export const AddCity = ()=>{
    // let num = 1;
    // let uuid = uuid;
    const [country, setCountry]= useState([])
    const [city, setCity] = useState({
        name : "",
        population : "",
        country : "",
        unique : uuidv4(),
        
    })

    const handleChange = (e)=>{
        const {className, value} = e.target;
        setCity({
            ...city,
            [className] : value,
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:1342/cities",city).then((res)=>{
            alert("City has been added");
            console.log(res);
        })
    }
    useEffect(() =>{
        getData();
    },[])

    const getData = ()=>{
        axios.get(" http://localhost:1342/countries").then((res) =>{
            setCountry(res.data);
            console.log(res.data)
        })

    }

    return (
        <>
        <div>
            <h1>ADD CITY DETAILS</h1>
            <hr />
            <form onSubmit={handleSubmit}>
            <label>City Name :</label>
            <input type="text" placeholder="Enter the City Name" className="name" value = {city.name} onChange={handleChange} ></input><br/>
            <label>Population :</label>
            <input type="Number" placeholder="Enter Population" className="population" value = {city.population} onChange={handleChange} ></input><br/>
            <label>Country :</label>
            <input type="text" placeholder="Enter Country" className="country" value = {city.country} onChange={handleChange} ></input><br/>
            <select onChange={handleChange}>
                {country.map((country) => {
                    console.log(country.name);
                    return(
                        <option className="countryName" value = {country.name} >{country.name}</option>
                    );
                    // <option></option>
                })}
            </select><br/>
            {/* <input type="text" placeholder="unique" className="unique" value = {city.unique} onChange={handleChange} ></input><br/> */}
            <input type="submit"/>
            </form>
             <a href="/"><button>Go to home</button></a>
        </div>
        </>
    )
}