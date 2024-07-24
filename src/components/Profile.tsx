import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface UserProfile {
  id: number;
  username: string;
  email: string;
  type: string;
  address: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    // Replace with your actual API endpoint
    axios.get('/api/user')
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="w-full p-4">
          <div className="text-center">
            <img className="h-24 w-24 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="User avatar" />
            <h1 className="text-lg font-semibold text-gray-900">{user?.username}</h1>
            <p className="text-sm text-gray-600">Add my location</p>
          </div>
          <div className="text-center mt-4">
            <div className="flex justify-around">
              <div>
                <span className="block text-gray-600 text-sm">Matches</span>
                <span className="block text-gray-900 text-lg font-semibold">0</span>
              </div>
              <div>
                <span className="block text-gray-600 text-sm">Followers</span>
                <span className="block text-gray-900 text-lg font-semibold">0</span>
              </div>
              <div>
                <span className="block text-gray-600 text-sm">Following</span>
                <span className="block text-gray-900 text-lg font-semibold">0</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 text-sm">Give the profile info from user table</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
