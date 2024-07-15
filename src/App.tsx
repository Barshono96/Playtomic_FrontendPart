import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import CreateClub from './components/CreateClub';
import Error from './pages/Error.page';

const App: React.FC = () => {
  return (
    <div className='App'>WellCome To PlayTomic</div>

  );
};

export default App;
