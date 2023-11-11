import { Content } from "next/font/google";
import ContentHome from "./components/Content";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full p-8 gap-8">
      <SearchBar />
      <ContentHome />
    </main>
  )
}
