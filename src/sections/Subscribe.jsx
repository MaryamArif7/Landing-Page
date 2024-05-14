import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section>
      <div className=" mt-20 ">
        <h1 className=" flex justify-center text-black-500 text-4xl font-bold ">
          Detect Your Next{" "} <span className="text-orange-500"> big move</span>
        </h1>

        <div>
          <p className="mt-8 text-black-100  flex justify-center">
            {" "}
            Experience the synergy of your favorite tools working seamlessly
            <br /> together, all powered by Horizon's cutting-edge AI analytics.
          </p>
        </div>
        <div className="gap-10 flex justify-around">
          <input
            type="text"
            placeholder=" Your mail@gmail.com"
            className="input ml-96 box-shadow-4xl"
          />
          <div className=" mr-96 flex max-sm:justify-end items-center max-sm:full ">
            <Button  label="Subscribe Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
