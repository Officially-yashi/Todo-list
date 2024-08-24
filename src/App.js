import React, { useRef } from "react";

//heyyyyaaaaaaaa

function App() {

  const inputRef = useRef(null)
  const containerRef = useRef(null)

  function addTask() {

    if (inputRef.current.value === "") {
      alert("you must write something");
    }
     else {
      let li = document.createElement("li");
      li.innerHTML = inputRef.current.value + "\t";
      containerRef.current.appendChild(li);
  
      let deleteButton = document.createElement("span");
      deleteButton.classList.add ("ml-40","border","rounded-full" ,"px-4" , "py-1" , "cursor-pointer" , "bg-violet-500" , "hover:text-sm" , "duration-100" , "hover:bg-fuchsia-800","hover:ring-white","hover:ring-1")
      
      deleteButton.addEventListener("click", function () {
        li.remove();
        saveData();
      });
      deleteButton.innerHTML = "Delete";
      li.appendChild(deleteButton);
    }
    inputRef.current.value = "";
    saveData();
  }

  function saveData(){
    localStorage.setItem("data",containerRef.innerHTML);
  }
  function showTask(){
    containerRef.innerHTML=localStorage.getItem("data");
  }
showTask();
  return (
    <div className=" bg-purple-900 h-screen flex items-center ">
      <div className=" h-auto mx-auto justify-center w-96 border hover:shadow-purple-100 hover:shadow-inner rounded-lg ">
        <div className="text-white mx-auto flex justify-center mt-3 font-semibold items-center">
          TO-DO LIST
        </div>
        <div className="flex">
          <div className="relative w-full">
            <input
              ref={inputRef}
              type="text"
              id="input-box"
              placeholder="add your list"
              className="block mx-6 mt-5 h-7 focus:ring-violet-300 w-8/12 focus:border-blue-500 p-2.5 border border-gray-300 text-gray-900 text-sm rounded-lg  bg-gray-50"
            />
            <button
              onClick={addTask}
              className="absolute mr-5 top-0 end-0 p-2.5 h-9 mt-3 hover:ring-2 hover:ring-white text-white text-sm  hover:bg-fuchsia-800 bg-violet-400 px-4 rounded-md"
            >
              Add
            </button>
          </div>
        </div>
        <ul ref={containerRef} id="list-container" className="m-3 p-2 text-white">
          <li className=""></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
