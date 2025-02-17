import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import './App.css'
import 'react-loading-skeleton/dist/skeleton.css'
import './Spinner.css'
import Layout from "./Components/Layout.jsx";
import Home from "./Views/Home.jsx";
import Destination, {DestinationLoader} from "./Views/Destination.jsx";
import DestinationLayout from "./Components/DestinationLayout.jsx";
import Crew, {crewLoader} from "./Views/Crew.jsx";
import Technology, {TechLoader} from "./Views/Technology.jsx";
import TechLayout from "./Components/TechLayout.jsx";
import CrewLayout from "./Components/CrewLayout.jsx";
import Error from "./Components/Error.jsx";

const router = createBrowserRouter(createRoutesFromElements(<Route path={'/'} element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path={'destinations'} element={<DestinationLayout/>}>
        <Route index element={<Destination/>} loader={DestinationLoader} errorElement={<Error/>}/>
        <Route path={':id'} element={<Destination/>} loader={DestinationLoader} errorElement={<Error/>}/>
    </Route>
    <Route path={'crews'} element={<CrewLayout/>}>
        <Route index element={<Crew/>} loader={crewLoader} errorElement={<Error/>}/>
        <Route path={':id'} element={<Crew/>} loader={crewLoader} errorElement={<Error/>}/>
    </Route>
    <Route path={'technology'} element={<TechLayout/>}>
        <Route index element={<Technology/>} loader={TechLoader} errorElement={<Error/>}/>
        <Route path={':id'} element={<Technology/>} loader={TechLoader} errorElement={<Error/>}/>
    </Route>
</Route>))

function App() {
    return (<RouterProvider router={router}/>)
}

export default App
