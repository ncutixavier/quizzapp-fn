import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface ButtonProps {
    title: string;
    color?: string;
    onPress?: () => void;
    isLoading: boolean
  }
  
  const QZButton: React.FC<ButtonProps> = ({ title, color = '#000', onPress, isLoading }) => {
    return (
      <TouchableOpacity
       className={`bg-warning rounded-xl pt-3 pb-4 justify-center items-center
        ${isLoading ? 'opacity-50': ''} w-full`}
        onPress={onPress}
        disabled={isLoading}
      >
        <Text className="text-primary text-xl font-lsemibold">{title}</Text>
      </TouchableOpacity>
    );
  };

export default QZButton