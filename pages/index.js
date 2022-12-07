import Link from "next/link";
import { useSelector } from "react-redux";

export default function Home() {
  const posts = useSelector((state) => state.AllPost);
  console.log(posts);
  return (
    <div className="flex flex-col md:w-[80%] lg:w-[50%] mx-0 md:m-auto mt-10 p-5 md:p-10 duration-300 ease-in">
      <div className="flex  justify-between">
        <h1 className="text-4xl font-bold">Posts</h1>
        <Link href="/dashboard">
          <button className="bg-[#fca311] shadow-sm shadow-[#A05700] hover:bg-[#CD7C00] hover:shadow-md hover:shadow-[#A05700] duration-200 px-3 py-2 rounded-sm font-bold">
            Go To Dashboard
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-5 max-h-[500px] mt-10 ">
        {posts.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full bg-[#023047] p-5 space-y-5 text-white rounded-sm shadow-md shadow-[#023047]"
            >
              <h1 className="text-2xl font-mono font-bold">{item.Titel}</h1>
              <p className="text-sm">{item.Content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
