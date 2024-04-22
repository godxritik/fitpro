import React from "react";

function AdminSupport() {
  return (
    <div className="flex flex-col text-center">
      <h3 className="text-white text-3xl ">Admin Support</h3>
      <div className="flex flex-col text-start mx-auto my-4">
        <label  className="text-white text-lg my-2" htmlFor="query">
          Write your query below
        </label>
        <textarea
          className="w-[350px] sm:w-[450px] rounded-xl p-2 bg-gray-600 border  text-white  "
          name="query"
          id="query"
          cols="80"
          rows="5"
          placeholder="your query here..."
        ></textarea>
        <button className="text-white px-4 py-2 border w-[100px] mx-auto my-8 hover:rounded-lg transition-all">Submit</button>
      </div>
    </div>
  );
}

export default AdminSupport;
