import { ScrollView, StyleSheet, View } from 'react-native';
import AutoSlider from '../../components/AutoSlider'; // ดึง AutoSlider มาใช้
import SectionContainer from '../../components/SectionContainer'; // ดึง SectionContainer มาใช้
import { mockNews , mockNewsSliders } from '../../utils/mockData'; // ดึงข้อมูล mockNews และ mockNewsSliders มาใช้สำหรับแสดงในหน้าข่าวสาร

export default function NewsScreen() { // หน้าข่าวสาร
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} bounces alwaysBounceVertical={true}>

      <View style={styles.sliderContainer}>{/* ส่วนของ slider ที่อยู่ด้านบนของหน้าข่าวสาร โดยใช้ AutoSlider และส่งข้อมูล mockNewsSliders ไปแสดงผล */}
        <AutoSlider images={mockNewsSliders} />
      </View>

      {mockNews.map((section) => ( // แสดงข้อมูลข่าวสารจาก mockNews โดยใช้ SectionContainer ในการจัดรูปแบบแต่ละส่วนของข่าวสาร
              <SectionContainer 
                key={section.id}
                title={section.headtitle}
                data={section.content}
              />
            ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  sliderContainer: { height: 200 },
});