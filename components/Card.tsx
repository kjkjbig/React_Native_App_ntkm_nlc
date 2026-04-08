import React from "react";
import { TouchableOpacity , Text , Image , StyleSheet , View } from "react-native";
import { router, usePathname } from 'expo-router'; // นำเข้า router และ usePathname จาก expo-router เพื่อใช้ในการนำทางและตรวจสอบเส้นทางปัจจุบัน

import { CardItem } from '../types'; // นำเข้า CardItem ซึ่งเป็นประเภทข้อมูลของการ์ด 1 ใบที่ประกอบด้วย id, title, dateStr และ imageUrl

interface Props { // ประกาศ props ว่าจะรับค่าอะไร ซึ่งในที่นี้คือ item ที่เป็นประเภท CardItem
  item: CardItem;
}

export default function Card({ item }: Props) { //function Card รับ props เข้ามา โดย item เป็นข้อมูลของการ์ด 1 ใบ
  
  const pathname = usePathname(); // ใช้ usePathname เพื่อตรวจสอบเส้นทางปัจจุบัน เพื่อที่จะได้กำหนด headerTitle ในการนำทางไปยังหน้ารายละเอียดได้อย่างถูกต้องว่าเป็นหน้าข่าวสารหรือโปรโมชั่น

  const handlePress = () => { // จะทำงานเมื่อผู้ใช้กดที่การ์ด
    const headerTitle = pathname.includes('new') ? 'ข่าวสาร' : 'โปรโมชัน'; // กำหนด headerTitle โดยตรวจสอบจากเส้นทางปัจจุบัน ถ้าเส้นทางมีคำว่า 'new' ให้ตั้งเป็น 'ข่าวสาร' ถ้าไม่มีให้ตั้งเป็น 'โปรโมชัน'

    router.push({ // นำทางไปหน้ารายละเอียด โดยส่ง id และ Title ไปด้วย เพื่อเอาไปแสดงผลที่หน้ารายละเอียด
      pathname: '/detail/[id]',
      params: { id: item.id, Title: headerTitle }
    });
  };

    return (
        <TouchableOpacity style={styles.card} onPress={handlePress}>{/* เมื่อกดที่การ์ดจะเรียกใช้ฟังก์ชัน handlePress เพื่อไปยังหน้ารายละเอียดของการ์ดนั้นๆ */}
            <Image source={{ uri: item.imageUrl }} style={styles.image} />{/* รูปภาพ */}

            <View style={styles.textContainer}>{/* ส่วนของข้อความที่อยู่ใต้รูปภาพ */}
                <View style={styles.dateBadge}>
                    <Text style={styles.date}>{item.dateStr}</Text>{/* แสดงวันที่*/}
                </View>
                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>{/* แสดงชื่อเรื่อง โดยจำกัดให้แสดงได้สูงสุด 2 บรรทัด ถ้าเกินจะตัดด้วย ... */}
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
  card: { 
    width: 160, 
    marginLeft: 16, 
    borderRadius: 12, 
    backgroundColor: '#fff', 
    overflow: 'hidden',

    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
    marginBottom: 10 
  },
  image: { width: '100%', height: 100, backgroundColor: '#e1e4e8' },
  textContainer: { padding: 10 },
  dateBadge: { 
    alignSelf: 'flex-start', 
    backgroundColor: '#F0F0F0', 
    paddingHorizontal: 6, 
    paddingVertical: 2, 
    borderRadius: 4, 
    marginBottom: 6 
  },
  date: { fontSize: 10, color: '#555', fontWeight: 'bold' },
  title: { fontSize: 14, color: '#333', fontWeight: '500', lineHeight: 20 }
});