import "./navbar.css";
import logoUser from "./user.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);

    return (
        <div className="navbar">
            <div className="navbar__wrapper">
                <div className="navbar__search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>
                <div className="navbar__items">
                    <div className="navbar__item">
                        <DarkModeOutlinedIcon
                            className="icon"
                            onClick={() => dispatch({ type: "TOGGLE" })}
                        />
                    </div>
                    <div className="navbar__item">
                        <NotificationsNoneOutlinedIcon className="navbar__icon" />
                        <div className="navbar__counter">1</div>
                    </div>
                    <div className="navbar__item">
                        <ChatBubbleOutlineOutlinedIcon className="navbar__icon" />
                        <div className="navbar__counter">2</div>
                    </div>
                    <div className="navbar__item">
                        <ListOutlinedIcon className="navbar__icon" />
                    </div>
                    <div className="navbar__item">
                        <img src={logoUser} alt="" className="navbar__avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
