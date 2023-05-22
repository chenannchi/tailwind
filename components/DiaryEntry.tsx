import React from 'react';
import { View, Text} from 'react-native';

interface DiaryEntryProps {
  title: string;
  date: string;
  content: string;
}

const DiaryEntry: React.FC<DiaryEntryProps> = ({ title, date, content }) => {
  return (
    <View className='p-4 mb-4 bg-white rounded-lg my-5 mx-3 border-4 border-gray-500'>
      <Text className='text-lg font-bold mb-2'>{title}</Text>
      <Text className='text-sm text-gray-500 mb-2'>
        {date}
      </Text>
      <Text>{content}</Text>
    </View>
  );
};

export default DiaryEntry;
