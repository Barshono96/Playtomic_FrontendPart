import React, { useState } from "react";
import axios from "axios";
import { createCourt } from "../api/CourtApi";

interface CreateCourtFormProps {
  clubId: string;
}

interface CourtData {
  type: string;
  start: string;
  end: string;
  slot: string;
  images: string[];
}

const CreateCourtForm: React.FC<CreateCourtFormProps> = ({ clubId }) => {
  const [courtData, setCourtData] = useState<CourtData>({
    type: "",
    start: "",
    end: "",
    slot: "",
    images: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCourtData({ ...courtData, [name]: value });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const imageUrls: string[] = [];

      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "unsigned_preset"); 
        formData.append("folder", "playtomic");

        try {
          const res = await axios.post("https://api.cloudinary.com/v1_1/dd3xobziv/image/upload", formData);
          imageUrls.push(res.data.secure_url);
          console.log("images======",imageUrls);
        } catch (error) {
          console.error("Error uploading image", error);
        }
      }

      setCourtData({ ...courtData, images: imageUrls });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createCourt(clubId, courtData);
      alert("Court created successfully");
      setCourtData({ type: "", start: "", end: "", slot: "", images: [] });
    } catch (error) {
      console.error("Error creating court", error);
    }
  };

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Create Court</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Court Type</label>
          <select
            name="type"
            value={courtData.type}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Type</option>
            <option value="Padel">Padel</option>
            <option value="Tennis">Tennis</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Start Time</label>
          <input
            type="time"
            name="start"
            value={courtData.start}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">End Time</label>
          <input
            type="time"
            name="end"
            value={courtData.end}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Slot</label>
          <input
            type="text"
            name="slot"
            value={courtData.slot}
            onChange={handleChange}
            placeholder="Enter slot details"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Images</label>
          <input
            type="file"
            name="images"
            multiple
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Create Court
        </button>
      </form>
    </div>
  );
};

export default CreateCourtForm;
