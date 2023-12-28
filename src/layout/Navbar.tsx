import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import style from './../style/style.module.css'
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleIcon from "@mui/icons-material/People";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

function Navbar(props: Props) {
  return (
    <div className={style.sidebar}>
    <Button ><PeopleIcon/> Users</Button>
      <Button ><PersonAddIcon/> Add User</Button>
      <Button ><MailIcon  /> Send Message</Button>
      
    </div>
  );
}

export default Navbar;
