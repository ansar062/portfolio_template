import CustomText from '../../Ui/CustomText'
import img from "../Myservices/img.svg";
import Skills from './Skills';

export default function MySkills() {
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <CustomText title='My Skills' className='mt-[3%]'/>
            <div className='flex space-x-[100px] mt-[3%]'>
                <Skills title='HTML' img="https://static.vecteezy.com/system/resources/previews/012/697/299/original/stylized-3d-html-logo-design-free-png.png"/>
                <Skills img='https://static.vecteezy.com/system/resources/previews/012/697/301/original/3d-css-icon-design-free-png.png' title='CSS'/>
                <Skills img='https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png' title='JavaScript'/>
            </div>
            <div className='flex space-x-[100px] mt-[3%]'>
            <Skills img='https://static.vecteezy.com/system/resources/previews/012/697/295/original/3d-python-programming-language-logo-free-png.png' title='Python'/>
                <Skills img='https://static-00.iconduck.com/assets.00/react-javascript-js-framework-facebook-icon-512x455-jctj7y5w.png' title='React.js'/>
                <Skills img='https://avatars.githubusercontent.com/u/67109815?s=280&v=4' title='Tailwind CSS'/>
            </div>
        </div>
    )
}