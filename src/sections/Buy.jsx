import Button from "../components/Button";
import arrowright from "../assets/arrowright.svg"
const Buy = () => {
  return (
    <section>
      <div className=" mt-32">
        <div className="flex justify-center">
          {" "}
          <h1 className="text-4xl font-bold text-black-500 ">
            Start making <span className="text-orange-500">smart </span>{" "}
            decesions,{" "}
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold text-black-500">Choose a plan</h1>
        </div>
      </div>
      <div className="flex flex-wrap mt-24 ml-48 gap-10">
        <div className=" pl-10 py-10 sm:w-[350px] sm:min-[350px] w-full rounded-[20px] shadow-3xl ">
          <h3 className=" flex justify-center mt-5 font-palanquin text-3xl leading-normal ">
            Explorer
          </h3>
          <h1 className="mt-3 flex justify-center break-words  text-2xl leading-normal text-black-500 font-bold">
            $4,99 <span className="text-slate-gray">/mo</span>
          </h1>
         <div className="ml-20 mt-6">
         <ul>
            <li className="flex justify-start"><img src={arrowright} /> Market Trend Analysis</li>
            <li className="flex justify-start"><img src={arrowright} />Limited Query Mapping</li>
            <li className="flex justify-start"><img src={arrowright} />Standard Dashboarrds</li>
            <li className="flex justify-start"><img src={arrowright} />Email Notifications</li>
            <li className="flex justify-start"><img src={arrowright} />Entry level Support </li>
          </ul>
         </div>
          <div className="flex justify-center ">
        <Button style={{ backgroundColor: "black"}} label="Get Now" iconURL={arrowright} />
        </div>

        </div>
        <div className=" pl-10 py-10 sm:w-[350px] sm:min-[350px] w-full rounded-[20px] shadow-3xl  ">
          <h3 className=" flex justify-center mt-5 font-palanquin text-3xl leading-normal  text-orange-500">
            Innovator
          </h3>
          <h1 className="mt-3 flex justify-center break-words  text-2xl leading-normal text-black-500 font-bold">
            $19,99 <span className="text-slate-gray">/mo</span>
          </h1>
          <div className="ml-20 mt-6">
         <ul>
            <li className="flex justify-start"><img src={arrowright} /> Everything In Exlorer,plus:</li>
            <li className="flex justify-start"> <img src={arrowright} />Predictive Analytics</li>
            <li className="flex justify-start"> <img src={arrowright} />Advance Query Mapping</li>
            <li className="flex justify-start"> <img src={arrowright} />Customizable Dashboards</li>
            <li className="flex justify-start"> <img src={arrowright} />Extented Support</li>
          </ul>
         </div>
        <div className="flex justify-center">
        <Button  label="Get Now" iconURL={arrowright} />
        </div>
        </div>
        <div className=" pl-10 py-10 sm:w-[350px] sm:min-[350px] w-full rounded-[20px] shadow-3xl ">
          <h3 className=" flex justify-center mt-5 font-palanquin text-3xl leading-normal ">
            Visionary
          </h3>
          <h1 className="mt-3 flex justify-center break-words  text-2xl leading-normal text-black-500 font-bold">
            $49,99 <span className="text-slate-gray">/mo</span>
          </h1>
          <div className="ml-20 mt-6">
         <ul>
            <li className="flex justify-start"> <img src={arrowright} />Everytjin in innovator ,plus</li>
            <li className="flex justify-start"> <img src={arrowright} />Competitor Benchmarking</li>
            <li className="flex justify-start"> <img src={arrowright} />Holistic Market Visualization</li>
            <li className="flex justify-start"> <img src={arrowright} />Adaptive Strategy Planner </li>
            <li className="flex justify-start"> <img src={arrowright} />24/7 Priority Support</li>
          </ul>
         </div>
          <div className="flex justify-center">
        <Button style={{ backgroundColor: "black"}} label="Get Now" iconURL={arrowright} />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Buy;
