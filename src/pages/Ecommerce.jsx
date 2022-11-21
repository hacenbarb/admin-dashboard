import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  ecomPieChartDatea,
  SparklineAreaData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import heroPattern from "../data/welcome-bg.svg";

const Ecommerce = () => {
  return (
    <div className="mt-8">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-52 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-left bg-opacity-50"
          style={{ backgroundImage: `url(${heroPattern})` }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-600">Earnings</p>
              <p className="text-2xl text-green-600">$66,44,55,66</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              size="sm"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 m-3 md:w-3/6">
          {earningData.map((el) => (
            <div
              key={el.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: el.iconColor, backgroundColor: el.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {el.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{el.amount} </span>
                <span className={`mx-auto my-0 text-sm text-${el.pcColor}`}>
                  {el.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{el.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-10">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-full xl:max-w-7xl">
          <div className="flex justify-between">
            <p class="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="flex justify-around items-center gap-4 mt-10 flex-wrap w-full">
            <div className="m-4 pr-1">
              <div>
                <p className="flex items-center">
                  <span className="text-2xl font-semibold">$93,235</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">23%</span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="flex items-center">
                  <span className="text-2xl font-semibold">$22,300</span>
                </p>
                <p className="text-gray-500 mt-1">Expence</p>
              </div>
              <div className="mt-5">
                <SparkLine 
                  currentColor="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>
              <div className="mt-10">
                <Button 
                  color="white"
                  bgColor="blue"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked 
                width="320px" height="360px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
