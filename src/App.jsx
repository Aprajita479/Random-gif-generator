import Random from "./components/Random"
import Tag from "./components/Tag"
export default function App() {
  return (
    <div className="w-full h-screen
     flex flex-col background relative overflow-x-hidden items-center">
      <h2 className=" bg-white rounded-lg 
uppercase w-11/12 text-center mt-[40px]
px-10 py-2 text-3xl text-bold font-bold ">Random Gifs</h2>
    <div className="flex  flex-col w-full items-center gap-y-10  mt-[30px]">
      <Random/>
      <Tag/>
    </div>
    </div>
  )
}
