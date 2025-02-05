import {NavLink, Outlet} from "react-router-dom";

export default function TechLayout() {

    return (
        <div className={'tech-container'}>
            <nav>
                <ul>
                    <li><NavLink to={'.'} end>1</NavLink></li>
                    <li><NavLink to={'BmudOu45Cg9Wj3OBgGj4'}>2</NavLink></li>
                    <li><NavLink to={'gr3DPxvs81j73QtggPPu'}>3</NavLink></li>
                </ul>
            </nav>
            <Outlet/>
        </div>)
}