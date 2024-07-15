import React, { useEffect, useState } from 'react';
import { getCourts } from '../api/CourtApi';

interface Court {
  id: number;
  type: string;
  start: string;
  end: string;
  slot: string;
}

interface CourtListProps {
  clubId: string;
}

const CourtList: React.FC<CourtListProps> = ({ clubId }) => {
  const [courts, setCourts] = useState<Court[]>([]);

  useEffect(() => {
    const fetchCourts = async () => {
      try {
        const data = await getCourts(clubId);
        setCourts(data);
      } catch (error) {
        console.error('Error fetching courts', error);
      }
    };

    fetchCourts();
  }, [clubId]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Courts</h2>
      <ul>
        {courts.map(court => (
          <li key={court.id} className="mb-4 p-4 bg-white rounded-lg shadow">
            <p>Type: {court.type}</p>
            <p>Start: {court.start}</p>
            <p>End: {court.end}</p>
            <p>Slot: {court.slot}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourtList;
