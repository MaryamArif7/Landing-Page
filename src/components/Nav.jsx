import { navLinks } from "../constants";
import logo from "../assets"

const Nav = () => {
  return (
    <header>
           <nav className="flex justify-between items-center max-container">
        <a href="/" />
        <img
        src={logo}
        alt='logo'
        width={150}
        height={30}     />
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
        {navLinks.map((item)=>(
          <li key={item.label}>
            <a className='fonts-monts errat leading-normal text-lg text-slate-gray'></a>
             {item.label}
          </li>
        )
        )}
        </ul>
        </nav>
    </header>
  )
}

export default Nav