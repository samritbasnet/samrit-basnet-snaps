
import FilterIcon from '../../assets/images/Icons/Filter.svg';
import './Navbar.scss';

const Navbar = ({ togglePanelOpen }) => {
  return (
    <nav className="navbar">
      <h1 className='navbar__logo'>      Snaps</h1>

      <button className='navbar__button' onClick={togglePanelOpen}>Filters
        <img className="navbar__button--svg"  preserveAspectRatio="xMidYMid meet" src={FilterIcon} alt="Filter-Icon"/>
      </button>
    </nav>
  );
};
export default Navbar;
