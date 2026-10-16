// Complete 125 Tracks Database (25 Artists x 5 Top Songs Each)
const trackList = [
  // 1. Arijit Singh
  { id: 1, title: "Tum Hi Ho", artist: "Arijit Singh", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { id: 2, title: "Channa Mereya", artist: "Arijit Singh", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { id: 3, title: "Kesariya", artist: "Arijit Singh", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { id: 4, title: "Agar Tum Saath Ho", artist: "Arijit Singh", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  { id: 5, title: "Ae Dil Hai Mushkil", artist: "Arijit Singh", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },

  // 2. Shreya Ghoshal
  { id: 6, title: "Sun Raha Hai Na Tu", artist: "Shreya Ghoshal", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
  { id: 7, title: "Deewani Mastani", artist: "Shreya Ghoshal", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
  { id: 8, title: "Teri Ore", artist: "Shreya Ghoshal", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
  { id: 9, title: "Ghar More Pardesiya", artist: "Shreya Ghoshal", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
  { id: 10, title: "Manwa Laage", artist: "Shreya Ghoshal", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },

  // 3. A. R. Rahman
  { id: 11, title: "Kun Faya Kun", artist: "A. R. Rahman", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
  { id: 12, title: "Jai Ho", artist: "A. R. Rahman", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
  { id: 13, title: "Maa Tujhe Salaam", artist: "A. R. Rahman", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
  { id: 14, title: "Dil Se Re", artist: "A. R. Rahman", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
  { id: 15, title: "Tere Bina", artist: "A. R. Rahman", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },

  // 4. Sonu Nigam
  { id: 16, title: "Abhi Mujh Mein Kahin", artist: "Sonu Nigam", cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
  { id: 17, title: "Kal Ho Naa Ho", artist: "Sonu Nigam", cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { id: 18, title: "Sandese Aate Hai", artist: "Sonu Nigam", cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { id: 19, title: "Suraj Hua Maddham", artist: "Sonu Nigam", cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { id: 20, title: "Saathiya", artist: "Sonu Nigam", cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },

  // 5. Neha Kakkar
  { id: 21, title: "Aankh Marey", artist: "Neha Kakkar", cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
  { id: 22, title: "Dilbar", artist: "Neha Kakkar", cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
  { id: 23, title: "Kala Chashma", artist: "Neha Kakkar", cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
  { id: 24, title: "Mile Ho Tum Humko", artist: "Neha Kakkar", cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
  { id: 25, title: "Garmi", artist: "Neha Kakkar", cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },

  // 6. Diljit Dosanjh
  { id: 26, title: "Lover", artist: "Diljit Dosanjh", cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
  { id: 27, title: "GOAT", artist: "Diljit Dosanjh", cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
  { id: 28, title: "Do You Know", artist: "Diljit Dosanjh", cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
  { id: 29, title: "Born to Shine", artist: "Diljit Dosanjh", cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
  { id: 30, title: "Proper Patola", artist: "Diljit Dosanjh", cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },

  // 7. Yo Yo Honey Singh
  { id: 31, title: "Desi Kalakaar", artist: "Yo Yo Honey Singh", cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
  { id: 32, title: "Blue Eyes", artist: "Yo Yo Honey Singh", cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
  { id: 33, title: "Dope Shope", artist: "Yo Yo Honey Singh", cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { id: 34, title: "Brown Rang", artist: "Yo Yo Honey Singh", cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { id: 35, title: "Love Dose", artist: "Yo Yo Honey Singh", cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },

  // 8. Jubin Nautiyal
  { id: 36, title: "Raataan Lambiyan", artist: "Jubin Nautiyal", cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  { id: 37, title: "Lut Gaye", artist: "Jubin Nautiyal", cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
  { id: 38, title: "Humnava Mere", artist: "Jubin Nautiyal", cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
  { id: 39, title: "Tum Hi Aana", artist: "Jubin Nautiyal", cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
  { id: 40, title: "Meri Aashiqui", artist: "Jubin Nautiyal", cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },

  // 9. Badshah
  { id: 41, title: "Jugnu", artist: "Badshah", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
  { id: 42, title: "Genda Phool", artist: "Badshah", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
  { id: 43, title: "Paani Paani", artist: "Badshah", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
  { id: 44, title: "DJ Waley Babu", artist: "Badshah", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
  { id: 45, title: "Garmi Anthem", artist: "Badshah", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },

  // 10. Karan Aujla
  { id: 46, title: "Softly", artist: "Karan Aujla", cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
  { id: 47, title: "White Brown Black", artist: "Karan Aujla", cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
  { id: 48, title: "Chithiyaan", artist: "Karan Aujla", cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
  { id: 49, title: "Don't Look", artist: "Karan Aujla", cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { id: 50, title: "Adhiya", artist: "Karan Aujla", cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },

  // 11. Parmish Verma
  { id: 51, title: "Sab Fade Jange", artist: "Parmish Verma", cover: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { id: 52, title: "Gaal Ni Kadni", artist: "Parmish Verma", cover: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  { id: 53, title: "Shada", artist: "Parmish Verma", cover: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
  { id: 54, title: "Chal Oye", artist: "Parmish Verma", cover: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
  { id: 55, title: "Dhol Wajea", artist: "Parmish Verma", cover: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },

  // 12. Deep Jandu
  { id: 56, title: "Majhail", artist: "Deep Jandu", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
  { id: 57, title: "Aa Gya Ni Ohi Billo Time", artist: "Deep Jandu", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
  { id: 58, title: "Good Life", artist: "Deep Jandu", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
  { id: 59, title: "Up & Down", artist: "Deep Jandu", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
  { id: 60, title: "Bombay to Punjab", artist: "Deep Jandu", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },

  // 13. Sidhu Moose Wala
  { id: 61, title: "295", artist: "Sidhu Moose Wala", cover: "https://images.unsplash.com/photo-1520523839898-50712825e3a7?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
  { id: 62, title: "The Last Ride", artist: "Sidhu Moose Wala", cover: "https://images.unsplash.com/photo-1520523839898-50712825e3a7?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
  { id: 63, title: "So High", artist: "Sidhu Moose Wala", cover: "https://images.unsplash.com/photo-1520523839898-50712825e3a7?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
  { id: 64, title: "Same Beef", artist: "Sidhu Moose Wala", cover: "https://images.unsplash.com/photo-1520523839898-50712825e3a7?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
  { id: 65, title: "Dollar", artist: "Sidhu Moose Wala", cover: "https://images.unsplash.com/photo-1520523839898-50712825e3a7?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },

  // 14. Guru Randhawa
  { id: 66, title: "High Rated Gabru", artist: "Guru Randhawa", cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { id: 67, title: "Lahore", artist: "Guru Randhawa", cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { id: 68, title: "Suit Suit", artist: "Guru Randhawa", cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  { id: 69, title: "Ban Ja Rani", artist: "Guru Randhawa", cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
  { id: 70, title: "Made in India", artist: "Guru Randhawa", cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },

  // 15. Udit Narayan
  { id: 71, title: "Tip Tip Barsa Paani", artist: "Udit Narayan", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
  { id: 72, title: "Pehla Nasha", artist: "Udit Narayan", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
  { id: 73, title: "Mitwa", artist: "Udit Narayan", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
  { id: 74, title: "Main Yahaan Hoon", artist: "Udit Narayan", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
  { id: 75, title: "Papa Kehte Hain", artist: "Udit Narayan", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },

  // 16. Kishore Kumar
  { id: 76, title: "Pal Pal Dil Ke Paas", artist: "Kishore Kumar", cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
  { id: 77, title: "Yeh Shaam Mastani", artist: "Kishore Kumar", cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
  { id: 78, title: "Roop Tera Mastana", artist: "Kishore Kumar", cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
  { id: 79, title: "O Mere Dil Ke Chain", artist: "Kishore Kumar", cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
  { id: 80, title: "Ek Ladki Bheegi Bhaagi Si", artist: "Kishore Kumar", cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },

  // 17. Lata Mangeshkar
  { id: 81, title: "Lag Ja Gale", artist: "Lata Mangeshkar", cover: "https://images.unsplash.com/photo-1445985543469-433ecba627a0?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { id: 82, title: "Aap Ki Nazron Ne Samjha", artist: "Lata Mangeshkar", cover: "https://images.unsplash.com/photo-1445985543469-433ecba627a0?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { id: 83, title: "Tujhe Dekha Toh Yeh Jaana Sanam", artist: "Lata Mangeshkar", cover: "https://images.unsplash.com/photo-1445985543469-433ecba627a0?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { id: 84, title: "Tere Bina Zindagi Se", artist: "Lata Mangeshkar", cover: "https://images.unsplash.com/photo-1445985543469-433ecba627a0?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  { id: 85, title: "Kabhie Kabhie Mere Dil Mein", artist: "Lata Mangeshkar", cover: "https://images.unsplash.com/photo-1445985543469-433ecba627a0?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },

  // 18. KK
  { id: 86, title: "Yaaron", artist: "KK", cover: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
  { id: 87, title: "Pal", artist: "KK", cover: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
  { id: 88, title: "Zara Sa", artist: "KK", cover: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
  { id: 89, title: "Kya Mujhe Pyar Hai", artist: "KK", cover: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
  { id: 90, title: "Tadap Tadap Ke", artist: "KK", cover: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },

  // 19. Atif Aslam
  { id: 91, title: "Aadat", artist: "Atif Aslam", cover: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
  { id: 92, title: "Tere Sang Yaara", artist: "Atif Aslam", cover: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
  { id: 93, title: "Tajdar-e-Haram", artist: "Atif Aslam", cover: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
  { id: 94, title: "Dil Diyan Gallan", artist: "Atif Aslam", cover: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
  { id: 95, title: "Jeena Jeena", artist: "Atif Aslam", cover: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },

  // 20. Sunidhi Chauhan
  { id: 96, title: "Kamli", artist: "Sunidhi Chauhan", cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
  { id: 97, title: "Sheila Ki Jawani", artist: "Sunidhi Chauhan", cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { id: 98, title: "Dhoom Machale", artist: "Sunidhi Chauhan", cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { id: 99, title: "Beedi Jalaile", artist: "Sunidhi Chauhan", cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { id: 100, title: "Sajna Ji Vaari Vaari", artist: "Sunidhi Chauhan", cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },

  // 21. AP Dhillon
  { id: 101, title: "Excuses", artist: "AP Dhillon", cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
  { id: 102, title: "Brown Munde", artist: "AP Dhillon", cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
  { id: 103, title: "Insane", artist: "AP Dhillon", cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
  { id: 104, title: "With You", artist: "AP Dhillon", cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
  { id: 105, title: "Summer High", artist: "AP Dhillon", cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },

  // 22. Amrit Maan
  { id: 106, title: "Bamb Gaana", artist: "Amrit Maan", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
  { id: 107, title: "Peg Di Waashna", artist: "Amrit Maan", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
  { id: 108, title: "Trending Nakhra", artist: "Amrit Maan", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
  { id: 109, title: "Combination", artist: "Amrit Maan", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
  { id: 110, title: "Guerrilla War", artist: "Amrit Maan", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },

  // 23. Bilal Saeed
  { id: 111, title: "12 Saal", artist: "Bilal Saeed", cover: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
  { id: 112, title: "Baari", artist: "Bilal Saeed", cover: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
  { id: 113, title: "Teri Khair Mangdi", artist: "Bilal Saeed", cover: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { id: 114, title: "Adhi Adhi Raat", artist: "Bilal Saeed", cover: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { id: 115, title: "Judaiya", artist: "Bilal Saeed", cover: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },

  // 24. Lucky Ali
  { id: 116, title: "O Sanam", artist: "Lucky Ali", cover: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  { id: 117, title: "Hairat", artist: "Lucky Ali", cover: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
  { id: 118, title: "Gori Teri Aankhein", artist: "Lucky Ali", cover: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
  { id: 119, title: "Na Tum Jano Na Hum", artist: "Lucky Ali", cover: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
  { id: 120, title: "Jaane Kya Dhoondta Hai", artist: "Lucky Ali", cover: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },

  // 25. Mohit Chauhan
  { id: 121, title: "Matargashti", artist: "Mohit Chauhan", cover: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
  { id: 122, title: "Tum Se Hi", artist: "Mohit Chauhan", cover: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
  { id: 123, title: "Nadaan Parindey", artist: "Mohit Chauhan", cover: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
  { id: 124, title: "Pee Loon", artist: "Mohit Chauhan", cover: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
  { id: 125, title: "Phir Se Ud Chala", artist: "Mohit Chauhan", cover: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=400&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" }
];

let currentIndex = 0;
let isPlaying = false;
let currentPlaylist = [...trackList];

// DOM Elements
const audio = document.getElementById("audioSource");
const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("playIcon");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const cardsGrid = document.getElementById("cardsGrid");
const playerTitle = document.getElementById("playerTitle");
const playerArtist = document.getElementById("playerArtist");
const playerTrackImg = document.getElementById("playerTrackImg");
const progressFill = document.getElementById("progressFill");
const progressBarContainer = document.getElementById("progressBarContainer");
const currentTimeEl = document.getElementById("currentTime");
const totalDurationEl = document.getElementById("totalDuration");
const volumeSlider = document.getElementById("volumeSlider");
const likeBtn = document.getElementById("likeBtn");
const muteBtn = document.getElementById("muteBtn");
const volumeIcon = document.getElementById("volumeIcon");
const liveSearchInput = document.getElementById("liveSearchInput");
const artistChips = document.getElementById("artistChips");
const sectionHeading = document.getElementById("sectionHeading");
const songCountBadge = document.getElementById("songCountBadge");
const navHome = document.getElementById("navHome");
const navSearch = document.getElementById("navSearch");
const brandLogo = document.getElementById("brandLogo");

// Modals & Account Elements
const premiumModal = document.getElementById("premiumModal");
const openPremiumBtn = document.getElementById("openPremiumBtn");
const sideUpgradeBtn = document.getElementById("sideUpgradeBtn");
const closePremiumModal = document.getElementById("closePremiumModal");

const accountModal = document.getElementById("accountModal");
const userProfileBtn = document.getElementById("userProfileBtn");
const closeAccountModal = document.getElementById("closeAccountModal");
const signupForm = document.getElementById("signupForm");
const userNameInput = document.getElementById("userNameInput");
const userNameDisplay = document.getElementById("userNameDisplay");

// Format seconds into MM:SS
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

// Generate Distinct Artist Filter Chips
const distinctArtists = ["All Tracks", ...new Set(trackList.map(t => t.artist))];

function renderChips() {
  artistChips.innerHTML = distinctArtists.map((artist, idx) => `
    <button class="chip ${idx === 0 ? 'active' : ''}" onclick="filterByArtist('${artist}')">${artist}</button>
  `).join("");
}

// Filter Tracks by Artist Selection
function filterByArtist(artist) {
  document.querySelectorAll('.chip').forEach(c => {
    c.classList.toggle('active', c.textContent === artist);
  });

  if (artist === "All Tracks") {
    currentPlaylist = [...trackList];
    sectionHeading.innerHTML = `Top Charting Tracks <span class="stats-badge">(${currentPlaylist.length} Songs)</span>`;
  } else {
    currentPlaylist = trackList.filter(t => t.artist.toLowerCase() === artist.toLowerCase());
    sectionHeading.innerHTML = `${artist} Essentials <span class="stats-badge">(${currentPlaylist.length} Songs)</span>`;
  }

  liveSearchInput.value = "";
  renderGrid(currentPlaylist);
}

// Render Track Cards
function renderGrid(tracks) {
  songCountBadge.textContent = `(${tracks.length} Songs)`;
  if (tracks.length === 0) {
    cardsGrid.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; padding: 30px 0;">No matching tracks or artists found.</p>`;
    return;
  }

  cardsGrid.innerHTML = tracks.map((track) => `
    <article class="song-card" onclick="playSelectedTrackById(${track.id})">
      <div class="card-img-wrap">
        <img src="${track.cover}" alt="${track.title} Cover" loading="lazy">
        <div class="card-play-btn">
          <i class="fa-solid fa-play"></i>
        </div>
      </div>
      <h4>${track.title}</h4>
      <p>${track.artist}</p>
    </article>
  `).join("");
}

// Load and Play Audio Logic
function playSelectedTrackById(trackId) {
  const index = trackList.findIndex(t => t.id === trackId);
  if (index !== -1) {
    loadSong(index);
    playAudio();
  }
}

function loadSong(index) {
  currentIndex = index;
  const song = trackList[currentIndex];
  playerTitle.textContent = song.title;
  playerArtist.textContent = song.artist;
  playerTrackImg.src = song.cover;
  audio.src = song.url;
}

function playAudio() {
  audio.play()
    .then(() => {
      isPlaying = true;
      playIcon.className = "fa-solid fa-pause";
    })
    .catch((err) => console.log("Playback notice: ", err));
}

function pauseAudio() {
  audio.pause();
  isPlaying = false;
  playIcon.className = "fa-solid fa-play";
}

function togglePlay() {
  isPlaying ? pauseAudio() : playAudio();
}

function playNext() {
  currentIndex = (currentIndex + 1) % trackList.length;
  loadSong(currentIndex);
  playAudio();
}

function playPrev() {
  currentIndex = (currentIndex - 1 + trackList.length) % trackList.length;
  loadSong(currentIndex);
  playAudio();
}

// Real-Time Live Search
liveSearchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  if (query === "") {
    renderGrid(currentPlaylist);
    return;
  }
  const filtered = trackList.filter(track => 
    track.artist.toLowerCase().includes(query) || 
    track.title.toLowerCase().includes(query)
  );
  sectionHeading.innerHTML = `Search Results <span class="stats-badge">(${filtered.length} Matches)</span>`;
  renderGrid(filtered);
});

// Audio Progress & Seek Events
audio.addEventListener("timeupdate", () => {
  const { currentTime, duration } = audio;
  if (duration) {
    const progressPercent = (currentTime / duration) * 100;
    progressFill.style.width = `${progressPercent}%`;
    currentTimeEl.textContent = formatTime(currentTime);
    totalDurationEl.textContent = formatTime(duration);
  }
});

audio.addEventListener("ended", playNext);

progressBarContainer.addEventListener("click", (e) => {
  const width = progressBarContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  if (duration) {
    audio.currentTime = (clickX / width) * duration;
  }
});

// Volume & Mute Controls
volumeSlider.addEventListener("input", (e) => {
  audio.volume = e.target.value;
  updateVolumeIcon(audio.volume);
});

function updateVolumeIcon(vol) {
  if (vol == 0) {
    volumeIcon.className = "fa-solid fa-volume-xmark";
  } else if (vol < 0.5) {
    volumeIcon.className = "fa-solid fa-volume-low";
  } else {
    volumeIcon.className = "fa-solid fa-volume-high";
  }
}

muteBtn.addEventListener("click", () => {
  if (audio.volume > 0) {
    audio.dataset.prevVolume = audio.volume;
    audio.volume = 0;
    volumeSlider.value = 0;
    updateVolumeIcon(0);
  } else {
    const prev = audio.dataset.prevVolume || 0.75;
    audio.volume = prev;
    volumeSlider.value = prev;
    updateVolumeIcon(prev);
  }
});

// Like Button Toggle
likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle("liked");
  const heartIcon = likeBtn.querySelector("i");
  heartIcon.className = likeBtn.classList.contains("liked") ? "fa-solid fa-heart" : "fa-regular fa-heart";
});

// Premium Modal Triggers
function showPremiumModal() {
  premiumModal.classList.add("active");
}

function hidePremiumModal() {
  premiumModal.classList.remove("active");
}

openPremiumBtn.addEventListener("click", showPremiumModal);
sideUpgradeBtn.addEventListener("click", showPremiumModal);
closePremiumModal.addEventListener("click", hidePremiumModal);

function subscribePlan(planName) {
  alert(`Thank you for selecting the "${planName}"! Demo checkout activated.`);
  hidePremiumModal();
}

// Account / Registration Modal Triggers
function showAccountModal() {
  accountModal.classList.add("active");
}

function hideAccountModal() {
  accountModal.classList.remove("active");
}

userProfileBtn.addEventListener("click", showAccountModal);
closeAccountModal.addEventListener("click", hideAccountModal);

// Close Modals on Overlay Backdrop Click
window.addEventListener("click", (e) => {
  if (e.target === premiumModal) hidePremiumModal();
  if (e.target === accountModal) hideAccountModal();
});

// Handle Account Creation
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const enteredName = userNameInput.value.trim();
  if (enteredName) {
    localStorage.setItem("dhwani_username", enteredName);
    userNameDisplay.textContent = enteredName;
    alert(`Welcome, ${enteredName}! Your Dhwani profile has been initialized.`);
    hideAccountModal();
  }
});

// Load Stored User on App Launch
function loadStoredUser() {
  const savedUser = localStorage.getItem("dhwani_username");
  if (savedUser) {
    userNameDisplay.textContent = savedUser;
  }
}

// Navigation Events
navHome.addEventListener("click", (e) => {
  e.preventDefault();
  filterByArtist("All Tracks");
});

brandLogo.addEventListener("click", () => {
  filterByArtist("All Tracks");
});

navSearch.addEventListener("click", (e) => {
  e.preventDefault();
  liveSearchInput.focus();
});

// Playback Control Event Bindings
playBtn.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", playNext);
prevBtn.addEventListener("click", playPrev);

// Initialize Application
renderChips();
renderGrid(trackList);
loadSong(0);
loadStoredUser();
audio.volume = 0.75;