export interface CardItem { // interface ของแต่ละ card item โดยจะมี id, imageUrl, title, dateStr และ description
  id: string;
  imageUrl: string;
  title: string;
  dateStr: string;
  description: string; 
}

export interface DataCard { // interface กล่องครอบ card โดยจะมีชื่อ title และ content เป็น array ของ card item
  id: string;
  headtitle: string; 
  content: CardItem[]; // กำหนดให้ content เป็น Array ของ CardItem
}

//โครงสร้างของ Props ที่จะโยนเข้าไปใน SectionContainer
export interface SectionContainerProps {
  title: string;
  data: CardItem[];
}