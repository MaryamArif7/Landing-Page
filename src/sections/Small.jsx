import tick from "../assets/tick.svg";
function Small() {
  return (
    <div className=" mt-10 flex justify-around ">
        <h1 className=" flex justify-start text-orange-500"><img src={tick}  />Free Trial</h1>
         <h1 className=" flex justify-start text-orange-500"><img src={tick}  />Cancel Anytime</h1>
         <h1 className=" flex justify-start text-orange-500"><img src={tick}  />Support Included</h1>
    </div>
  )
}

export default Small

