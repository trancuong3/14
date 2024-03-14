let diemVatLy = parseFloat(prompt("Nhập điểm môn Vật lý:"));
let diemHoaHoc = parseFloat(prompt("Nhập điểm môn Hóa học:"));
let diemSinhHoc = parseFloat(prompt("Nhập điểm môn Sinh học:"));

let tongDiem = diemVatLy + diemHoaHoc + diemSinhHoc;
let diemTrungBinh = tongDiem / 3;

document.write("Điểm trung bình: " + diemTrungBinh.toFixed(2) + "<br>");
document.write("Tổng điểm: " + tongDiem.toFixed(2));
