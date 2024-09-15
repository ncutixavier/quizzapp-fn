import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import QZButton from '@/components/form/QZButton'
import { router } from 'expo-router'

const index = () => {
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="bg-primary flex-1 items-center justify-center p-5">
                    <View className="bg-warning rounded-full w-[140px] h-[140px] bg-opacity-10 justify-center items-center">
                        <Text className="font-lbold text-[64px]">👋🏿</Text>
                    </View>
                    <Text className="font-lbold text-3xl mt-14 text-gray-200">Welcome to quizzapp!!</Text>
                    <Text className="font-lmedium text-xl text-center mt-8 mb-14 text-gray-300">Challenge your knowledge across various topics and become the ultimate quizzapp!</Text>
                    <QZButton title={'Continue to sign in'} isLoading={false} onPress={() => router.push("/signin")} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({})