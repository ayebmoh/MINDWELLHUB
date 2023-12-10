import Scale from "../../tools/ScaleM";

const Mha = () => {
  return (
    <div>
      <h1 className="text-center text-white text-6xl ">
        Mental Health Assessment
      </h1>
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-4 font-semibold  text-white mt-20 text-2xl text-center">
          On a scale of 1 to 10, how would you rate your overall mental health?
        </h3>
        <Scale />
      </div>

      {/* Stress */}

      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-4 font-semibold  text-white mt-20 text-2xl text-center">
          How often do you feel stressed?
        </h3>
        <ul className="mt-8 w-4/5 text-sm font-medium border  rounded-lg sm:flex bg-gray-700 border-gray-600 text-white">
          <li className="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Never"
                type="radio"
                value="Never"
                name="Stress"
                className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
              />
              <label
                htmlFor="Never"
                className="w-full py-3 ms-2 text-sm font-medium  text-gray-300"
              >
                Never
              </label>
            </div>
          </li>
          <li className="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Rarely"
                type="radio"
                value="Rarely"
                name="Stress"
                className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
              />
              <label
                htmlFor="Rarely"
                className="w-full py-3 ms-2 text-sm font-medium  text-gray-300"
              >
                Rarely
              </label>
            </div>
          </li>
          <li className="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Sometimes"
                type="radio"
                value="Sometimes"
                name="Stress"
                className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
              />
              <label
                htmlFor="Sometimes"
                className="w-full py-3 ms-2 text-sm font-medium  text-gray-300"
              >
                Sometimes
              </label>
            </div>
          </li>
          <li className="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Often"
                type="radio"
                value="Often"
                name="Stress"
                className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
              />
              <label
                htmlFor="Often"
                className="w-full py-3 ms-2 text-sm font-medium  text-gray-300"
              >
                Often
              </label>
            </div>
          </li>
          <li className="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Always"
                type="radio"
                value="Always"
                name="Stress"
                className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
              />
              <label
                htmlFor="Always"
                className="w-full py-3 ms-2 text-sm font-medium  text-gray-300"
              >
                Always
              </label>
            </div>
          </li>
        </ul>
      </div>

      {/* anxious  */}

      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-4 font-semibold  text-white mt-20 text-2xl text-center">
          How often do you feel anxious or worried?
        </h3>
        <ul className="mt-8 w-4/5 text-sm font-medium  border  rounded-lg sm:flex bg-gray-700 border-gray-600 text-white">
          <li className="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Never"
                type="radio"
                value="Never"
                name="anxious"
                className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
              />
              <label
                htmlFor="Never"
                className="w-full py-3 ms-2 text-sm font-medium  text-gray-300"
              >
                Never
              </label>
            </div>
          </li>
          <li className="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Rarely"
                type="radio"
                value="Rarely"
                name="anxious"
                className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
              />
              <label
                htmlFor="Rarely"
                className="w-full py-3 ms-2 text-sm font-medium  text-gray-300"
              >
                Rarely
              </label>
            </div>
          </li>
          <li className="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Sometimes"
                type="radio"
                value="Sometimes"
                name="anxious"
                className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
              />
              <label
                htmlFor="Sometimes"
                className="w-full py-3 ms-2 text-sm font-medium  text-gray-300"
              >
                Sometimes
              </label>
            </div>
          </li>
          <li className="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Often"
                type="radio"
                value="Often"
                name="anxious"
                className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
              />
              <label
                htmlFor="Often"
                className="w-full py-3 ms-2 text-sm font-medium  text-gray-300"
              >
                Often
              </label>
            </div>
          </li>
          <li className="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Always"
                type="radio"
                value="Always"
                name="anxious"
                className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
              />
              <label
                htmlFor="Always"
                className="w-full py-3 ms-2 text-sm font-medium  text-gray-300"
              >
                Always
              </label>
            </div>
          </li>
        </ul>
      </div>

      {/* depressed  */}

      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-4 font-semibold  text-white mt-20 text-2xl text-center">
          How often do you feel down, depressed, or hopeless?
        </h3>
        <ul className="mt-8 w-4/5 text-sm font-medium border  rounded-lg sm:flex bg-gray-700 border-gray-600 text-white">
          <li className="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Never"
                type="radio"
                value="Never"
                name="depressed"
                className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
              />
              <label
                htmlFor="Never"
                className="w-full py-3 ms-2 text-sm font-medium  text-gray-300"
              >
                Never
              </label>
            </div>
          </li>
          <li className="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Rarely"
                type="radio"
                value="Rarely"
                name="depressed"
                className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
              />
              <label
                htmlFor="Rarely"
                className="w-full py-3 ms-2 text-sm font-medium  text-gray-300"
              >
                Rarely
              </label>
            </div>
          </li>
          <li className="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Sometimes"
                type="radio"
                value="Sometimes"
                name="depressed"
                className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
              />
              <label
                htmlFor="Sometimes"
                className="w-full py-3 ms-2 text-sm font-medium  text-gray-300"
              >
                Sometimes
              </label>
            </div>
          </li>
          <li className="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Often"
                type="radio"
                value="Often"
                name="depressed"
                className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
              />
              <label
                htmlFor="Often"
                className="w-full py-3 ms-2 text-sm font-medium  text-gray-300"
              >
                Often
              </label>
            </div>
          </li>
          <li className="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Always"
                type="radio"
                value="Always"
                name="depressed"
                className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
              />
              <label
                htmlFor="Always"
                className="w-full py-3 ms-2 text-sm font-medium  text-gray-300"
              >
                Always
              </label>
            </div>
          </li>
        </ul>
      </div>

      {/* Supp */}
      <div className=" flex flex-col items-center justify-center ">
        <h3 className="mb-4 font-semibold  text-white mt-20 text-2xl text-center">
          Have you ever sought mental health support or counseling services
          during your time as a student?
        </h3>
        <ul className="w-4/5 mt-8 text-sm font-medium  border  rounded-lg sm:flex bg-gray-700 border-gray-600 text-white">
          <li className="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="Yes"
                type="radio"
                value="Yes"
                name="genSuppder"
                className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
              />
              <label
                htmlFor="Yes"
                className="w-full py-3 ms-2 text-sm font-medium  text-gray-300"
              >
                Yes
              </label>
            </div>
          </li>

          <li className="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="No"
                type="radio"
                value="No"
                name="Supp"
                className="w-4 h-4 text-blue-600  focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
              />
              <label
                htmlFor="No"
                className="w-full py-3 ms-2 text-sm font-medium  text-gray-300"
              >
                No
              </label>
            </div>
          </li>
        </ul>
      </div>

      {/* factors */}
      <div className="flex flex-col items-center justify-center w-full">
        <h3 className="mb-4 font-semibold  text-white mt-20 text-2xl text-center">
          What factors, if any, contribute to stress or anxiety in your life as
          a student?
        </h3>
        <input
          className="mt-3 h-12 w-56 sm:w-96 rounded-lg bg-gray-700 border-blue-600 indent-4 text-white shadow-lg focus:outline-none focus:ring focus:ring-blue-600"
          type="text"
          placeholder="Your Answer"
        />
      </div>

      <a href="phy_health">
        <button className="mb-10 float-right w-56 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none mt-20 mr-10">
          Next
        </button>
      </a>
    </div>
  );
};

export default Mha;
