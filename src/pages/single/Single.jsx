import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="single__container">
                <Navbar />
                <div className="single__top">
                    <div className="single__left">
                        <div className="single__row">
                            <h1 className="single__title">Thông Tin</h1>
                            <button className="single__editButton">Sửa</button>
                        </div>
                        <div className="single__item">
                            <img
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                className="single__itemImg"
                            />
                            <div className="single__details">
                                <h1 className="single__itemTitle">Jane Doe</h1>
                                <div className="single__detailItem">
                                    <span className="single__itemKey">
                                        Email:
                                    </span>
                                    <span className="single__itemValue">
                                        janedoe@gmail.com
                                    </span>
                                </div>
                                <div className="single__detailItem">
                                    <span className="single__itemKey">
                                        Điện Thoại:
                                    </span>
                                    <span className="single__itemValue">
                                        +1 2345 67 89
                                    </span>
                                </div>
                                <div className="single__detailItem">
                                    <span className="single__itemKey">
                                        Địa Chỉ:
                                    </span>
                                    <span className="single__itemValue">
                                        Elton St. 234 Garden Yd. NewYork
                                    </span>
                                </div>
                                <div className="single__detailItem">
                                    <span className="single__itemKey">
                                        Quốc Gia:
                                    </span>
                                    <span className="single__itemValue">
                                        USA
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single__right">
                        <Chart
                            aspect={3 / 1}
                            title="Chi Tiêu Của Người Dùng (6 Tháng Qua)"
                        />
                    </div>
                </div>
                <div className="single__bottom">
                    <h1 className="single__title-table">Giao Dịch Mới Nhất</h1>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Single;
