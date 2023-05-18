import React from 'react';

import {
  SafeAreaView,
  // ScrollView,
  // StatusBar,
  // StyleSheet,
  Text,
  // useColorScheme,
  // View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView className="flex flex-row justify-center">
      <Text className='text-customcolor'>Hello World</Text>
    </SafeAreaView>
  );
}

export default App;
