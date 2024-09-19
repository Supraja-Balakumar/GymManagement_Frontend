import React, { useState } from 'react';
import SlotForm from './SlotForm'; // Adjust the path as needed

const ManageClasses = () => {
  const [slots, setSlots] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);

  const addSlot = (slot) => {
    setSlots([...slots, slot]);
    setFormVisible(false); // Hide the form after adding a slot
  };

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto bg-gray-800 p-8 shadow-lg rounded-lg relative">
        <h1 className="text-4xl font-bold mb-6 text-white">Manage Classes</h1>
        
        <button
          onClick={toggleFormVisibility}
          className="absolute top-6 right-6 bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          {isFormVisible ? 'Close Form' : 'Add Slot'}
        </button>
        
        {isFormVisible ? (
          <SlotForm onAddSlot={addSlot} onCancel={() => setFormVisible(false)} />
        ) : (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Available Slots</h2>
            {slots.length === 0 ? (
              <p className="text-gray-400">No slots added yet.</p>
            ) : (
              <div className="flex flex-wrap gap-8">
                {slots.map((slot, index) => (
                  <div key={index} className="flex-shrink-0 bg-gray-700 p-8 border border-gray-600 rounded-lg shadow-lg w-96">
                    <img
                      src="https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-an-empty-gym-with-some-machines-image_2949921.jpg"
                      alt={`Gym Slot ${index + 1}`}
                      className="w-full h-56 object-cover rounded-lg mb-4"
                    />
                    <p className="text-xl font-semibold text-white mb-2">{slot.startTime} - {slot.endTime}</p>
                    <p className="text-md text-gray-300">Slot Type: {slot.slotType}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ManageClasses;
