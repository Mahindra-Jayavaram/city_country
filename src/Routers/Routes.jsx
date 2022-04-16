import { Routes, Route } from "react-router";
import { AddCity } from "../Components/AddCity";
import { AddCountry } from "../Components/AddCountry";
import { Home } from "../Components/Home";

export const AllROutes = ()=>{
    return (
        <>
        <Routes>
            <Route path = "/"element = {<Home/>}></Route>
            <Route path = "/add-city"element = {<AddCity/>}></Route>
            <Route path = "/add-country"element = {<AddCountry/>}></Route>
            {/* <Route path = "/"element = {<Home/>}></Route> */}
            {/* <Route path = "/"element = {<Home/>}></Route> */}
     
        </Routes>
        </>
    )
}