const NavBar = (props) => {
  
  return (
    <header className="App-header ">
      <img 
        src="/images/dndlogo.png" 
        alt="logo" 
        className="App-logo"
        style={{ width: "100px", height: "100px" }}
      />
        {props.navItems.map((navItem, idx) =>
          <a key={idx} href={navItem.url}>{navItem.name}</a>
        )}
    </header>
  );
}
 
export default NavBar;