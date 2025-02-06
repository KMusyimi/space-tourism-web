import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import './App.css'
import Layout from "./Components/Layout.jsx";
import Home from "./Views/Home.jsx";
import Destinations, {DestinationLoader} from "./Views/Destinations.jsx";
import DestinationLayout, {DestLayoutLoader} from "./Components/DestinationLayout.jsx";
import CrewView, {crewLoader} from "./Views/CrewView.jsx";
import TechnologyView, {TechLoader} from "./Views/TechnologyView.jsx";
import TechLayout from "./Components/TechLayout.jsx";

const router = createBrowserRouter(createRoutesFromElements(<Route path={'/'} element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path={'destinations'} element={<DestinationLayout/>} loader={DestLayoutLoader}>
        <Route index element={<Destinations/>} loader={DestinationLoader}/>
        <Route path={':id'} element={<Destinations/>} loader={DestinationLoader}/>
    </Route>
    <Route path={'crews'} element={<CrewView/>} loader={crewLoader}/>
    <Route path={'technology'} element={<TechLayout/>}>
        <Route index element={<TechnologyView/>} loader={TechLoader}/>
        <Route path={':id'} element={<TechnologyView/>} loader={TechLoader}/>

    </Route>
</Route>))

function App() {
    return (<RouterProvider router={router}/>)
}

export default App
