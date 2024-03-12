import "./widget.css"; // Đổi từ .scss sang .css
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
    let data;

    //temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "NGƯỜI DÙNG",
                isMoney: false,
                link: "Xem tất cả người dùng",
                icon: (
                    <PersonOutlinedIcon
                        className="widget__icon"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                    />
                ),
            };
            break;
        case "order":
            data = {
                title: "ĐƠN HÀNG",
                isMoney: false,
                link: "Xem tất cả đơn hàng",
                icon: (
                    <ShoppingCartOutlinedIcon
                        className="widget__icon"
                        style={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                        }}
                    />
                ),
            };
            break;
        case "earning":
            data = {
                title: "THU NHẬP",
                isMoney: true,
                link: "Xem thu nhập ròng",
                icon: (
                    <MonetizationOnOutlinedIcon
                        className="widget__icon"
                        style={{
                            backgroundColor: "rgba(0, 128, 0, 0.2)",
                            color: "green",
                        }}
                    />
                ),
            };
            break;
        case "balance":
            data = {
                title: "CÂN BẰNG",
                isMoney: true,
                link: "Xem chi tiết",
                icon: (
                    <AccountBalanceWalletOutlinedIcon
                        className="widget__icon"
                        style={{
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                            color: "purple",
                        }}
                    />
                ),
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="widget__left">
                <span className="widget__title">{data.title}</span>
                <span className="widget__counter">
                    {data.isMoney && "VND"} {amount}
                </span>
                <span className="widget__link">{data.link}</span>
            </div>
            <div className="widget__right">
                <div className="widget__percentage widget__percentage--positive">
                    <KeyboardArrowUpIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;
