import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className='h-screen w-[260px] fixed left-0 top-0 hidden md:flex flex-col bg-white border-r border-slate-100 shadow-sm z-40'>
      <div className='flex items-center gap-3 px-6 pt-8 pb-6 select-none'>
        <div className='w-9 h-9 bg-primary text-white font-extrabold text-xl rounded-xl flex items-center justify-center shadow-sm tracking-tight'>
          SF
        </div>
        <div className='flex flex-col'>
          <span className='text-lg font-bold text-slate-900 leading-tight cursor-default'>
            SMART on FHIR
          </span>
        </div>
      </div>
      <nav className='flex-1 flex flex-col gap-2 px-3 py-20'>
        <NavLink
          to='/'
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold transition-all ${isActive ? 'bg-primary/10 text-primary shadow-sm' : 'text-slate-700 hover:bg-slate-50 hover:text-primary'}`
          }
        >
          <span
            className='material-symbols-outlined'
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            dashboard
          </span>
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to='/case-study'
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold transition-all ${isActive ? 'bg-primary/10 text-primary shadow-sm' : 'text-slate-700 hover:bg-slate-50 hover:text-primary'}`
          }
        >
          <span className='material-symbols-outlined'>description</span>
          <span>PoC Case Study</span>
        </NavLink>
      </nav>
      <div className='mt-auto pt-4 pb-6 px-6 border-t border-slate-100'>
        <div className='text-xs text-gray-500 font-medium tracking-wide text-center'>
          Production Version &bull; Live API
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
