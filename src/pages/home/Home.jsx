import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="home__container">
                <Navbar />
                <div className="home__widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="home__charts">
                    <Featured />
                    <Chart title="6 Tháng Qua (Doanh Thu)" aspect={2 / 1} />
                </div>
                <div className="home__list-container">
                    <div className="home__list-title">Giao Dịch Mới Nhất</div>{" "}
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default Home;
