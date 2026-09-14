const formattedDate = (date) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export const review = [
  {
    id: "1",
    username: "Panawat S.",
    detail:
      "ของดีน่าใช้มากครับ คุณภาพวัสดุดี ใส่แล้วรู้สึกสบาย คุ้มกับราคาที่จ่ายไป",
    date: formattedDate("2026-08-15"),
  },
  {
    id: "2",
    username: "Warisara",
    detail:
      "ชอบดีไซน์มากค่ะ สีสวยตรงกับรูปที่ลงไว้ เนื้อผ้าก็ดี มีโอกาสจะกลับมาซื้ออีกแน่นอน",
    date: formattedDate("2026-08-22"),
  },
  {
    id: "3",
    username: "Sonthada",
    detail:
      "จัดส่งรวดเร็วมาก สินค้าห่อมาอย่างดี ตัวสินค้าคุณภาพดีและใส่ได้พอดีเลยค่ะ",
    date: formattedDate("2026-08-28"),
  },
  {
    id: "4",
    username: "Ramain",
    detail:
      "ตอนแรกคิดว่าราคาแรงไปนิด แต่พอได้รับสินค้าแล้วรู้สึกว่าคุ้มมาก งานละเอียดและดูแข็งแรง",
    date: formattedDate("2026-09-02"),
  },
  {
    id: "5",
    username: "Pitchayapong",
    detail:
      "ประทับใจมากครับ เนื้อผ้านุ่ม ใส่สบาย และทรงสวยกว่าที่คิดไว้ โดยรวมให้คะแนนเต็มเลยครับ",
    date: formattedDate("2026-09-07"),
  },
];
