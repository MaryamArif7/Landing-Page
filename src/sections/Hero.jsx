import Button from "../components/Button";
import arrowright from "../assets/arrowright.svg"
import Ipad from "../assets/Ipad.svg"
const Hero = () => {
  return (
   <section id="Hero" className=" w-full flex xl:flex-row flex-col justify-center   ">
    <div  className=" mt-10 ml-10 relative  flex flex-col justify-center items-start w-full ">
      <h1 className="text-4xl font-bold text-orange-500 ">Transform  Ideas </h1>
      <h1 className="text-4xl font-bold text-black-500 ">into apps with AI </h1>
      <p className="mt-10 font-bold"> The quick brown fox jumps over the lazy dog. Lorem ipsum  <br />dolor sit amet, consectetur adipiscing eli   <br /> </p>

      <Button label="Get started " iconURL={arrowright}/>
      
    </div>
    <div className ="  mt-10 mr-0 ml-96 flex justify-start items-start flex-wrap w-full ">
<img src={Ipad} alt="Ipad" height={620} width={600} />
    </div>
   </section>
  )
}

export default Hero