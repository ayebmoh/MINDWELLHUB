import Modal from "../../tools/Modal";
import { useState } from "react";

const RC = () => {
  const [pop, setpop] = useState(false);

  return (
    <div>
      <h1 className=" text-center text-white text-3xl ">
        Recommendations and Comments
      </h1>

      <div className="flex flex-col items-center justify-center  ">
        <h3 className="mb-4 font-semibold  text-white mt-20 text-2xl text-center">
          Based on your experiences, what recommendations do you have for
          improving student well-being at our institution?
        </h3>
        <input
          className="mt-8 h-12 w-56 sm:w-96 rounded-lg bg-gray-700 border-blue-600 indent-4 text-white shadow-lg focus:outline-none focus:ring focus:ring-blue-600"
          type="text"
          placeholder="Your Answer"
        />
      </div>

      <div className="flex flex-col items-center justify-center  ">
        <h3 className="mb-4 font-semibold  text-white mt-20 text-2xl text-center">
          Is there anything else you would like to share about your overall
          well-being as a student?
        </h3>
        <input
          className="mt-8 h-12 w-56 sm:w-96 rounded-lg bg-gray-700 border-blue-600 indent-4 text-white shadow-lg focus:outline-none focus:ring focus:ring-blue-600"
          type="text"
          placeholder="Your Answer"
        />
      </div>

      <div className="mt-28 flex flex-col items-center justify-center  ">
        <button
          onClick={() => {
            setpop(true);
          }}
          className="mb-8 block text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          type="button"
        >
          Submit
        </button>
      </div>

      <div>{pop && <Modal closemod={setpop} />}</div>
    </div>
  );
};

export default RC;
