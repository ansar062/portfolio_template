import img from "../Myservices/img.svg";
export default function Skills(props) {
    return (
        <div className="text-white w-[300px] space-y-3 flex flex-col justify-center items-center">
            <div className="flex">
                <img className="h-[70px] w-[70px]" src={img} alt="" />
                <img
                    className=" h-[40px] w-[40px] ml-[-50px] mt-[15px]"
                    src={props.img}
                    alt=""
                />
            </div>
            <h1 className="font-bold text-lg">{props.title}</h1>
            <p className="font-medium text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tenetur quo tempora nulla magni sapiente. Perferendis, odio assumenda. Iure, fuga! Labore consequatur at corporis, repellat inventore ipsa atque officiis debitis?</p>
        </div>
    )
}