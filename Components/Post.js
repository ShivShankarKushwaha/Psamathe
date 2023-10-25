import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native';

function Post() {
    const arr=[];
    for(let i=0;i<20;i++)
    {
        arr.push(
            <View className="w-full h-fit flex flex-col justify-center items-center  border-0 my-2 bg-slate-300">
                <View className="w-full h-20 flex flex-row-reverse justify-end items-center border-0">
                    <View className="flex justify-start flex-col">
                        <Text className="text-blue-500">Shiv Shankar Kushwaha</Text>
                        <Text>Himacal Pradesh</Text>
                    </View>
                    <Image className="w-10 m-2 h-10 rounded-full" source={{uri:'https://source.unsplash.com/random/?logo'}}></Image>
                </View>
                <Image className="w-full h-40 border-2 " source={{ uri:'https://source.unsplash.com/random/?nature'}}></Image>
                <View className="flex flex-row justify-between w-full items-center p-4">
                    <View className='flex flex-row justify-between gap-5'>
                        <Text className="text-gray-600 font-serif font-bold">Like</Text>
                        <Text className="text-gray-600 font-serif font-bold">Comment</Text>
                    </View>
                    <View>
                        <Text className="text-blue-500">BookMark</Text>
                    </View>
                </View>
            </View>
        )
    }
  return (
    <ScrollView className="bg-slate-800">
       {arr.map((item,index)=>
       {
        return(<View key={index}>
            {item}
        </View>)
       })}
    </ScrollView>
  )
}

export default Post;