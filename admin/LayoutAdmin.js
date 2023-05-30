import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import '../css/adminstyle.css'
function Layoutadmin()
{
    return(<div id="admincontainer">
        <AdminHeader />
        <section>
        <Outlet />
        </section>
        <AdminFooter/>
    </div>)
}
export default Layoutadmin;