import { Link } from "react-router-dom";

function AdminHeader()
{
    return(<header>Welcome in Admin Header
             <Link to="/admin/home">Home</Link>  ||  <Link to="/admin/about">About us</Link> 
    </header>)
}
export default AdminHeader;