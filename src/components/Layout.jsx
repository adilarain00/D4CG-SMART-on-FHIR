import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children, onConnect, isConnected }) => {
  return (
    <div className='flex bg-background min-h-screen'>
      <Sidebar />

      <div className='flex-1 md:ml-[260px] flex flex-col min-h-screen'>
        <Header onConnect={onConnect} isConnected={isConnected} />

        <main className='p-6 flex-1'>
          <div className='max-w-7xl mx-auto space-y-8'>{children}</div>
        </main>
      </div>

      <button className='fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-40 md:hidden'>
        <span className='material-symbols-outlined'>add</span>
      </button>
    </div>
  );
};

export default Layout;
