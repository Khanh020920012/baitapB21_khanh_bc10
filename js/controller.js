function renderDSNV() {
  var content = "";
  for (var i = 0; i < danhSachNhanVien.length; i++) {
    var nv = danhSachNhanVien[i];
    var trString = `<tr>
          <td>${nv.taiKhoan}</td>
          <td>${nv.hoTen}</td>
          <td>${nv.email}</td>
          <td>${nv.ngayLam}</td>
          <td>${nv.chucVu}</td>
          <td>${nv.tongLuong()}</td>
          <td>${nv.xepLoai()}</td>
          <td>
          <button type="button" onclick="xoaNv('${
            nv.taiKhoan
          }')" class="btn btn-danger">
          Xóa
          </button>
          <button type="button" onclick="suaNv('${
            nv.taiKhoan
          }')" class="btn btn-success"
          data-toggle="modal"
					data-target="#myModal"
          
          >
         Sửa
          </button>
          </td>
      </tr>`;
    content += trString;
  }

  document.getElementById("tableDanhSach").innerHTML = content;
}

function layThongTinTuForm() {
  var taiKhoan = document.getElementById("tknv").value;
  var hoTen = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var passWord = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCb = document.getElementById("luongCB").value * 1;
  var chucVu = document.getElementById("chucvu").value;
  var gioLam = document.getElementById("gioLam").value * 1;

  // var tongLuong =  tinhTongLuong(chucVu, luongCb);

  var nhanVien = {
    taiKhoan: taiKhoan,
    hoTen: hoTen,
    email: email,
    passWord: passWord,
    ngayLam: ngayLam,
    luongCb: luongCb,
    chucVu: chucVu,
    gioLam: gioLam,
    tongLuong: function () {
      switch (this.chucVu) {
        case "Sếp":
          return luongCb * 3;
        case "Trưởng phòng":
          return luongCb * 2;
        case "Nhân viên":
          return luongCb * 1.5;
        default:
          return 0;
      }
    },
    xepLoai: function () {
      if (this.gioLam >= 192) {
        return "nhân viên xuất sắc";
      }
      if (this.gioLam >= 176) {
        return "nhân viên giỏi";
      }
      if (this.gioLam >= 160) {
        return "nhân viên khá";
      } else {
        return "nhân viên trung bình";
      }
    },
  };
  return nhanVien;
}
