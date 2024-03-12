import "./newUser.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const New = () => {
    const [file, setFile] = useState("");

    const inputs = [
        {
            id: "first_name",
            label: "First Name",
            type: "text",
            placeholder: "Enter your first name",
        },
        {
            id: "last_name",
            label: "Last Name",
            type: "text",
            placeholder: "Enter your last name",
        },
        {
            id: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
        },
        {
            id: "confirm_password",
            label: "Confirm Password",
            type: "password",
            placeholder: "Confirm Password",
        },
        {
            id: "phone",
            label: "Phone",
            type: "tel",
            placeholder: "Enter your phone number",
        },
        {
            id: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email",
        },
    ];

    return (
        <div className="new">
            <Sidebar />
            <div className="new__container">
                <Navbar />
                <div className="new__inner">
                    <div className="new__top">
                        <h1>Tạo người dùng mới</h1>
                    </div>
                    <div className="new__bottom">
                        <div className="new__left">
                            <img
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                }
                                alt=""
                            />
                        </div>
                        <div className="new__right">
                            <form>
                                {inputs.map((input) => (
                                    <Box
                                        key={input.id}
                                        sx={{ marginBottom: 2 }}
                                    >
                                        <label>{input.label}</label>
                                        <TextField
                                            id={input.id}
                                            type={input.type}
                                            placeholder={input.placeholder}
                                            variant="outlined"
                                            autoComplete="off"
                                            fullWidth
                                        />
                                    </Box>
                                ))}
                                <div className="new__formInput">
                                    <label htmlFor="file">
                                        Ảnh:{" "}
                                        <DriveFolderUploadOutlinedIcon className="new__icon" />
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        onChange={(e) =>
                                            setFile(e.target.files[0])
                                        }
                                        style={{ display: "none" }}
                                    />
                                </div>
                                <button>Gửi</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;
