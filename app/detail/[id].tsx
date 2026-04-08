import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native'; // ดึง basic component มาใช้ และ Linking สำหรับเปิด URL ของโซเชียลมีเดีย
import { useLocalSearchParams , Stack} from 'expo-router'; // ดึง useLocalSearchParams มาใช้สำหรับรับพารามิเตอร์จาก URL และ Stack สำหรับตั้งค่า header ของหน้ารายละเอียด

import { mockPromotions , mockNews } from '../../utils/mockData';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; // lib สำหรับไอคอน Facebook และ Line
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'; // lib สำหรับไอคอน Twitter

export default function DetailScreen() { // หน้ารายละเอียดของข่าวสารหรือโปรโมชันที่ผู้ใช้เลือก

    const { id, Title } = useLocalSearchParams(); // รับพารามิเตอร์ id และ Title จาก Card ตอนที่กดดูรายละเอียด เพื่อใช้ในการค้นหาข้อมูลและตั้งค่า header ของหน้ารายละเอียด

    const allCategories = [...mockPromotions, ...mockNews]; // เอาข้อมูล mockPromotions และ mockNews มารวมกันเพื่อค้นหาข้อมูลที่ตรงกับ id ที่ได้รับมา
    const allItems = allCategories.flatMap(category => category.content); //เอาข้อมูลทั้งหมดมารวมกันเป็น array เดียวเพื่อค้นหาข้อมูลได้ง่ายขึ้น
    const itemData = allItems.find(item => item.id === id); // ค้่าหาข้อมูล แล้วเก็บไว้ใน itemData 

    if (!itemData) {
        return (
            <View style={styles.center}>
                <Stack.Screen options={{ title: 'ไม่พบข้อมูล' }} />
                <Text>ไม่พบข้อมูล</Text>
            </View>
        );
    }

    const handlePress = async (url: string) => { // ทำงานตอนที่ผู้ใช้กดไอคอนโซเชียลมีเดีย เพื่อเปิด URL ของโซเชียลมีเดียที่รับค่ามา โดยใช้ Linking API
        try {
            const supportedUrls = await Linking.canOpenURL(url);// ตรวจสอบว่าอุปกรณ์สามารถเปิด URL ได้หรือไม่
            if (supportedUrls) {
                await Linking.openURL(url);
            } else {
                console.log(`ไม่สามารถเปิด URL: ${url}`);
            }
        } catch (error) {
            console.error(`Error occurred while opening URL: ${url}`, error);
        }
    }

    return (
        <ScrollView style={styles.container}>

            <Stack.Screen options={{ title: Title as string }} />

            <View style={styles.content}>{/* ส่วนของเนื้อหาทั้งหมดในหน้ารายละเอียด */}
                <Text style={styles.title}>{itemData.title}</Text>
                <Text style={styles.date}>{itemData.dateStr}</Text>
                <Text style={styles.date}>ดูแล้ว 99 คน</Text>
                <View style={styles.socialmediaContainer}>
                <View style={styles.socialButtons}>
                        <FontAwesome5 name="facebook" size={32} color="#1877F2" onPress={() => handlePress('https://www.facebook.com/')} />
                        <FontAwesome6 name="x-twitter" size={32} color="black" onPress={() => handlePress('https://twitter.com/')} />
                        <FontAwesome5 name="line" size={32} color="#00C300" onPress={() => handlePress('https://line.me/')} />
                    </View>
                </View>
                <View style={styles.divider} />


                <Image source={{ uri: itemData.imageUrl }} style={styles.image} />
                
                <Text style={styles.description}>
                    {itemData.description}
                </Text>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: '100%', height: 250, backgroundColor: '#e1e4e8' },
  content: { padding: 25 },
  date: { fontSize: 14,  marginBottom: 10, },
  title: { fontSize: 24, color: '#1A1A1A', marginBottom: 10, lineHeight: 32 },
  divider: { height: 1, backgroundColor: '#dfdede', marginBottom: 50 , marginTop: 10 },
  description: { fontSize: 16, color: '#444', lineHeight: 26 , marginTop: 40 },
  socialButtons: { flexDirection: 'row', justifyContent: 'space-between' , gap: 10 },
  socialmediaContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' },
  iconSpacing: { marginRight: 20 }
});