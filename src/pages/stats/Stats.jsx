import React from "react";
import "./stats.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

const Stats = () => {
    return (
        <div className="stats">
            <Sidebar />
            <div className="stats__container">
                <Navbar />
                <div className="stats__charts">
                    <Featured />
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </div>
            </div>
        </div>
    );
};

export default Stats;
