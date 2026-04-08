import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { SectionContainerProps } from '../types'; // นำเข้า SectionContainerProps โดยมี title และ content[] ข้างใน
import Card from './Card';
import { router, usePathname } from 'expo-router';

export default function SectionContainer({ title, data }: SectionContainerProps) {

     const pathname = usePathname(); //หา path ปัจจุบัน

    const handleSeeMore = () => { // จะทำงานเมื่อผู้ใช้กด ดูเพิ่มเติม
        const headerTitle = pathname.includes('new') ? 'ข่าวสาร' : 'โปรโมชัน'; //ส่วนจัดการ Title ของหน้ารายละเอียด โดยตรวจสอบจากเส้นทางปัจจุบัน แล้วจัดการว่าจะแสดงเป็น 'ข่าวสาร' หรือ 'โปรโมชัน'
    
        router.push({ // push ไปที่ seemore พร้อมส่ง title และ headertitle ไปด้วย
          pathname: '/seemore/[id]',
          params: { id: title, Title: headerTitle }
        });
    };

    return (
        <View style={styles.container}>{/*กล่องครอบ*/}
            <View style={styles.titleArea}>{/*ส่วนแสดง title และปุ่ม ดูเพิ่มเติม*/}
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={handleSeeMore}>
                    <Text style={styles.seeMore}>ดูเพิ่มเติม</Text>
                </TouchableOpacity>
            </View>

            <FlatList 
            horizontal
            bounces
            alwaysBounceHorizontal = {true}
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => <Card item={item} />}
            keyExtractor={(item) => item.id}
            style={styles.listContainer}
            />{/*Flatlist เอา Card แต่ละใยมาแสดงผลตรงนี้โดยใช้ keyextrac = id*/}
        </View>
    )
};

const styles = StyleSheet.create({
  container: { marginTop: 24 },
  titleArea: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 16, 
    marginBottom: 12 
  },
  title: { fontSize: 18, fontWeight: 'bold', color: '#1A1A1A' },
  seeMore: { fontSize: 14, color: '#575858' },
  listContainer: { paddingRight: 16 }
});