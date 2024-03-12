import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import "./list.css";

const List = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="list__container">
                <Navbar />
                <Datatable />
            </div>
        </div>
    );
};

export default List;
