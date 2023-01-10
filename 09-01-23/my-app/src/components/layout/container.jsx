export const Header = () => {
  const menuItems = [
    { label: "React", href: "https://it.reactjs.org/tutorial/tutorial.html" },
  ];
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col">❤</div>
          <div className="col">❤</div>
        </div>
        <nav className="nav">
          <ul role="menu">
            {menuItems.map(function (menuItem) {
              console.log({ menuItem });

              return (
                <li role="menuitem">
                  <a href={menuItem.href}> {menuItem.label}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="contact">
          <ul>
            <li>
              <a href="https://www.facebook.com/chiara.cirrito.7/">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/chiarac16/">Instagram</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/chiara-cirrito-90a2021b7/">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
