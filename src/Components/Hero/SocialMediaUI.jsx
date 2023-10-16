export default function SocialMediaUI(props){
    return (
        <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            {props.children}
        </div>
    )
}