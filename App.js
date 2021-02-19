import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {NativeRouter, Route} from 'react-router-native';

import Form from './src/components/Form';
import Result from './src/components/Result';

export default function App() {
  const [data, setData] = useState({});
  return (
    <NativeRouter>
      <StatusBar backgroundColor="#000000" />
      <Route exact path="/" render={() => <Form setData={setData} />} />
      <Route path="/result" render={() => <Result data={data} />} />
    </NativeRouter>
  );
}
