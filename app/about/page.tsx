import HeaderAbout from "../components/about/HeaderAbout";
import MainAbout from "../components/about/MainAbout";

const About = () => {
    return (
        <main className="flex flex-col w-full h-full p-8 gap-16 
        md:row-start-2 md:row-span-1 md:col-start-2 md:col-span-2 md:col-span-full">
            {/* <Header /> */}
            <HeaderAbout/>
            <MainAbout />
        </main>
    )
}
export default About;