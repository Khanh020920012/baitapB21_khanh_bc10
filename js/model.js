function Nhanvien(
    taiKhoan,
    hoTen,
    email,
    passWord,
    ngayLam,
    luongCb,
    chucVu,
    gioLam
  ) {
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.passWord = passWord;
    this.ngayLam = ngayLam;
    this.luongCb = luongCb;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = function () {
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
    };
    this.xepLoai = function () {
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
    };
  }