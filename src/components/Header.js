function Header() {
  return (

<header class="sticky top-0 z-50">
<div className="navbar bg-base-200 bg-opacity-95">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a className="btn normal-case btn-ghost text-lg" href="#projects">Projects</a></li>
        <li><a className="btn normal-case btn-ghost text-lg" href="#about">About</a></li>
        <li><a className="btn normal-case btn-ghost text-lg" href="#contact">Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl" href="#top">Nathaniel Ross-Loyo</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className="btn normal-case btn-ghost text-lg" href="#projects">Projects</a></li>
      <li><a className="btn normal-case btn-ghost text-lg" href="#about">About</a></li>
      <li><a className="btn normal-case btn-ghost text-lg" href="#contact">Contact</a></li>
    </ul>
  </div>
</div>
</header>

  )
}


export default Header