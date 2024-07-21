import React from 'react';
const users = [
  { name: 'Lisa Roy', status: 'Available Tomorrow?', time: '10:35 AM' },
  { name: 'Jamie Taylor', status: 'Will Do It Tomorrow', time: '10:35 AM' },
  { name: 'Jason Roy', status: 'Looking forward to a great start', time: '10:35 AM' },
  { name: 'Amy Frost', status: 'Start on the chat app right now?', time: '10:35 AM' },
  { name: 'Paul Wilson', status: 'See you tomorrow champ', time: '10:35 AM' },
  { name: 'Ana Williams', status: '??', time: '10:35 AM' },
];
const ChatSidebar =() => {
  return (
    <div className="w-1/3 bg-gray-800 p-4">
      <h1 className="text-xl font-bold">David Peters</h1>
      <div className="mt-4">
        <input type="text" placeholder="Search Here..." className="w-full p-2 border rounded bg-green-600" />
      </div>
      <ul className="mt-4">
        {users.map((user, index) => (
          <li key={index} className="flex items-center py-2">
            <div className="w-10 h-10 bg-green-600 rounded-full mr-4"></div>
            <div>
              <h2 className="font-semibold">{user.name}</h2>
              <p className="text-green-100 text-sm">{user.status}</p>
              <p className="text-green-100 text-xs">{user.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ChatSidebar