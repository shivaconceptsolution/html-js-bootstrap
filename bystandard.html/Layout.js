import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout()
{
    
    return(<div>
       <Header />
       <section>
         <Outlet />
       </section>
       <Footer />
    
     </div>
     )
}

export default Layout;