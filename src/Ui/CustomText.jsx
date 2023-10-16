import img from './img.svg'
export default function CustomText(props){
    return (
        <div className={`flex ${props.className} `}>
            <img src={img} alt="" />
            <div className='text-white text-[50px] font-bold ml-[-30px]'>{props.title}</div>
        </div>
    )
}