import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="sidebar__logo">Tech Hub</span>
                </Link>
            </div>
            <hr className="sidebar__hr" />
            <div className="sidebar__center">
                <ul>
                    <p className="sidebar__title">CHÍNH</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="sidebar__icon" />
                            <span>Bảng điều khiển</span>
                        </li>
                    </Link>
                    <p className="sidebar__title">DANH SÁCH</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="sidebar__icon" />
                            <span>Người dùng</span>
                        </li>
                    </Link>
                    <Link style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="sidebar__icon" />
                            <span>Các sản phẩm</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCardIcon className="sidebar__icon" />
                        <span>Đơn đặt hàng</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="sidebar__icon" />
                        <span>Vận chuyển</span>
                    </li>
                    <p className="sidebar__title">TIỆN ÍCH</p>
                    <Link to="/stats" style={{ textDecoration: "none" }}>
                        <li>
                            <InsertChartIcon className="sidebar__icon" />
                            <span>Thống kê</span>
                        </li>
                    </Link>
                    <li>
                        <NotificationsNoneIcon className="sidebar__icon" />
                        <span>Thông báo</span>
                    </li>
                    <p className="sidebar__title">DỊCH VỤ</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="sidebar__icon" />
                        <span>Tình trạng hệ thống</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="sidebar__icon" />
                        <span>Nhật ký</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="sidebar__icon" />
                        <span>Cài đặt</span>
                    </li>
                    <p className="sidebar__title">Người dùng</p>
                    <li>
                        <AccountCircleOutlinedIcon className="sidebar__icon" />
                        <span>Hồ sơ</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="sidebar__icon" />
                        <span>Đăng xuất</span>
                    </li>
                </ul>
            </div>
            <div className="sidebar__bottom">
                <div
                    className="sidebar__colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="sidebar__colorOption"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
        </div>
    );
};

export default Sidebar;
