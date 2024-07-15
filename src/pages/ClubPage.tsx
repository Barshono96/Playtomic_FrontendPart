import React from 'react';
import { useParams } from 'react-router-dom';
import CreateCourtForm from '../components/CreateCourt';
import CourtList from '../components/CourtList';

const ClubPage: React.FC = () => {
  const { clubId } = useParams<{ clubId: string }>();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <CreateCourtForm clubId={clubId!} />
      <CourtList clubId={clubId!} />
    </div>
  );
};

export default ClubPage;
