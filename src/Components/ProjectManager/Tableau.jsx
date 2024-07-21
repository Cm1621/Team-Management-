import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Tableau = () => {
  const [editMode, setEditMode] = useState(null);
  const [data, setData] = useState([]);
  const [tempData, setTempData] = useState({}); // Temporary state to hold current edits

  const handleEdit = (id) => {
    const user = data.find((user) => user.id === id);
    setTempData(user); // Initialize tempData with current user data
    setEditMode(id);
  };

  const handleCancelEdit = () => {
    setEditMode(null);
    setTempData({});
  };

  const handleChange = (e, field) => {
    setTempData({
      ...tempData,
      [field]: e.target.value,
    });
  };

  const handleUpdate = (id) => {
    setData(data.map((user) => (user.id === id ? tempData : user)));
    setEditMode(null);
    setTempData({});
  };

  const handleDelete = (id) => {
    setData(data.filter((user) => user.id !== id));
  };

  const handleAddUser = () => {
    const newUser = {
      id: data.length + 1,
      name: "New User",
      tache: "",
      etat: "À faire",
      email: "",
    };
    setData([...data, newUser]);
  };

  return (
    <div className='flex flex-row h-screen'>
      <Sidebar />
      <div className='flex flex-col w-full p-6 bg-gray-900'>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold text-gray-400">Tableau des Tâches</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleAddUser}
          >
            Ajouter
          </button>
        </div>
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left bg-gray-100 border-b">Nom</th>
                <th className="px-4 py-2 text-left bg-gray-100 border-b">Tâche</th>
                <th className="px-4 py-2 text-left bg-gray-100 border-b">Etat de tâche</th>
                <th className="px-4 py-2 text-left bg-gray-100 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id} className={editMode === user.id ? "bg-gray-200" : ""}>
                  <td className="px-4 py-2 border-b">
                    {editMode === user.id ? (
                      <input
                        type="text"
                        value={tempData.name || ""}
                        onChange={(e) => handleChange(e, 'name')}
                        className="w-full px-2 py-1 border rounded"
                      />
                    ) : (
                      user.name
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editMode === user.id ? (
                      <input
                        type="text"
                        value={tempData.tache || ""}
                        onChange={(e) => handleChange(e, 'tache')}
                        className="w-full px-2 py-1 border rounded"
                      />
                    ) : (
                      user.tache
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editMode === user.id ? (
                      <select
                        value={tempData.etat || ""}
                        onChange={(e) => handleChange(e, 'etat')}
                        className="w-full px-2 py-1 border rounded"
                      >
                        <option value="À faire">À faire</option>
                        <option value="En cours">En cours</option>
                        <option value="Terminé">Terminé</option>
                      </select>
                    ) : (
                      user.etat
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editMode === user.id ? (
                      <div className="flex gap-2">
                        <button
                          onClick={handleCancelEdit}
                          className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                        >
                          Annuler
                        </button>
                        <button
                          onClick={() => handleUpdate(user.id)}
                          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                        >
                          Sauvegarder
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(user.id)}
                          className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                          Supprimer
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tableau;
