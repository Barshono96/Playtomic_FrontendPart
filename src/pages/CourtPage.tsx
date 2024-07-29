import React from "react";
import { useParams } from "react-router-dom";
import CreateCourtForm from "../components/CreateCourt";
import CourtList from "../components/CourtList";
import axios from "axios";

const CourtPage: React.FC = () => {
  const { clubId } = useParams<{ clubId: string }>();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <CreateCourtForm clubId={clubId!} />
      <CourtList clubId={clubId!} />
    </div>
  );
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
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dd3xobziv/image/upload",
          formData
        );
        imageUrls.push(res.data.secure_url);
        console.log("Image=====", imageUrls);
      } catch (error) {
        console.error("Error uploading image", error);
      }
    }

    setCourtData({ ...setCourtData, images: imageUrls });
  }
};

function setCourtData(arg0: any) {
  throw new Error("Function not implemented.");
}

export default CourtPage;
