import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export const Home = () => {
const [city, setCity] = useState([])
    useEffect(() =>{
        getData();
    },[])

    const getData = ()=>{
        axios.get(" http://localhost:1342/cities").then((res) =>{
            setCity(res.data);
            // console.log(res.data)
        })

    }
    const handlePopulation = ()=>{
        // console.log(e.population)
        city.sort((a,b) =>{
            return +a.population - +b.population;
        })
        setCity(city);
        console.log(city);
    }

    return (
        <>
        <div>
            <div className="btnDiv">
            <Link to="/add-country"><button className="buttons">Add Country</button></Link>
            <Link to="/add-city"><button className="buttons">Add City</button></Link>
            <hr></hr>
            </div>
            <div className="sortBtns" style={{
                "display" : "flex",
                "margin" : "auto",
                "width" : "18%",
            }}>
                <button>Filter by Country</button>
                <button onClick={handlePopulation}>Sort By Population</button>
            </div>
            <hr />
            <table style={{
                "border" : "1px solid black",
                "margin" : "auto",
                "width" : "30%"
            }}>
                <thead >
                    <tr >
                        <th style={{
                    "border" : "1px solid black",
                    }}>Id</th>
                        <th style={{
                    "border" : "1px solid black",
                    }}>Country</th>
                        <th style={{
                    "border" : "1px solid black",
                    }}>City</th>
                        <th style={{
                    "border" : "1px solid black",
                    }}>Population</th>
                        <th style={{
                    "border" : "1px solid black",
                    }}>Edit</th>
                        <th style={{
                    "border" : "1px solid black",
                    }}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {city.map((citi,index)=>{
                        return(
                            <tr style={{
                                "border" : "1px solid black",
                                }} key = {citi.unique}>
                                <td >{citi.id}</td>
                                <td>{citi.country}</td>
                                <td>{citi.name}</td>
                                <td>{citi.population}</td>
                                <td>{"`Edit`"}</td>
                                <td>{"`Delete`"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
        </>
    )
}