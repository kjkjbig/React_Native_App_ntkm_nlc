import { Stack } from "expo-router";

export default function Layout() {
  //หน้าหลักสำหรับตั้งค่าหน้าต่างๆในแอป เช่น หน้า tabbar, หน้ารายละเอียด, หน้า ดูเพิ่มเติม
  //จากที่เห็นด้านล่างนี้จะมีการตั้งค่า Stack.Screen สำหรับหน้าต่างๆที่เราได้สร้างไว้ในแอป โดยแต่ละหน้าจะมีการตั้งค่า headerTitleAlign ให้เป็น 'center' เพื่อให้หัวข้อของแต่ละหน้าถูกจัดให้อยู่ตรงกลางของ header
  return (
    <Stack>

      <Stack.Screen 
        name="(tabs)" 
        options={{ 
          headerShown: false, //ปิด header ของหน้าใน tab เพราะแต่ละหน้าของ tab จะมี header ของตัวเองอยู่แล้ว ให้ _layout ที่อยู่ใต้ (tabs) เป็นคนจัดการ header ของแต่ละหน้าแทน
         }} 
      />

      <Stack.Screen 
        name="detail/[id]" 
        options={{ 
          headerTitleAlign: 'center',
        }} 
      />{/* ตั้งค่า header ของหน้ารายละเอียด*/}

      <Stack.Screen 
        name="seemore/[id]" 
        options={{ 
          headerTitleAlign: 'center',
        }} 
      />{/* ตั้งค่า header ของหน้า ดูเพิ่มเติม*/}

    </Stack>
  );
}