import HeaderAbout from "../components/about/HeaderAbout";
import MainAbout from "../components/about/MainAbout";

const About = () => {
    return (
        <main className="flex flex-col w-full h-full px-8 py-16 gap-16 
        col-start-2">
            {/* <Header /> */}
            <HeaderAbout/>
            <MainAbout />
        </main>
    )
}
export default About;