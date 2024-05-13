const Card = ({cardicon,label,subtext}) => {
    return (
      <div className=" pl-10 py-10 sm:w-[350px] sm:min-[350px] w-full rounded-[20px] shadow-3xl ">
          <div className=" ml-0 w-20 h-20  justify-center items-center">
              <img src={cardicon} alt={label}
              width={40} height={40}/>
          </div>
          <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
          <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
      </div>
    )
  }
  
  export default Card