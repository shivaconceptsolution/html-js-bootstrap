import { Link } from "react-router-dom";

function Header()
{
    return(<header>
        <ul><li><Link to="/swap">Swap</Link></li>
        <li><Link to="/myHello">MyHello</Link></li>
        <li><Link to="/hello">Hello</Link></li></ul>
    </header>)
}
export default Header;