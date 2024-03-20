//BTVN1:

// if/else
// Sử dụng nhiều câu lệnh if lồng nhau để kiểm tra các điều kiện.
// Có thể sử dụng else if để kiểm tra nhiều điều kiện liên tiếp.
// Cuối cùng sử dụng else để xử lý trường hợp mặc định.
// VD:
// let diem = Number(prompt("Nhap diem"));
// if (diem === 1) {
//   console.log("Huy chuong vang");
// } else if (diem === 2) {
//   console.log("Huy chuong bac");
// } else {
//   console.log("Huy chuong dong");
// }

// // switch/case
// // Sử dụng một biểu thức được so sánh với các giá trị trong các trường hợp (case).
// // Mỗi trường hợp có một khối lệnh tương ứng được thực thi.
// // Sử dụng break để thoát khỏi trường hợp sau khi thực thi.
// //VD:
// switch (diem) {
//   case 1:
//     console.log("Huy chuong vang");
//     break;
//   case 2:
//     console.log("Huy chuong bac");
//     break;
//   default:
//     console.log("Huy chuong dong");
// }

//BTVN2:

// Nhập liệu từ người dùng
// let a = prompt("Nhập số a: ");
// let b = prompt("Nhập số b: ");
// let c = prompt("Nhập số c: ");

// // Chuyển đổi dữ liệu sang số
// a = parseFloat(a);
// b = parseFloat(b);
// c = parseFloat(c);

// // Sắp xếp ba số
// let temp;

// if (a > b) {
//   temp = a;
//   a = b;
//   b = temp;
// }

// if (b > c) {
//   temp = b;
//   b = c;
//   c = temp;
// }

// if (a > b) {
//   temp = a;
//   a = b;
//   b = temp;
// }

// // In ra màn hình console
// console.log(`Số theo thứ tự tăng dần: ${a}, ${b}, ${c}`);

//BTVN3:
// let diemTB = Number(prompt("Nhap diem trung binh:"));
// if (diemTB <= 10 || diemTB >= 8) {
//   console.log("xep loai Gioi");
// } else if (diemTB <= 7.9 || diemTB >= 6.5) {
//   console.log("xep loai Kha");
// } else if (diemTB <= 6.4 || diemTB >= 5) {
//   console.log("xep loai Trung Binh");
// } else if (diemTB <= 4.9) {
//   console.log("xep loai Yeu");
// } else {
//   console.log("Nhap thang diem tu 1-10");
// }

//BTVN4:

//Dua ra so ngay
// let month = Number(prompt("Nhap so thang trong nam"));
// let monthDay;
// if (
//   month === 1 ||
//   month === 3 ||
//   month === 5 ||
//   month === 7 ||
//   month === 8 ||
//   month === 10 ||
//   month === 12
// ) {
//   monthDay = 31;
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//   monthDay = 30;
// } else if (month === 2) {
//   let year = new Date().getFullYear();
//   if (year % 400 === 0) {
//     monthDay = 29;
//   } else {
//     monthDay = 28;
//   }
// }
// if (month > 0) {
//   console.log("So ngay trong thang la" + monthDay);
// }

//BTVN5:Tim so lon nhat

let a = prompt("Nhập số a: ");
let b = prompt("Nhập số b: ");
let c = prompt("Nhập số c: ");
let max = Math.max(a, b, c);
console.log("So lon nhat la:", max);
