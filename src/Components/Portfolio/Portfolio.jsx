import CustomText from '../../Ui/CustomText'
import ProjectCard from './ProjectCard'

const DESCRIPTION = 'Lorem Loremipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam'

export default function Portfolio() {
    const data = [
        {
            id: 1,
            imglink: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
            title: 'Responsify',
        },
        {
            id: 2,
            imglink: 'https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg',
            title: 'Featured Image Notes',

        },
        {
            id: 3,
            imglink: 'https://tecdn.b-cdn.net/img/new/standard/nature/144.jpg',
            title: 'jQuery Fixed Header',
        },
        {
            id: 4,
            imglink: 'https://tecdn.b-cdn.net/img/new/standard/nature/145.jpg',
            title: 'jQuery Floating Form Label',
        },
        {
            id: 5,
            imglink: 'https://tecdn.b-cdn.net/img/new/standard/nature/111.jpg',
            title: 'Discord Clone',
        }
    ]
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <CustomText className="mt-[3%]" title='My Projects' />
            <div className='flex h-[50%] mt-[5%] justify-center items-center w-full space-x-[30px]'>
                {data.map((card) => (
                    <ProjectCard desc={DESCRIPTION} imglink={card.imglink} title={card.title}/>
                ))}
            </div>
        </div>
    )
}