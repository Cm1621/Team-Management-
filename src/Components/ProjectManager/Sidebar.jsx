import React from 'react';
import { FaHome, FaTasks, FaUser , FaComments, FaCalendarAlt, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-full w-64 bg-green-800 text-neutral-50 flex flex-col items-center py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">SYNCHRO-P</h1>
      </div>
      <nav className="flex flex-col gap-6 w-full px-6">
        <Link to='/HomePage'><NavItem icon={<FaHome />} label="Home" /></Link>
        <Link to='/Chat'><NavItem icon={<FaComments />} label="Chat" /></Link>
        <Link to='/Tasks'><NavItem icon={<FaTasks />} label="Tasks" /></Link>
        <Link to='/Weeks'><NavItem icon={<FaCalendarAlt />} label="Weeks" /></Link>
        <Link to='/Tableau'><NavItem icon={<FaUsers />} label="Users" /></Link>
        <Link to='/UserInfo'><NavItem icon={<FaUser />} label="Profil" /></Link>
      </nav>
      <div className="mt-auto w-full px-6">
        <Link to='/LandingPage'><NavItem icon={<FaSignOutAlt />} label="Log Out" /></Link>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-4 p-3 rounded hover:bg-neutral-700 cursor-pointer transition-colors">
      <span className="text-xl">{icon}</span>
      <span className="text-lg">{label}</span>
    </div>
  );
};

export default Sidebar;
