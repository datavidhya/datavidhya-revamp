// import React from "react";

// const page = () => {
//   return (
//     <div className="h-screen w-full flex flex-col items-center justify-center bg-white">
//       <h1 className="text-3xl text-black">Welcome Darshil!</h1>
//       <form
//         className="bg-red-50 text-black flex flex-col mx-auto px-10 py-10"
//         action=""
//       >
//         <label htmlFor="Username"></label>
//         <input className="text-black p-3" type="text" placeholder="User Name" />
//         <label htmlFor="what they said"></label>
//         <textarea
//           className="p-3 bg-red-500"
//           name=""
//           id=""
//           placeholder="What they said"
//         ></textarea>
//       </form>
//       <button className="bg-blue-400 p-3 rounded-2xl text-black ">
//         {" "}
//         submit
//       </button>
//     </div>
//   );
// };

// export default page;
"use client";
import React from "react";
import { useForm } from "react-hook-form";
const page = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("name")} type="text" placeholder="name" />
        <input {...register("age")} type="text" placeholder="age" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default page;
