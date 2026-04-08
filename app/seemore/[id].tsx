import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import Card from '../../components/Card'; // ดึง Card มาใช้
import { mockPromotions, mockNews } from '../../utils/mockData'; // ดึงข้อมูล mockPromotions และ mockNews มาใช้

export default function SeeMoreScreen(){ // หน้าดูเพิ่มเติม

    const { id, Title } = useLocalSearchParams(); // รับพารามิเตอร์ id และ Title จาก SectionContainer ตอนที่กดดูเพิ่มเติม เพื่อใช้ในการค้นหาข้อมูลและตั้งค่า header ของหน้าดูเพิ่มเติม
    
    const allCategories = [...mockPromotions, ...mockNews]; // เอาข้อมูล mockPromotions และ mockNews มารวมกัน
    const categoryData = allCategories.find(category => category.headtitle === id);// ค้่าหาข้อมูลที่ตรงกับ id ที่ได้รับมา แล้วเก็บไว้ใน categoryData

    if (!categoryData) {
        return (
            <View style={styles.center}>
                <Stack.Screen options={{ title: 'ไม่พบข้อมูล' }} />
                <Text>ไม่พบข้อมูล</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.gridContainer}>
            <Stack.Screen options={{ title: Title as string}} />
            {categoryData.content.map(item => ( // เอา card ทั้งหมดที่อยู่ใน categoryData มาแสดงผล โดยการ map
                <View key={item.id} style={styles.cardWrapper}>
                    <Card item={item} />
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    gridContainer: { 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        paddingTop: 16,  
        paddingBottom: 10 
    },
    cardWrapper: {
        marginBottom: 5
    }
});