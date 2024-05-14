import arrowrigt from "../assets/arrowright.svg";
import Button from "../components/Button";
import { footerLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-between pt-10">
        {" "}
        <p className="text-white text-2xl font-bold">
          Get Your AI apps built <br />
          with blazin speed
        </p>
        <Button label="Get Started" iconURL={arrowrigt} />
      </div>

      <div className=" mt-10 flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
      <div>
          <h1 className="text-white text-4xl ">GenAI</h1>
          <p className="text-white mt-5">Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. At, id quod quis, <br /> optio volupt</p>
          <h1 className="text-white mt-10">All rights reserved.</h1>
        </div>
        {footerLinks.map((section) => (
          <div key={section}>
            <ul>
              {section.links.map((link) => (
                <li
                  className="mt-3 text-white-400  text-base leading-normal hover:text-slate-gray cursor-pointer"
                  key={link.name}
                >
                  <a>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
