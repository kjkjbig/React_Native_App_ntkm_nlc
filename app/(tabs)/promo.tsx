import { ScrollView, StyleSheet, View } from 'react-native';

import AutoSlider from '../../components/AutoSlider'; // ดึง AutoSlider มาใช้
import SectionContainer from '../../components/SectionContainer'; // ดึง SectionContainer มาใช้

import { mockPromotions , mockPromoSliders } from '../../utils/mockData';

export default function PromotionScreen() { // หน้าโปรโมชัน
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} bounces alwaysBounceVertical={true}> 

      <View style={styles.sliderContainer}>
        <AutoSlider images={mockPromoSliders}/>
      </View>

      {mockPromotions.map((section) => ( // แสดงข้อมูลโปรโมชันจาก mockPromotions โดยใช้ SectionContainer ในการจัดรูปแบบแต่ละส่วนของโปรโมชัน
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