import React from 'react';
const Dashboard: React.FC = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
        <header className="bg-blue-600 text-white p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold">Hi shifat 👋</h1>
            <div className="flex items-center space-x-4">
              <span>🔔</span>
            </div>
          </div>
        
        </header>
        
        <main className="p-4 flex-grow">
          
          
          <section className="mb-4">
            <h2 className="text-lg font-semibold">Find your perfect match</h2>
            <div className="grid grid-cols-1 gap-4 mt-2">
              <div className="bg-white p-4 rounded shadow">
                {/* <button className="flex items-center justify-between w-full"> */}
                <button className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
        
                  <span>Book a court</span>
                  <span>➡️</span>
                </button>
              </div>
            </div>       
          </section> 
          
          
        </main>
  
        <nav className="bg-white p-4 border-t border-gray-200 flex justify-around">
          <button className="flex flex-col items-center">
            <span>🏠</span>
            <span>Home</span>
          </button>
          <button className="flex flex-col items-center">
            <span>👥</span>
            <span>News</span>
          </button>
          <button className="flex flex-col items-center">
            <span>👤</span>
            <span>Profile</span>
          </button>
        </nav>
      </div>
    );
  };
  
  export default Dashboard;