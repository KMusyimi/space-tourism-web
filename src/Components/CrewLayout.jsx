import {Outlet} from "react-router-dom";
import Pagination from "./Pagination.jsx";
import imageName from "../utils.js";


export default function CrewLayout() {
    return (
        <div className={'crew-container'}>
            <Pagination count={4}/>
            <Outlet/>
        </div>
    )
}