import React from "react";

const CodeInAction = () => (
  <div className="w-full bg-white  py-20">
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col space-y-8">
        <h1 className="text-6xl font-bold text-dark-blue">
          See JACoB’s Code <span className="text-pink">in Action</span>
        </h1>
        <div className="space-between flex flex-row space-x-8">
          <p className="max-w-lg text-lg font-light text-gray-600">
            Real Examples. Real Projects. Real Impact.
          </p>
          <p className="max-w-prose self-end text-right text-sm font-light text-dark-blue">
            JACoB isn’t about hypotheticals; it’s about real-world application.
            Here are some examples of how JACoB translates development
            challenges into clean, efficient, and robust code solutions.
          </p>
        </div>
      </div>
      <div className="mt-8 flex w-full max-w-7xl flex-row items-start justify-between">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-medium text-dark-blue">
              Feature Implementation
            </h2>
            <p className="text-base font-light text-gray-600">
              A side-by-side view of a feature request next to the code JACoB
              generated to fulfill it.
            </p>
          </div>
          <div className="space-y-2">
            <div className="cursor-pointer rounded-xl border border-blue-200 bg-light-blue/20 p-4">
              <p className="text-lg font-medium uppercase text-blue-500">
                Find an issue
              </p>
            </div>
            <div className="bg-orange-100 border-orange-200 rounded-xl border p-4">
              <p className="text-lg font-medium uppercase text-gray-500">
                JACOb is doing their magic
              </p>
            </div>
            <div className="bg-orange-100 border-orange-200 rounded-xl border p-4">
              <p className="text-lg font-medium uppercase text-gray-500">
                enjoy the result
              </p>
            </div>
          </div>
        </div>
        <div className="ml-12 flex flex-col space-y-8">
          <img
            src="/images/example-issue.png"
            alt="Screenshot"
            className="border-orange-200 rounded-xl border"
          />
          {/* <img
            src="/images/9de398343006411889d8301f4bf841ece965457b.jpg"
            alt="Screenshot"
            className="border-orange-200 rounded-xl border"
          />
          <img
            src="/images/965b592f1a1016eb84e6bdbddc479e6468a6cf52.jpg"
            alt="Screenshot"
            className="border-orange-200 rounded-xl border"
          /> */}
        </div>
      </div>
      {/* <div className="mt-8 flex w-full max-w-7xl flex-row items-start justify-between">
        <div className="flex flex-col space-y-8">
          <img
            src="/images/932abd1f331cac58eadfc91743f9ac5648dc293c.jpg"
            alt="Screenshot"
            className="border-orange-200 rounded-xl border"
          />
          <img
            src="/images/377f021fc7583e40e623a7895e095db92ac44464.jpg"
            alt="Screenshot"
            className="border-orange-200 rounded-xl border"
          />
          <img
            src="/images/d901f754d29d878d9a30f644dbe8bb9f52d08403.jpg"
            alt="Screenshot"
            className="border-orange-200 rounded-xl border"
          />
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-medium text-dark-blue">
              Bug Squashing
            </h2>
            <p className="text-base font-light text-gray-600">
              A bug report followed by JACoB's submitted fix, complete with a
              code review.
            </p>
          </div>
          <div className="space-y-2">
            <div className="rounded-xl border border-blue-200 bg-blue-100 p-4">
              <p className="text-lg font-medium uppercase text-blue-500">
                Find an issue
              </p>
            </div>
            <div className="bg-orange-100 border-orange-200 rounded-xl border p-4">
              <p className="text-lg font-medium uppercase text-gray-500">
                JACOb is doing their magic
              </p>
            </div>
            <div className="bg-orange-100 border-orange-200 rounded-xl border p-4">
              <p className="text-lg font-medium uppercase text-gray-500">
                enjoy the result
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <button
        className="focus:ring-blue mt-8 rounded-full bg-blue-500 px-8 py-2 shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-opacity-50"
        onClick={() =>
          window.open(
            "https://github.com/PioneerSquareLabs/jacb-ai-website",
            "_blank",
          )
        }
      >
        <p className="text-center text-lg font-medium uppercase text-white">
          Explore JACoB’s Code Repositories
        </p>
      </button>
    </div>
  </div>
);

export default CodeInAction;
