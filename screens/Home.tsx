import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import DiaryEntry from '../components/DiaryEntry';
import { useState } from 'react'

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} className={isDarkMode ? 'bg-black' : 'bg-white'}>
      <Pressable onPress={() => toggleDarkMode()} className={isDarkMode ? 'bg-white p-2' : 'bg-black p-2'}>
        <Text className={isDarkMode ? 'text-black' : 'text-white'}>
          Mode
        </Text>
      </Pressable>
      <DiaryEntry
        title="My First Entry"
        date="May 21, 2023"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat ex vitae nisl venenatis scelerisque."
      />

      <Pressable onPress={() => navigation.navigate('DiaryScreen')} className={isDarkMode ? 'bg-white p-2' : 'bg-black p-2'}>
        <Text className={isDarkMode ? 'text-black' : 'text-white'}>
          Go to Diary
        </Text>
      </Pressable>

    </View>
  );
};



export default HomeScreen;


// import {View, Text, SafeAreaView} from 'react-native';
// import React from 'react';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../App';
// import {useNavigation} from '@react-navigation/native';

// type Props = {};

// export type NavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'Home'
// >;

// const Home = (props: Props) => {
//   const navigation = useNavigation<NavigationProp>();
//   return (
//     <SafeAreaView className="flex flex-row justify-center md:flex-col ">
//       <Text
//         className="text-customcolor"
//         onPress={() => navigation.navigate('Diary')}>
//         Hello world
//       </Text>
//     </SafeAreaView>
//   );
// };

// export default Home;
