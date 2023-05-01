import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='bg-black min-h-screen p-12 relative'>
      <Outlet />
    </div>
  )
}

export default Layout;
