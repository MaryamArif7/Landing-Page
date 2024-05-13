import Feature2 from "../assets/Feature2.svg"

const Feature22 = () => {
  return (
    <section className='ml-10 mt-20 flex flex-wrap justify-center'>
   
    <div className="flex-1">
      <h1 className='text-black-500 font-bold text-4xl'><span className='text-orange-500'>Unleash </span>the power of AI </h1>
      <h1 className='text-black-500 font-bold text-4xl'>With Gen AI</h1>
      <p>Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full <br /> potential of your tech stack with Horizon's intuitive and Stay ahead of the curve <br /> with our Dynamic Trend Analysis feature. Unlock the full potential of your <br /> tech stack with Horizon's intuitive and</p>
    </div>
    <div className='flex flex-1 flex-col'>
      <img src={Feature2} alt="Features" 
      height={500}
      width={450}
      
      />
    </div>
  </section>
  )
}

export default Feature22