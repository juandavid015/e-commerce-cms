import ContentHome from "./components/ContentHome";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full p-8 gap-8 col-start-2 ">
      {/* <Header /> */}
      <ContentHome />
    </main>
  )
}
