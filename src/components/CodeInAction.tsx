import React from 'react';

const CodeInAction = () => (
  <div className="w-full min-h-screen bg-white">
    <div className="flex flex-col items-center justify-center py-20">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold text-indigo-800">See JACoB’s Code in Action</h1>
        <p className="text-lg font-light text-gray-600">Real Examples. Real Projects. Real Impact.</p>
        <p className="text-sm font-light text-right text-indigo-800 w-full max-w-2xl self-end">
          JACoB isn’t about hypotheticals; it’s about real-world application. Here are some examples of how JACoB translates development challenges into clean, efficient, and robust code solutions.
        </p>
      </div>
      <div className="flex flex-row items-start justify-between w-full max-w-7xl mt-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-medium text-indigo-800">Feature Implementation</h2>
            <p className="text-base font-light text-gray-600">
              A side-by-side view of a feature request next to the code JACoB generated to fulfill it.
            </p>
          </div>
          <div className="space-y-2">
            <div className="bg-blue-100 border border-blue-200 rounded-xl p-4">
              <p className="text-lg font-medium text-blue-500 uppercase">Find an issue</p>
            </div>
            <div className="bg-orange-100 border border-orange-200 rounded-xl p-4">
              <p className="text-lg font-medium text-gray-500 uppercase">JACOb is doing their magic</p>
            </div>
            <div className="bg-orange-100 border border-orange-200 rounded-xl p-4">
              <p className="text-lg font-medium text-gray-500 uppercase">enjoy the result</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-8">
          <img src="/images/dcc7c7f935659f8de65bf7a3fd85078ad1ef8779.jpg" alt="Screenshot" className="border border-orange-200 rounded-xl" />
          <img src="/images/9de398343006411889d8301f4bf841ece965457b.jpg" alt="Screenshot" className="border border-orange-200 rounded-xl" />
          <img src="/images/965b592f1a1016eb84e6bdbddc479e6468a6cf52.jpg" alt="Screenshot" className="border border-orange-200 rounded-xl" />
        </div>
      </div>
      <div className="flex flex-row items-start justify-between w-full max-w-7xl mt-8">
        <div className="flex flex-col space-y-8">
          <img src="/images/932abd1f331cac58eadfc91743f9ac5648dc293c.jpg" alt="Screenshot" className="border border-orange-200 rounded-xl" />
          <img src="/images/377f021fc7583e40e623a7895e095db92ac44464.jpg" alt="Screenshot" className="border border-orange-200 rounded-xl" />
          <img src="/images/d901f754d29d878d9a30f644dbe8bb9f52d08403.jpg" alt="Screenshot" className="border border-orange-200 rounded-xl" />
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-medium text-indigo-800">Bug Squashing</h2>
            <p className="text-base font-light text-gray-600">
              A bug report followed by JACoB's submitted fix, complete with a code review.
            </p>
          </div>
          <div className="space-y-2">
            <div className="bg-blue-100 border border-blue-200 rounded-xl p-4">
              <p className="text-lg font-medium text-blue-500 uppercase">Find an issue</p>
            </div>
            <div className="bg-orange-100 border border-orange-200 rounded-xl p-4">
              <p className="text-lg font-medium text-gray-500 uppercase">JACOb is doing their magic</p>
            </div>
            <div className="bg-orange-100 border border-orange-200 rounded-xl p-4">
              <p className="text-lg font-medium text-gray-500 uppercase">enjoy the result</p>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 rounded-full shadow-md px-8 py-2 mt-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={() => window.open('https://github.com/JACoB', '_blank')}>
        <p className="text-lg font-medium text-center text-white uppercase">Explore JACoB’s Code Repositories</p>
      </button>
    </div>
  </div>
);

export default CodeInAction;