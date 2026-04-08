import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // ไอคอนจากไลบรารี Ionicons สำหรับใช้ใน tab bar

export default function TabLayout() { // หน้า layout ส่วนของ tabbar และปุ่มต่างๆที่อยู่ใน tabbar
  return (
    <Tabs
      screenOptions={{tabBarActiveTintColor: 'blue', headerShown: true, headerTitleAlign: 'center',}}>
        
      <Tabs.Screen
        name="promo"
        options={{
          title: 'โปรโมชัน',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pricetags" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          title: 'ข่าวสาร',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
