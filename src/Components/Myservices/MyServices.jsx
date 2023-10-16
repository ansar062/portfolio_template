import CustomText from "../../Ui/CustomText";
import Services from "../../Ui/Services";
import iphone13front from '../../assets/iPhone 13 Pro.png'

const DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.'

export default function MyServices() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <CustomText className="mt-[3%]" title="My Services" />
            <div id="bottom-area" className="flex mt-[5%]">
                <div id="left" className="flex flex-col space-y-[50px]">
                    <Services title='PHOTOGRAPHY' desc={DESCRIPTION} />
                    <Services title='UI/UX DESIGN' desc={DESCRIPTION} />
                    <Services title='WEB DESIGN' desc={DESCRIPTION} />
                </div>
                <div id="middle">
                    <img className="sm:ml-[-100px]" src={iphone13front} alt="" />
                </div>
                <div id="right" className="flex flex-col space-y-[50px]">
                    <Services title='WEB DEVELOPMENTD' desc={DESCRIPTION} reverse={true} />
                    <Services title='3D DESIGN' desc={DESCRIPTION} reverse={true}/>
                    <Services title='2D DESIGN' desc={DESCRIPTION} reverse={true}/>
                </div>
            </div>
        </div>
    );
}
