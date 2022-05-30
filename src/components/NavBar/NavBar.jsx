const NavBar = (props) => {
  console.log(props.navItems);
  return (
    <header className="App-header">
      <img 
        
        src="/images/logo.svg" 
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