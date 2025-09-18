import { Link, Outlet } from "react-router-dom";

const AdminDashBoard = () => {
    return (
        <>
            {/* Header */}
            <div id="adminheader">
                <h1>🛍️ Admin Panel</h1>
            </div>

            {/* Wrapper */}
            <div id="adminwrapper">

                {/* Left Sidebar Menu */}
                <div id="leftmenu">
                    <h2 className="menutitle">Manage Store</h2>
                    <Link to="addproduct" className="adminmenu">➕ Add New Product</Link>
                </div>

                {/* Main Content */}
                <div id="admindata">
                    <Outlet />
                </div>
            </div>
        </>
    );
};
export default AdminDashBoard;
