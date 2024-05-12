const Button=({
    label,iconURL
}) =>{
  return (
   <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-orange-400 text-white rounded-md  mt-5 " > 
{label}
{iconURL&&
<img src={iconURL} alt="Button To explore" 
className="ml-2 rounded-full w-4 h-4 "/>}
   </button>
  )
}

export default Button;