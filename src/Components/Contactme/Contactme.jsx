import CustomText from "../../Ui/CustomText";
import InputCom from "./UI/InputCom";
import loc from "./loc.svg";
import email from "./email.svg";
import office from "./office.svg";
import phone from "./phone.svg";
import Info from "./UI/Info";

export default function Contactme() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <CustomText className="mt-[3%]" title="GET IN TOUCH" />

      <div className="flex justify-center font-roboto items-center mt-[5%] space-x-[20%] w-full">
        <div id="form">
          <div className="flex">
            <InputCom id="fn" placeholder="First Name" type="text" />
            <InputCom id="fn" placeholder="Last Name" type="text" />
          </div>
          <InputCom id="fn" placeholder="Email" type="text" />
          <div class="m-4 p-[2px]  rounded-full bg-gradient-to-r from-[#FC4A1A] to-[#F7B733]">
            <div class="p-3 h-[100px] w-full text-white rounded-full bg-[#212529] focus:outline-none">
              <textarea
                class="p-3 w-full text-white rounded-full bg-[#212529] focus:outline-none"
                type="url"
                id="name"
                placeholder="Message"
              />
            </div>
          </div>
          <div className="flex w-[180px] h-[45px] justify-center items-center rounded-full text-[20px] flex-shrink bg-gradient-to-r from-[#FC4A1A] to-[#F7B733]">
            SEND
          </div>
        </div>
        <div
          id="info"
          className="text-white p-[20px] space-y-6 bg-gradient-to-r from-[#FC4A1A] to-[#F7B733] h-[500px] w-[400px] rounded-lg"
        >
          <h1 className="text-xl font-bold">CONTACT INFO</h1>
          <h1 className="text-lg font-semibold mt-3 px-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            fugit cum doloremque provident laboriosam iure.
          </h1>
          <div>
            <div className="flex space-x-2 ml-[-15px]">
              <img src={loc} alt="" />
              <h1 className="font-semibold">Adrress:</h1>
            </div>
            <h1 className="font-medium my-1 px-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              fugit cum doloremque provident laboriosam iure.
            </h1>
          </div>
          <Info img={email} title="Email:" desc="email@gmail.com" />
          <Info img={phone} title="Phone:" desc="+52 671 114 3273" />
          <Info img={office} title="Office:" desc="Beans studio" />
        </div>
      </div>
    </div>
  );
}
