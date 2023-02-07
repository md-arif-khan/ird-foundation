

const Navbar = () => {
  const menu=<>
    <li><a>Home</a></li>
    <li><a>Program</a></li>
    <li><a>Blog</a></li>
    <li><a>About us</a></li>
  </>
  return (
   <div className="navbar px-0 py-2 text-black">
  <div className="navbar px-0 py-2 flex justify-between">
     <a className=" normal-case text-xl">
      <span className=' px-2 text-white mr-1 rounded-md text-[20px] bg-[#6765F0]'>Gym</span>
      <span className='text-[#6765F0]'>baran</span>
     </a>
    <div className="dropdown">
     
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menu}
       
      </ul>
    </div>
    
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu text-[#5D595F] menu-horizontal px-1">
       {menu}
    </ul>
    <div className="">
    <a className="btn bg-[#264373] text-white btn-sm">Log in</a>
  </div>
  </div>
  
</div>
  );
};

export default Navbar;