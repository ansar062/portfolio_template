import img from "../Components/Myservices/img.svg";
import img2 from "../Components/Myservices/img2.svg";

export default function Services(props) {
    const reverse = props.reverse;

    if (reverse) {
        return (
            <div className="flex text-white">
                <div className="flex mr-[30px]">
                    <img className="h-[60px] w-[60px]" src={img} alt="" />
                    <img
                        className=" h-[40px] w-[40px] ml-[-45px] mt-[10px]"
                        src={img2}
                        alt=""
                    />
                </div>
                <div className="w-[300px] text-left space-y-2">
                    <h1 className="text-[22px] font-bold">{props.title}</h1>
                    <h2 className="text-[18px] font-bold">{props.desc}</h2>
                </div>
                
            </div>
        )
    }
    return (
        <div className="flex text-white">
            <div className="w-[300px] text-right space-y-2">
                <h1 className="text-[22px] font-bold">{props.title}</h1>
                <h2 className="text-[18px] font-bold">{props.desc}</h2>
            </div>
            <div className="flex ml-[30px]">
                <img className="h-[60px] w-[60px]" src={img} alt="" />
                <img
                    className=" h-[40px] w-[40px] ml-[-45px] mt-[10px]"
                    src={img2}
                    alt=""
                />
            </div>
        </div>
    );
}
