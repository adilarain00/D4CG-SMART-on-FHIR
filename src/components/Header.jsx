import { FiGithub } from 'react-icons/fi';

const Header = ({ onConnect, isConnected }) => {
  return (
    <header className='w-full bg-white/80 backdrop-blur-md shadow-sm flex justify-between items-center px-4 sm:px-8 py-4'>
      <div className='flex items-center gap-4'>
        <h1 className='text-xl font-bold text-on-surface font-headline flex items-center gap-5'>
          Patient Insight Dashboard
          <span
            className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-300 shadow-sm ml-1 animate-pulse'
            style={{ boxShadow: '0 0 8px 0 #22c55e33' }}
          >
            Live Update
          </span>
        </h1>
      </div>
      <div className='flex items-center gap-2 sm:gap-4'>
        {!isConnected && (
          <button
            className='bg-primary text-on-primary px-4 sm:px-6 py-2 rounded-full font-semibold transition-all shadow-sm opacity-50 cursor-not-allowed hidden sm:block'
            disabled
          >
            Awaiting ID
          </button>
        )}
        {isConnected && (
          <button
            onClick={onConnect}
            className='flex items-center gap-2 px-3 sm:px-4 py-2 bg-secondary-container/30 rounded-full border border-secondary/20 hover:bg-secondary-container/50 transition-colors'
            title='Disconnect and search new patient'
          >
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-secondary'></span>
            </span>
            <span className='text-xs font-bold text-on-secondary-container uppercase tracking-wider hidden sm:block'>
              Connected
            </span>
            <span className='material-symbols-outlined !text-sm text-on-secondary-container'>
              logout
            </span>
          </button>
        )}
        <a
          href='https://github.com/your-repo-link'
          target='_blank'
          rel='noopener noreferrer'
          className='p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors cursor-pointer active:scale-95'
          title='View on GitHub'
        >
          <FiGithub size={24} />
        </a>
      </div>
    </header>
  );
};

export default Header;
