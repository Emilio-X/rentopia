'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ListItemPage() {
  const router = useRouter();

  // Form state
  const [title, setTitle]               = useState('');
  const [description, setDescription]   = useState('');
  const [category, setCategory]         = useState('');
  const [availableFrom, setAvailableFrom] = useState('');
  const [price, setPrice]               = useState('');
  const [images, setImages]             = useState([]);

  // Preview files
  function handleFileChange(e) {
    const files = Array.from(e.target.files);
    setImages(files.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }

  // On submit: just log and reset + redirect home
  function handleSubmit(e) {
    e.preventDefault();
    const formData = { title, description, category, availableFrom, price, images };
    console.log('New listing:', formData);
    alert('Item submitted! Check console for details.');
    router.push('/'); // go back home
  }

  return (
    <div className="max-w-2xl mx-auto my-12 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-6">List Your Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:ring"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            required
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full border rounded px-3 py-2 h-24 focus:ring"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            required
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:ring"
          >
            <option value="" disabled>Select one</option>
            <option value="Transport">Transport</option>
            <option value="Electronics">Electronics</option>
            <option value="Tools">Tools</option>
            <option value="Fashion">Fashion</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        {/* Available from */}
        <div>
          <label className="block mb-1 font-medium">Available from</label>
          <input
            type="date"
            required
            value={availableFrom}
            onChange={e => setAvailableFrom(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:ring"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium">Price per day ($)</label>
          <input
            type="number"
            required
            min="0"
            value={price}
            onChange={e => setPrice(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:ring"
          />
        </div>

        {/* Image uploads */}
        <div>
          <label className="block mb-1 font-medium">Photos</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="block mb-2"
          />
          <div className="flex space-x-2 overflow-x-auto">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.preview}
                alt={`Preview ${i}`}
                className="h-20 w-20 object-cover rounded"
              />
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Publish Listing
        </button>
      </form>
    </div>
  );
}
