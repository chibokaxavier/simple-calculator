"use client";

import { use, useState } from "react";

export default function Home() {
  const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "."];
  const operations = ["+", "-", "X", "/", "="];
  return (
    <div className="h-[500px] w-[500px] p-4 mx-auto mt-[40px] bg-gray-500 shadow-lg rounded-md">
      <div className="h-[80px] w-[400px]">

      </div>
 <div className=" flex justify-between space-x-10">
      
      <div className="grid grid-cols-3  gap-4 items-center">
        <div className="bg-green-500 p-2 flex justify-center rounded-md h-[60px] w-[60px] cursor-pointer">
          AC
        </div>
        {numbers.map((number, index) => (
          <div
            key={index}
            className="bg-yellow-500 p-2 flex justify-center rounded-md h-[60px] w-[60px] cursor-pointer"
          >
            {number}
          </div>
        ))}
      </div>
      <div className="grid  gap-4">
        {operations.map((operation, index) => (
          <div
            key={index}
            className="bg-yellow-500 p-4 flex justify-center rounded-md h-[60px] w-[60px] cursor-pointer"
          >
            {operation}
          </div>
        ))}
      </div>
    </div>
    </div>
   
  );
}
