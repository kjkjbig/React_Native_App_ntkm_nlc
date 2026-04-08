import { DataCard } from '../types';

export const mockPromotions: DataCard[] = [ //array ของ DataCard ที่ใช้สำหรับเก็บข้อมูลโปรโมชั่น โดยแต่ละ DataCard จะมี id, headtitle และ content
  {
    id: 'promo-section-1',
    headtitle: 'สิทธิพิเศษสำหรับคุณ',
    content: [
      {
        id: 'promo-1',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=300&auto=format&fit=crop',
        title: 'ส่วนลดร้านอาหาร 50% เมื่อใช้คะแนนสะสม',
        dateStr: '10 เม.ย. 69',
        description: 'อิ่มอร่อยสุดคุ้ม! เพียงใช้คะแนนสะสม 500 คะแนน แลกรับส่วนลดทันที 50% สำหรับร้านอาหารที่ร่วมรายการภายในสถานีรถไฟฟ้า สิทธิ์มีจำนวนจำกัด จำกัด 1 สิทธิ์ / ท่าน / เดือน \n\nอิ่มอร่อยสุดคุ้ม! เพียงใช้คะแนนสะสม 500 คะแนน แลกรับส่วนลดทันที 50% สำหรับร้านอาหารที่ร่วมรายการภายในสถานีรถไฟฟ้า สิทธิ์มีจำนวนจำกัด จำกัด 1 สิทธิ์ / ท่าน / เดือน\n\nอิ่มอร่อยสุดคุ้ม! เพียงใช้คะแนนสะสม 500 คะแนน แลกรับส่วนลดทันที 50% สำหรับร้านอาหารที่ร่วมรายการภายในสถานีรถไฟฟ้า สิทธิ์มีจำนวนจำกัด จำกัด 1 สิทธิ์ / ท่าน / เดือน'
      },
      {
        id: 'promo-2',
        imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=300&auto=format&fit=crop',
        title: 'แลกรับเครื่องดื่มฟรี ที่คาเฟ่ชั้นนำบนสถานี',
        dateStr: '15 พ.ค. 69',
        description: 'เติมความสดชื่นก่อนเดินทาง! แลกรับเครื่องดื่มฟรี 1 แก้ว (หมวดชาและกาแฟ ไซส์ M) ที่คาเฟ่ชั้นนำที่ร่วมรายการ เพียงสแกนคิวอาร์โค้ดที่หน้าร้านเพื่อรับสิทธิ์'
      },
      {
        id: 'promo-3',
        imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=300&auto=format&fit=crop',
        title: 'ซื้อ 1 แถม 1 เบเกอรี่ร้านดัง',
        dateStr: '15 พ.ค. 69',
        description: 'โปรโมชันพิเศษสำหรับสมาชิก เมื่อซื้อเบเกอรี่ที่ร้านชั้นนำบนสถานี รับฟรีทันทีอีก 1 ชิ้น (ในราคาที่เท่ากันหรือต่ำกว่า) เฉพาะช่วงเวลา 14:00 - 17:00 น. เท่านั้น'
      },
      {
        id: 'promo-4',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=300&auto=format&fit=crop',
        title: 'รับเครดิตเงินคืน 10% เมื่อผูกบัตรเครดิต',
        dateStr: '10 เม.ย. 69',
        description: 'สะดวกและคุ้มค่ากว่าเดิม เมื่อผูกบัตรเครดิตที่ร่วมรายการเข้ากับแอปพลิเคชัน รับเครดิตเงินคืน 10% ทุกการเติมเงินขั้นต่ำ 300 บาท'
      },
    ]
  },
  {
    id: 'promo-section-2',
    headtitle: 'ส่วนลดร้านอาหาร',
    content: [
      {
        id: 'promo-5',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=300&auto=format&fit=crop',
        title: 'สะสมเที่ยวเดินทาง รับฟรีเครดิตเงินคืน',
        dateStr: 'ตลอดปี 2569',
        description: 'ยิ่งเดินทางยิ่งคุ้ม! สะสมเที่ยวเดินทางครบ 10 เที่ยวภายใน 1 สัปดาห์ รับฟรีเครดิตเงินคืนเข้าบัตรโดยสาร 50 บาทโดยอัตโนมัติ ไม่ต้องกดรับสิทธิ์'
      }
    ]
  }
];

export const mockNews: DataCard[] = [ //array ของ DataCard ที่ใช้สำหรับเก็บข้อมูลข่าวสาร
  {
    id: 'news-section-1',
    headtitle: 'ข่าวสารและประกาศล่าสุด',
    content: [
      {
        id: 'news-101',
        imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=300&auto=format&fit=crop',
        title: 'ขยายเวลาให้บริการในวันหยุดนักขัตฤกษ์',
        dateStr: 'อัปเดต: 1 เม.ย. 69',
        description: 'เพื่ออำนวยความสะดวกให้แก่ผู้โดยสารในช่วงเทศกาล ระบบรถไฟฟ้าจะขยายเวลาให้บริการในวันหยุดนักขัตฤกษ์ที่จะถึงนี้ ไปจนถึงเวลา 02:00 น. ของวันถัดไป พร้อมเพิ่มความถี่ของขบวนรถในช่วงเวลาเร่งด่วน'
      },
      {
        id: 'news-102',
        imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=300&auto=format&fit=crop',
        title: 'ปรับปรุงระบบจองตั๋วออนไลน์เพื่อประสบการณ์ที่ดีขึ้น',
        dateStr: 'อัปเดต: 12 เม.ย. 69',
        description: 'เราได้ทำการปรับปรุงระบบแอปพลิเคชันเพื่อเพิ่มประสิทธิภาพในการทำงาน ทำให้การเช็คยอดเงินและการซื้อบัตรโดยสารล่วงหน้ารวดเร็วและปลอดภัยมากยิ่งขึ้น กรุณาอัปเดตแอปพลิเคชันเป็นเวอร์ชันล่าสุดเพื่อการใช้งานที่สมบูรณ์แบบ'
      }
    ]
  },
  {
    id: 'news-section-2',
    headtitle: 'การปรับปรุงและพัฒนาระบบ',
    content: [
      {
        id: 'news-101',
        imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=300&auto=format&fit=crop',
        title: 'ขยายเวลาให้บริการในวันหยุดนักขัตฤกษ์',
        dateStr: 'อัปเดต: 1 เม.ย. 69',
        description: 'เพื่ออำนวยความสะดวกให้แก่ผู้โดยสารในช่วงเทศกาล ระบบรถไฟฟ้าจะขยายเวลาให้บริการในวันหยุดนักขัตฤกษ์ที่จะถึงนี้ ไปจนถึงเวลา 02:00 น. ของวันถัดไป พร้อมเพิ่มความถี่ของขบวนรถในช่วงเวลาเร่งด่วน'
      },
    ]
  }
];

export const mockPromoSliders: string[] = [ //array ของรูปที่ใช้สำหรับแสดงใน AutoSlider ของหน้าโปรโมชั่น
  'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=800&auto=format&fit=crop',
];

export const mockNewsSliders: string[] = [ //array ของรูปที่ใช้สำหรับแสดงใน AutoSlider ของหน้าข่าวสาร
  'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800&auto=format&fit=crop',
];