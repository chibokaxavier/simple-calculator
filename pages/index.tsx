"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "."];
  const operations = ["+", "-", "x", "/"];
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);
  useEffect(() => {
    console.log(
      Number(firstNumber) +
        " " +
        operation +
        " " +
        Number(secondNumber) +
        " " +
        result
    );
  }, [firstNumber, secondNumber, result]);
  const clickNumbers = (val: any) => {
    if (operation === "") {
      setFirstNumber(firstNumber + val);
    } else {
      setSecondNumber(secondNumber + val);
    }
  };

  const clickOperation = (val: any) => {
    setOperation(val);
  };

  const performOperation = () => {
    switch (operation) {
      case "+":
        setResult(Number(firstNumber) + Number(secondNumber));
        break;
      case "/":
        setResult(Number(firstNumber) / Number(secondNumber));
        break;
      case "-":
        setResult(Number(firstNumber) - Number(secondNumber));
        break;
      case "x":
        setResult(Number(firstNumber) * Number(secondNumber));
        break;
    }
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
  };

  return (
    <div className="h-[500px] w-[500px] p-4 mx-auto mt-[40px] bg-gray-200 shadow-lg rounded-md">
      <div className="h-[80px] w-[400px] text-6xl font-bold">
        {result ? result : firstNumber + operation + secondNumber}
      </div>
      <div className=" flex justify-between space-x-10">
        <div className="grid grid-cols-3  gap-4 items-center">
          <div className="bg-green-500 p-2 flex justify-center rounded-md h-[60px] w-[60px] cursor-pointer">
            AC
          </div>
          {numbers.map((number, index) => (
            <div
              key={index}
              onClick={() => clickNumbers(number)}
              className="bg-yellow-500 p-2 flex items-center tex-2xl font-bold justify-center rounded-md h-[60px] w-[60px] cursor-pointer"
            >
              {number}
            </div>
          ))}
        </div>
        <div className="grid  gap-4">
          {operations.map((operation, index) => (
            <div
              key={index}
              onClick={() => clickOperation(operation)}
              className="bg-yellow-500 p-4 flex justify-center  items-center  font-bold text-2xl rounded-md h-[60px] w-[60px] cursor-pointer"
            >
              {operation}
            </div>
          ))}
          <div
            onClick={() => performOperation()}
            className="bg-yellow-500 p-4 flex justify-center rounded-md h-[60px] w-[60px] cursor-pointer font-bold"
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
}
