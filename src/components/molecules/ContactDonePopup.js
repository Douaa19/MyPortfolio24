import React from "react";

function ContactDonePopup() {
  return (
    <>
      <div class="absolute bg-dark opacity-80 inset-0 z-0"></div>
      <div class="w-500 max-w-xl px-5 py-10 flex justify-center relative bg-white mx-auto my-auto rounded-xl shadow-lg animation-fadeIn">
        <div className="flex flex-col items-center gap-4 w-[70%]">
          <div className="text-center py-8">
            <div className="">
              <h4 className="capitalize pb-4 text-[#5F6165] font-medium md:text-18 ssm:text-16">
                done
              </h4>
              <p className="text-[#A1A3A7] md:text-14 ssm:text-12">
                Thank you for your message
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDonePopup;
