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

let tinhDienTinh = (a, b, h) => {
  return API_Cong(a, b).then((result) => {
    API_Nhan(result * h).then((result) => {
      API_Chia(result / 2);
    });
  });
};
tinhDienTinh(2, 3, 2).then((result) => {
  console.log("Dien tich", result);
});
