import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'; // นำเข้า Swiper สำหรับสร้างสไลด์โชว์

interface Props { // ประกาศ Props ที่รับเข้ามาใน AutoSlider โดย images คือ array ของ url รูปภาพที่จะแสดงในสไลด์โชว์
  images: string[];
}

export default function AutoSlider({ images }: Props) { //function autoslider รับ props เป็น array url รูปภาพ เช่น mockPromoSliders หรือ mockNewsSliders
  return (
    <View style={styles.container}>{/* สร้าง container ครอบสไลด์โชว์ */}
        {/*ส่่วนของ swiper โดยกำหนดให้เล่นอัตโนมัติ มี bullet และภายใต้มี image ที่เอามา map */}
        <Swiper 
            style={styles.wrapper}
            showsButtons={false}
            autoplay
            showsPagination
            dotStyle={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'rgba(97, 97, 97, 0.74)' }}
            activeDotStyle={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'hsl(0, 0%, 100%)' }}
        >
            {images.map((uri, index) => ( // map รูปภาพใน array
                <View style={styles.slide} key={index}>
                    <Image source={{ uri }} style={styles.image} />
                </View>
            ))}
        </Swiper>
    </View>
  )
};

const styles = StyleSheet.create({
  container: { height: 200 },
  wrapper: {},
  slide: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: '100%', height: '100%' }
});