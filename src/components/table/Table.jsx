import "./table.css";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
    const rows = [
        {
            id: 1143155,
            product: "Acer Nitro 5",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 2235235,
            product: "Playstation 5",
            img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Michael Doe",
            date: "1 March",
            amount: 900,
            method: "Online Payment",
            status: "Pending",
        },
        {
            id: 2342353,
            product: "Redragon S101",
            img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 35,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 2357741,
            product: "Razer Blade 15",
            img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Jane Smith",
            date: "1 March",
            amount: 920,
            method: "Online",
            status: "Approved",
        },
        {
            id: 2342355,
            product: "ASUS ROG Strix",
            img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Harold Carol",
            date: "1 March",
            amount: 2000,
            method: "Online",
            status: "Pending",
        },
    ];
    return (
        <TableContainer component={Paper} className="list__table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="list__table-cell">
                            ID Theo Dõi
                        </TableCell>
                        <TableCell className="list__table-cell">
                            Sản Phẩm
                        </TableCell>
                        <TableCell className="list__table-cell">
                            Khách Hàng
                        </TableCell>
                        <TableCell className="list__table-cell">Ngày</TableCell>
                        <TableCell className="list__table-cell">
                            Số Lượng
                        </TableCell>
                        <TableCell className="list__table-cell">
                            Phương Thức Thanh Toán
                        </TableCell>
                        <TableCell className="list__table-cell">
                            Trạng Thái
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="list__table-cell">
                                {row.id}
                            </TableCell>
                            <TableCell className="list__table-cell">
                                <div className="list__cell-wrapper">
                                    <img
                                        src={row.img}
                                        alt=""
                                        className="list__image"
                                    />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className="list__table-cell">
                                {row.customer}
                            </TableCell>
                            <TableCell className="list__table-cell">
                                {row.date}
                            </TableCell>
                            <TableCell className="list__table-cell">
                                {row.amount}
                            </TableCell>
                            <TableCell className="list__table-cell">
                                {row.method}
                            </TableCell>
                            <TableCell className="list__table-cell">
                                <span className={`list__status ${row.status}`}>
                                    {row.status}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;
