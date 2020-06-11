let API_Cong = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};
let API_Nhan = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a * b);
    }, 2000);
  });
};
let API_Chia = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a / b);
    }, 2000);
  });
};

let tinhDienTich = async (a, b, h) => {
  let ab = await API_Cong(a, b);
  let abh = await API_Nhan(ab, h);
  let abh2 = await API_Chia(abh, 2);
  console.log("Dien tich", abh2);
};
tinhDienTich(2, 3, 2);
