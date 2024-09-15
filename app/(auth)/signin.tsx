import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const signin = () => {
  return (
    <SafeAreaView>
        <ScrollView contentContainerStyle={{height: '100%'}}>
            <View className="bg-primary p-5 flex-1 justify-center">
                <Text className="text-gray-100 font-lbold text-2xl max-w-[70%]">Continue with your phone number</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default signin