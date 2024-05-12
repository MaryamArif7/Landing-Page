import Button from "../components/Button";
import arrowright from "../assets/arrowright.svg"

const Hero = () => {
  return (
   <section id="Hero" className=" mt-20 ml-10 w-full flex  flex-col justify-center max-container">
    <div  className="flex flex-col items-start">
      <h1 className="text-4xl font-bold text-orange-500 ">Transform  Ideas </h1>
      <h1 className="text-4xl font-bold text-black-500 ">into apps with AI </h1>
      <p className="mt-10 font-bold"> The quick brown fox jumps over the lazy dog. Lorem ipsum  <br />dolor sit amet, consectetur adipiscing eli   <br /> </p>
      <div>
      <Button label="Get started " iconURL={arrowright}/>
      </div>
    </div>
    <div>

    </div>
   </section>
  )
}

export default Hero