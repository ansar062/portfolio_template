import SocialMediaUI from "./SocialMediaUI";
import twitter from './Image/twitter.svg'
import dribble from './Image/dribble.svg'
import behance from './Image/behance.svg'
import pinterest from './Image/pinterest.svg'
import iphone13 from './Image/iPhone 13.png'
import scroll from './Image/scroll.svg'

export default function Hero() {
    return (
        <div className="text-white flex justify-center items-center min-h-screen space-x-[30%]">
            <div id="left" className="flex flex-col space-y-[20px]">
                <div className="w-[120px] text-base  h-[54px] flex justify-center items-center rounded-[40px_40px_40px_0px] bg-gradient-to-r from-[#FC4A1A] to-[#F7B733]">
                    Hello, i'm
                </div>
                <h1 className="text-[72px]">John Doe</h1>
                <h1 className="text-[22px]">
                    FULL-STACK DEVELOPER | UX/UI DESIGNER | FREELANCER
                </h1>
                <div className="flex gap-4">
                    <SocialMediaUI>
                        <img src={twitter} />
                    </SocialMediaUI>
                    <SocialMediaUI>
                        <img src={behance} />
                    </SocialMediaUI>
                    <SocialMediaUI>
                        <img src={dribble} />
                    </SocialMediaUI>
                    <SocialMediaUI>
                        <img src={pinterest} />
                    </SocialMediaUI>
                </div>
                <div className="flex w-[180px] h-[45px] justify-center items-center rounded-full text-[20px] flex-shrink bg-gradient-to-r from-[#FC4A1A] to-[#F7B733]">
                    Download CV
                </div>
            </div>
            <div id="right">
                <img src={iphone13} alt="" />
            </div>
            <div className="sm:absolute sm:right-[50%] sm:bottom-[15%]">
                <img src={scroll} alt="" />
            </div>
        </div>
    );
}
