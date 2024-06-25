import React from "react";

function Contact(props) {
  return (
    <div
      className={`pb-8 flex justify-center items-center ${
        props.light ? `text-dark` : `text-white`
      }`}
      id="contact">
      <div className="w-10/12">
        <div className="md:mb-4 ssm:mb-4 w-full">
          <h2
            className={`uppercase md:text-28 ssm:text-24 font-bold w-full ${
              props.light ? `text-dark` : `text-white`
            }`}>
            Contact
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center md:gap-6 ssm:gap-2 w-full">
          <form class="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96 h-full">
            <div class="mb-16 flex flex-col gap-6">
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  className={`peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 ${
                    props.light ? `focus:border-dark` : `focus:border-white`
                  } focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                  placeHolder=" "
                />
                <label
                  className={`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight ${
                    props.light
                      ? `peer-focus:text-dark`
                      : `peer-focus:text-white`
                  } peer-focus:before:border-t-2 peer-focus:before:border-l-2 ${
                    props.light
                      ? `peer-focus:before:!border-dark`
                      : `peer-focus:before:!border-white`
                  } peer-focus:after:border-t-2 peer-focus:after:border-r-2 ${
                    props.light
                      ? `peer-focus:after:!border-dark`
                      : `peer-focus:after:!border-white`
                  } peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500`}>
                  Name
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className={`peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 ${
                    props.light ? `focus:border-dark` : `focus:border-white`
                  } focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                  placeHolder=" "
                />
                <label
                  className={`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight ${
                    props.light
                      ? `peer-focus:text-dark`
                      : `peer-focus:text-white`
                  } peer-focus:before:border-t-2 peer-focus:before:border-l-2 ${
                    props.light
                      ? `peer-focus:before:!border-dark`
                      : `peer-focus:before:!border-white`
                  } peer-focus:after:border-t-2 peer-focus:after:border-r-2 ${
                    props.light
                      ? `peer-focus:after:!border-dark`
                      : `peer-focus:after:!border-white`
                  } peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500`}>
                  Email
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <textarea
                  className={`peer w-full overflow-hidden rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 ${
                    props.light ? `focus:border-dark` : `focus:border-white`
                  } focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 min-h-[80px] resize-y`}
                  placeholder=" "
                  rows={3}
                />
                <label
                  className={`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight ${
                    props.light
                      ? `peer-focus:text-dark`
                      : `peer-focus:text-white`
                  } peer-focus:before:border-t-2 peer-focus:before:border-l-2 ${
                    props.light
                      ? `peer-focus:before:!border-dark`
                      : `peer-focus:before:!border-white`
                  } peer-focus:after:border-t-2 peer-focus:after:border-r-2 ${
                    props.light
                      ? `peer-focus:after:!border-dark`
                      : `peer-focus:after:!border-white`
                  } peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500`}>
                  Your message!
                </label>
              </div>
            </div>
            <button
              className={`mt-6 block w-full select-none rounded-lg py-3 px-6 border text-center align-middle font-sans text-xs font-bold uppercase ${
                props.light
                  ? `text-dark border-dark hover:shadow-dark`
                  : `text-white border-white hover:shadow-white`
              } shadow-sm transition-all hover:shadow-md focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
              type="button"
              data-ripple-light="true">
              Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
