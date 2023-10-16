import menu_btn from './menu_btn.svg'

export default function Header() {
    return (
        <div className="absolute top-[5%] w-full px-[50px] items-center flex">
            <div className="flex text-4xl font-bold gap-1">
                <div className="text-white">
                    Beans
                </div>
                <div className="text-transparent bg-gradient-to-r from-[#FC4A1A] to-[#F7B733] bg-clip-text">
                    Studios
                </div>
            </div>
            <div className='absolute right-[60px]'>
                <img src={menu_btn} alt="" />
            </div>
        </div>
    )
}