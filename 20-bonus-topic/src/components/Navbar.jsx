const Navbar = (props) => {
  function ChangeTheme() {
    props.setCount(props.count + 1);
  }

  return (
    <div>
      <button onClick={ChangeTheme}>Change theme</button>
    </div>
  );
};

export default Navbar;
