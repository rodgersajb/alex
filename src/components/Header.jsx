import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header>
      <div className="header-grid">
        <div className="header-image">
          <h3>This is an Image</h3>
        </div>
        <div className="header-content">
          <h2 className="highlighter-prim">Oh Hi, Im Alex</h2>
          <h2></h2>
        </div>

        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
