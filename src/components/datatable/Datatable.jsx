import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Hành Động",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="datatable__cell-action">
                        <Link
                            to="/users/test"
                            style={{ textDecoration: "none" }}
                        >
                            <div className="datatable__view-button">View</div>
                        </Link>
                        <div
                            className="datatable__delete-button"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="datatable">
            <div className="datatable__title">
                Thêm Người Dùng Mới
                <Link to="/users/newUser" className="datatable__link">
                    Thêm Người Dùng
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 9,
                        },
                    },
                }}
                pageSizeOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;
