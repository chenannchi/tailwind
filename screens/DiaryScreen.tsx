import { View, Button, Text, Pressable } from 'react-native'
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import DiaryEntry from '../components/DiaryEntry';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DiaryScreen'
>;

const DiaryScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <DiaryEntry
        title="My Diary Entry"
        date="May 22, 2023"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat ex vitae nisl venenatis scelerisque."
      />
      <Pressable onPress={()=>navigation.navigate('Home')} className='bg-black'>
        <Text className='text-white p-2'>
          Home
        </Text>
      </Pressable>
    </View>
  );
};

export default DiaryScreen

// import {View, Text} from 'react-native';
// import React from 'react';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../App';

// type Props = {};

// export type NavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'screen2'
// >;

// const DiaryDetails = (props: Props) => {
//   return (
//     <View>
//       <Text>DiaryDetails</Text>
//     </View>
//   );
// };

// export default DiaryDetails;