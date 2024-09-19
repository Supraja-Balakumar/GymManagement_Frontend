import React, { useState } from 'react';

const SlotForm = ({ onAddSlot, onCancel }) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [slotType, setSlotType] = useState('Morning');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddSlot({ startTime, endTime, slotType });
    setStartTime('');
    setEndTime('');
    setSlotType('Morning');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-gray-800 shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">Add New Slot</h2>
      <div className="mb-4">
        <label htmlFor="start-time" className="block text-sm font-medium text-gray-300">Start Time:</label>
        <input
          type="time"
          id="start-time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
          className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-lg shadow-sm text-white placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="end-time" className="block text-sm font-medium text-gray-300">End Time:</label>
        <input
          type="time"
          id="end-time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
          className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-lg shadow-sm text-white placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="slot-type" className="block text-sm font-medium text-gray-300">Slot Type:</label>
        <select
          id="slot-type"
          value={slotType}
          onChange={(e) => setSlotType(e.target.value)}
          className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-lg shadow-sm text-white placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        >
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
        </select>
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Add Slot
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default SlotForm;
