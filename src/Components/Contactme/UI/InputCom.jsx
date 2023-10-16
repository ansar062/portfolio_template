export default function InputCom(props) {
    return (
        <div class="m-4 p-[2px] rounded-full bg-gradient-to-r from-[#FC4A1A] to-[#F7B733]">
            <input
                class="p-3 w-full text-white rounded-full bg-[#212529] focus:outline-none"
                type={props.type}
                id={props.id}
                placeholder={props.placeholder}
            />
        </div>
    )
}