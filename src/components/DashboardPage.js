import TableDashboard from "./TableDashboard";
import NavbarDashboard from "./NavbarDashboard";
import pictures from "../assets/images/lg.png";
import picturesAdv from "../assets/images/banner adv.jpg"
const DashboardPage = () => {
    return (
      <div className='TbBg'>
        <NavbarDashboard image={pictures}/>
        <TableDashboard image={picturesAdv} />
      </div>
    )
  }
  
  export default DashboardPage;