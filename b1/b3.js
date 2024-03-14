let banKinh = parseFloat(prompt("Nhập bán kính hình tròn:"));

let dienTich = Math.PI * Math.pow(banKinh, 2);

document.write("Diện tích hình tròn: " + dienTich.toFixed(2));
