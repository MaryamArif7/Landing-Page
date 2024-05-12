import { navLinks } from "../constants";
import logo from "../assets/logo.svg"
import Button from "./Button";
import arrowright from "../assets/arrowright.svg"
// max-lg:hidden
const Nav = () => {
  return (
    <header className="mt-7 ml-10">
           <nav className="flex justify-between items-center max-container ">
        <a href="/" />
        <img
        src={logo}
        alt='logo'
        width={150}
        height={30}     />
        <ul className='flex-1 flex justify-center items-center gap-16'>
          
        {navLinks.map((item)=>(
          <li key={item.label}>
            <a className='fonts-monts errat leading-normal text-lg text-slate-gray'></a>
             {item.label}
          </li>
        )
        )}
        <Button label="Get Started" iconURL={arrowright} />
        </ul>
        </nav>
    </header>
  )
}

export default Nav