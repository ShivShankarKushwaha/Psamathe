import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const UserReset = () => {
  return (
    <View className="w-full h-full flex flex-col justify-center items-center">
        <Image className="absolute w-full h-full opacity-10" source={{uri:'https://source.unsplash.com/random/?gadgets'}}></Image>
      <Text className="text-2xl text-center text-blue-500 font-bold font-serif my-5">Reset User Details</Text>
      <View className="w-full p-2 flex flex-col justify-center items-center gap-y-5">
        <TextInput className="w-full h-14 p-1 px-2 text-xl text-slate-800 border-2 border-gray-400 rounded" placeholder='Name'></TextInput>
        <TextInput className="w-full h-14 p-1 px-2 text-xl text-slate-800 border-2 border-gray-400 rounded" placeholder='email@test.com'></TextInput>
        <TextInput className="w-full h-14 p-1 px-2 text-xl text-slate-800 border-2 border-gray-400 rounded" placeholder='Password'></TextInput>
      </View>
      <TouchableOpacity>
        <Text className="text-2xl font-light text-center bg-green-500 text-white p-2 px-4">Reset</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UserReset;