import { FaHandHoldingHeart } from "react-icons/fa";

const Modal = ({ closemod }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-md">
      {/* Main mod */}
      <div
        id="popup-modal"
        tabindex="-1"
        class="backdrop-blur-[2px] absolute flex overflow-y-auto overflow-x-hidden place-self-center z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative rounded-lg shadow bg-gray-700">
            <button
              type="button"
              class="absolute top-3 end-2.5 text-gray-400 bg-transparent  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
              data-modal-hide="popup-modal"
            ></button>
            <div class=" p-4 md:p-5 text-center">
              <div className=" text-4xl text-center mb-5   flex justify-center text-white">
                <FaHandHoldingHeart />
              </div>
              <h3 class="mb-5 text-lg font-normal  text-gray-400">
                Thank you for taking the time to fill out the form! Do you want
                to hear some helpful podcasts?
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 focus:green-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
              >
                <a href="/Podcasts">Yes, sure!</a>
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                class="focus:ring-4 focus:outline-none  rounded-lg border  text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
              >
                <a href="/">No, Thank you</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
