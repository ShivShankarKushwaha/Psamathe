import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Profile({ setLoggedin })
{
    const navigate = useNavigation();
    const [user, setUser] = useState({ name: '', email: '' });
    const [loading, setloading] = useState(false);
    const [userfound, setuserfound] = useState(false);
    return (
        <ScrollView className="scroll-smooth">
             <View className='flex flex-col justify-start items-center w-full h-auto'>
                <Text className='font-["Bricolage Grotesque"] text-black m-5 text-2xl'>Welcome</Text>
                <Text className=" text-blue-500 font-semibold m-4 text-3xl">Shiv Shankar Kushwaha</Text>
                <View className='border-0 w-full flex flex-col justify-center'>
                    <Text className='w-full text-xl text-cyan-800 border-0 p-2 text-center my-5 bg-slate-400'>User Details</Text>
                    <View className='w-full flex flex-row justify-between  border-0 p-2'>
                        <Text>Name</Text>
                        <Text>Shiv Shankar Kushwaha</Text>
                    </View>
                    <View className='w-full flex flex-row justify-between  border-0 p-2'>
                        <Text>Email</Text>
                        <Text>email@test.com</Text>
                    </View>
                    <TouchableOpacity className="m-5">
                        <Text className="mx-auto p-2 bg-red-700 text-white">Log Out</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => { navigate.navigate('Reset')}}>
                    <Text className='shadow-sm p-2 text-lg cursor-pointer bg-slate-300'>Reset User Details</Text>
                </TouchableOpacity>
            </View> 
        </ScrollView>
    );
}


export default Profile;
