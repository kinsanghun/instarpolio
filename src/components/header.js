import { NavContext } from "App";
import { useContext } from "react";
import {IoIosInformationCircle, IoIosSend} from "react-icons/io";
export const Header = () => {
    const context = useContext(NavContext);
    const title = "Frontolio";
    return (
        <header>
                <div className="container header">
                <h1  onClick={()=>{context.setNavigate("/")}}>{title}</h1>
                <ul>
                    <li onClick={()=>{context.setNavigate("/direct")}}><IoIosSend/></li>
                    <li onClick={()=>{context.setNavigate("/mypage")}}><IoIosInformationCircle/></li>
                </ul>
                </div>
        </header>
    )
}