export default function Info(props){
    return (
        <div className="flex space-x-2 ml-[-15px]">
        <img src={props.img} alt="" />
        <h1 className="font-semibold">{props.title}</h1>
        <h1>
           {props.desc}
        </h1>
    </div>
    )
}