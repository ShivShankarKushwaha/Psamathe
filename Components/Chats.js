import React, { useState } from 'react'
import { Image, View,Text, ScrollView } from 'react-native';

function Chats() {
    const arr=[];
    for(let i=0;i<10;i++)
    {
        arr.push(
            <View className="w-screen flex flex-col">
                <View className="flex w-10/12 justify-start items-start border-0 m-1 bg-slate-300 rounded-xl p-2">
                    <Image className="w-10 h-10 rounded-full border-4 border-green-500" source={{ uri:'https://source.unsplash.com/random/?logo'}}></Image>
                    <Text className="border-0 text-gray-800 text-justify p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quae laborum asperiores voluptatibus. Repellat eius animi corrupti assumenda, architecto sunt?</Text>
                </View>
                <View className="w-full flex justify-end items-end">
                    <View className="flex float-right w-10/12 justify-end items-end m-1 bg-blue-500 rounded-xl p-2">
                        <Image className="w-10 h-10 rounded-full border-2 border-green-500" source={{ uri:'https://source.unsplash.com/random/?logo'}}></Image>
                        <Text className="border-0 text-justify p-2 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quae laborum asperiores voluptatibus. Repellat eius animi corrupti assumenda, architecto sunt?</Text>
                    </View>
                </View>
            </View>
        )
    }
  return (
    <ScrollView className="w-full flex flex-col ">
        {arr.map((item,index)=>
        {
            return (<View key={index}>
                {item}
            </View>)
        })}
    </ScrollView>
  )
}

export default Chats;