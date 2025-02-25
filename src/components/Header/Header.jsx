import "./Header.scss";
export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="header__logo">Snaps</div>
        <div className="header__actions">
          <nav className="header__nav">
            <button className="filter-button">
              <span>Filters</span>
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
}
