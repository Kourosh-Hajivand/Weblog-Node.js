import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddPost } from "../../Slicer/Counterslicer";

function Dashboard() {
  const [titel, setTitel] = useState("");
  const [content, setcontent] = useState("");
  const dispatch = useDispatch();

  const changetitel = (e) => {
    console.log(e.target.value);
    setTitel(e.target.value);
  };
  const changecontetn = (e) => {
    setcontent(e.target.value);
  };
  const formHandler = (e) => {
    e.preventDefault();
    dispatch(AddPost({ title: titel, Content: content }));
    setTitel("");
    setcontent("");
  };
  return (
    <div className="flex flex-col md:w-[80%] lg:w-[50%] mx-0 md:m-auto mt-10 p-5 md:p-10 duration-300 ease-in">
      <div className="flex  justify-between">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <Link href="/">
          <button className="bg-[#fca311] shadow-sm shadow-[#A05700] hover:bg-[#CD7C00] hover:shadow-md hover:shadow-[#A05700] duration-200 px-3 py-2 rounded-sm font-bold">
            Go To Posts
          </button>
        </Link>
      </div>
      <div className="flex flex-col bg-[#023047] shadow-2xl py-20 px-10 rounded justify-center items-center gap-5 max-h-[500px] mt-16 ">
        <h1 className="text-3xl font-bold text-white">Add Your Post</h1>
        <form
          onSubmit={formHandler}
          className="w-full md:w-[70%] flex flex-col gap-5 mt-5"
        >
          <input
            value={titel}
            className="w-full p-3 rounded"
            placeholder="Titel"
            onChange={(e) => changetitel(e)}
          />
          <input
            value={content}
            className="w-full p-3 rounded"
            placeholder="Content"
            onChange={(e) => changecontetn(e)}
          />
          <button className="bg-sky-500 hover:bg-sky-700 duration-300  w-full p-3 rounded font-bold text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
