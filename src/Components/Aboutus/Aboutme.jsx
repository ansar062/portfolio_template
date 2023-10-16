import CustomText from "../../Ui/CustomText";
const DESC = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et nemo,quos harum libero ratione excepturi inventore commodi maxime placeatid dolore laborum facilis consequuntur quam quaerat repellendus modinobis deserunt.'

export default function Aboutme() {
    return (
        <div className="flex text-white flex-col justify-center items-center w-full">
            <CustomText title="About Me" className='mt-[3%]' />
            <div className="flex w-full px-[10%] space-x-[300px] mt-[3%] items-center">
                <img
                    className="rounded-full w-[300px] h-[300px]"
                    src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4909.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697414400&semt=ais"
                    alt=""
                />
                <div className="w-[400px]  font-semibold text-2xl">
                    <h1>
                        {DESC}
                    </h1>
                </div>
            </div>
            <div className="flex flex-col space-y-[20px] my-[3%]">
                <div className="flex w-full px-[10%] space-x-[300px] items-start">
                    <h1 className="uppercase font-bold text-xl w-[100px]">Background</h1>
                    <p className="w-[600px]">
                        {DESC}
                    </p>
                </div>
                <div className="flex w-full px-[10%] space-x-[300px] items-start">
                    <h1 className="uppercase font-bold text-xl w-[100px]">Education</h1>
                    <p className="w-[600px]">
                        {DESC}
                    </p>
                </div>
                <div className="flex w-full px-[10%] space-x-[300px] items-start">
                    <h1 className="uppercase font-bold text-xl w-[100px]">Professional Experience</h1>
                    <p className="w-[600px]">
                        {DESC}
                    </p>
                </div>
            </div>
        </div>
    );
}
