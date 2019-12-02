import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import Routes from './routes';

// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Routes />
    </>
  );
}
