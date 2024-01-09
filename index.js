console.log("helloooo");
// var thongBao = document.querySelectorAll(".sp-thongbao") ;
// var nhapThongTin = document.getElementById("btnThemNV");

var danhSachNhanVien = [];

var dataJson = localStorage.getItem("DSNV");
var arrayNv = JSON.parse(dataJson);
renderDSNV();
console.log("first", danhSachNhanVien);

for (var i = 0; i < arrayNv.length; i++) {
  var data = arrayNv[i];
  var nv = new Nhanvien(
    data.taiKhoan,
    data.hoTen,
    data.email,
    data.passWord,
    data.ngayLam,
    data.luongCb,
    data.chucVu,
    data.gioLam
  );
  danhSachNhanVien.push(nv);
}
renderDSNV();

function themNV(nhanVien) {
  var nhanVien = layThongTinTuForm();

  danhSachNhanVien.push(nhanVien);
  var dataJson = JSON.stringify(danhSachNhanVien);
  localStorage.setItem("DSNV", dataJson);
  renderDSNV();
}

function xoaNv(nhanVien) {
  console.log("yes", nhanVien);

  var index = layThongTinTuForm(); // Initialize index to -1 if the item is not found
  for (var i = 0; i < danhSachNhanVien.length; i++) {
    if (danhSachNhanVien[i].taiKhoan == nhanVien) {
      index = i;
      break;
    }if(danhSachNhanVien[i].taiKhoan !== -1){
      index = nhanVien;
    }
  }
  console.log("🚀 ~ file: index.js:100 ~ xoaNv ~ index:", index);
  danhSachNhanVien.splice(index, 1);
  var dataJson = JSON.stringify(danhSachNhanVien);
  localStorage.setItem("DSNV", dataJson);
  renderDSNV();

}

function suaNv(nhanVien) {
  console.log("first", nhanVien);
  var index;
  for (var i = 0; i < danhSachNhanVien.length; i++) {
    if (danhSachNhanVien[i].taiKhoan == nhanVien) {
      index = i;
      break;
    }
  }
  var nv = danhSachNhanVien[index];
  document.getElementById("tknv").value = nv.taiKhoan;
  document.getElementById("name").value = nv.hoTen;
  document.getElementById("email").value = nv.email;
  document.getElementById("password").value = nv.passWord;
  document.getElementById("datepicker").value = nv.ngayLam;
  document.getElementById("luongCB").value = nv.luongCb;
  document.getElementById("chucvu").value = nv.chucVu;
  document.getElementById("gioLam").value = nv.gioLam;
}

function capNhatNv(nhanVien) {
  var nhanVien = layThongTinTuForm();
  var index = "";
  for (var i = 0; i < danhSachNhanVien.length; i++) {
    if (danhSachNhanVien[i].taiKhoan == nhanVien.taiKhoan) {
      index = i;
    }
  }
  danhSachNhanVien[index] = nhanVien;
  var dataJson = JSON.stringify(danhSachNhanVien);
  localStorage.setItem("DSNV", dataJson);
  renderDSNV();
}


 

