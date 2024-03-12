import "./featured.css";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
    return (
        <div className="featured">
            <div className="featured__top">
                <h1 className="featured__title">Tổng Doanh Thu</h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="featured__bottom">
                <div className="featured__chart">
                    <CircularProgressbar
                        value={70}
                        text={"70%"}
                        strokeWidth={5}
                    />
                </div>
                <p className="featured__subtitle">
                    Tổng doanh số bán hàng ngày hôm nay
                </p>
                <p className="featured__amount">20.000.000 VNĐ</p>
                <p className="featured__desc">
                    Xử lý giao dịch trước đó. Các khoản thanh toán cuối cùng có
                    thể không được bao gồm.
                </p>
                <div className="featured__summary">
                    <div className="featured__item">
                        <div className="featured__item-title">Mục tiêu</div>
                        <div className="featured__item-result featured__item-result--negative">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className="featured__result-amount">
                                120.000 VNĐ
                            </div>
                        </div>
                    </div>
                    <div className="featured__item">
                        <div className="featured__item-title">Tuần trước</div>
                        <div className="featured__item-result featured__item-result--positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="featured__result-amount">
                                120.000 VNĐ
                            </div>
                        </div>
                    </div>
                    <div className="featured__item">
                        <div className="featured__item-title">Tháng trước</div>
                        <div className="featured__item-result featured__item-result--positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="featured__result-amount">
                                120.000 VNĐ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
