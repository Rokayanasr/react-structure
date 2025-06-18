import { Outlet } from 'react-router-dom';

const JobOffersLayout = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Outlet />
    </div>
  );
};

export default JobOffersLayout;