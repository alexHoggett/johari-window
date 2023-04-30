import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='bg-black min-h-screen'>
      <Outlet />
    </div>
  )
}

export default Layout;
