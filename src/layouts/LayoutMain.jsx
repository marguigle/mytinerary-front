const LayoutMain = (props) => {
  return (
    <>
      <header className="header-main">
        <h3>My Tinerary</h3>
        <navbar className="container-btn">
          <button>home</button>
          <button>cities</button>
          <button>login</button>
        </navbar>
      </header>
      <main>{props.children}</main>

      <footer>Footer</footer>
    </>
  );
};

export default LayoutMain;
