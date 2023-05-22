import { View, Button } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import DiaryEntry from '../components/DiaryEntry';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <DiaryEntry
        title="My First Entry"
        date="May 21, 2023"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat ex vitae nisl venenatis scelerisque."
      />

      <Button
        title="Go to Diary"
        onPress={() => navigation.navigate('DiaryScreen')}
      />
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
