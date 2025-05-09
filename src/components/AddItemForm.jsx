'use client';

import { useState } from 'react';

export default function AddItemForm({ onAdd, onCancel }) {
  const [title,         setTitle]         = useState('');
  const [distance,      setDistance]      = useState('');
  const [rating,        setRating]        = useState('');
  const [availableFrom, setAvailableFrom] = useState('');
  const [price,         setPrice]         = useState('');
  const [img,           setImg]           = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAdd({ title, distance, rating, availableFrom, price, img });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow max-w-md w-full space-y-4"
      >
        <h2 className="text-xl font-bold">List a New Item</h2>

        <input
          required
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />

        <input
          required
          placeholder="Distance (e.g. 2.3 miles)"
          value={distance}
          onChange={e => setDistance(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />

        <input
          required
          placeholder="Rating (e.g. 4.5)"
          type="number" step="0.1" min="0" max="5"
          value={rating}
          onChange={e => setRating(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />

        <input
          required
          placeholder="Available From (e.g. Mar 15)"
          value={availableFrom}
          onChange={e => setAvailableFrom(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />

        <input
          required
          placeholder="Price (e.g. 35)"
          type="number" step="1" min="0"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />

        <input
          placeholder="Image URL"
          value={img}
          onChange={e => setImg(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-1 rounded border"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-1 rounded bg-blue-600 text-white"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
