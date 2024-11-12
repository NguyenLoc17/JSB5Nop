// Hiện silde trang bài tập
function pageBT(numberP) {
    // vòng lặp ẩn page không chọn 
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`page${i}`).style.display = 'none';
    }
    // hiện page đã chọn block 
    document.getElementById(`page${numberP}`).style.display = 'block';
}
pageBT(1);

/** 
 * Bài tập 1: tuyển sinh
 * Sơ đồ 3 khối;
 * - Dữ liệu đầu vào gồm: 
        Điểm 3 môn (score)
        Điểm ưu tiên theo khu vực (scoreArea)
        Điểm đối tượng (scoreOb)
        Điểm chuẩn (maxScore)
 * - Xử lý:
        Tính điểm tổng của học sinh thi dc sumCore = score1+score2+score3
        Tính điểm ưu tiên khu vực sumAO = scoreArea + scoreOB
        Tính điểm tổng dự tuyển sumCoreSV = sumCore + sumAO
==> Đầu ra: Kết quả đậu hay rớt
 */
function diemKhuVuc(khuVuc) {
    // lấy điểm khu vực, hàm if
    if (khuVuc === 'A') return 2;
    if (khuVuc === 'B') return 1;
    if (khuVuc === 'C') return 0.5;
    return 0;
}
function diemDoiTuong(doiTuong) {
    // đối tượng ưu tiên 
    if (doiTuong === 1) return 2.5;
    if (doiTuong === 2) return 1.5;
    if (doiTuong === 3) return 1;
    return 0;
}
function kiemTra() {
    // Lấy giá trị tính toán
    const diemChuan = parseFloat(document.getElementById('diemChuan').value);
    const score1 = parseFloat(document.getElementById('score1').value);
    const score2 = parseFloat(document.getElementById('score2').value);
    const score3 = parseFloat(document.getElementById('score3').value);
    const khuVuc = document.getElementById('khuVuc').value.toUpperCase();
    const doiTuong = parseInt(document.getElementById('doiTuong').value);
    // Kiểm tra điểm liệt
    if (score1 === 0 || score2 === 0 || score3 === 0) {
        document.getElementById('result').innerText = "Rớt do có điểm môn 0 điểm - điểm liệt";
        return;
    }
    // tổng điểm 3 môn
    const sumScore = score1 + score2 + score3;
    // điểm ưu tiên
    const diemUT = diemKhuVuc(khuVuc) + diemDoiTuong(doiTuong);
    // Tính tổng điểm
    const maxScore = sumScore + diemUT;
    // Kiểm tra 
    if (maxScore >= diemChuan) {
        document.getElementById('result').innerText = `Chúc mừng bạn đã ĐẬU! Tổng điểm: ${maxScore}`;
    } else {
        document.getElementById('result').innerText = `Vui lòng chọn trường khác, bạn đã RỚT. Tổng điểm: ${maxScore}`;
    }
}
/**
 * 
 * Tính tiền điện:
 * Khối 1: đầu vào thông tin người sử dụng và giá tiền điện của mỗi số
 * Khối 2: xử lý Giá trị thanh toán như sau
50kw đầu: 500đ/kw<
50kw tiếp theo: 650đ/kw
100kw kế: 850đ/kw
150kw kế: 1100đ/kw
Còn lại: 1300đ/kw
Giá tiền = số lượng dùng * giá tiền mỗi chặn thanh toán
 * khối 3: đầu ra số tiền và tên khách hàng

 */
function tinhBill() {
    const name = document.getElementById("name").value;
    const soKwh = parseFloat(document.getElementById("soKwh").value);
    // nhập ký tự string hoặc số âm thì báo nhập lại
    if (name === "") {
        document.getElementById("Result").innerText = "Không biết nên gọi bạn là gì luôn?";
        return;
    }
    if (isNaN(soKwh) || soKwh < 0) {
        document.getElementById("Result").innerText = "Vui lòng nhập số kWh hợp lệ. Không lẽ bạn bán điện xuyên biến giới à?";
        return;
    }
    let totalKwh = 0;
    // Tính tiền điện, số lượng cao hơn thì tính thêm + số cũ đã tính theo ren
    if (soKwh <= 50) {
        totalKwh = soKwh * 500;
    } else if (soKwh <= 100) {
        totalKwh = 50 * 500 + (soKwh - 50) * 650;
    } else if (soKwh <= 200) {
        totalKwh = 50 * 500 + 50 * 650 + (soKwh - 100) * 850;
    } else if (soKwh <= 350) {
        totalKwh = 50 * 500 + 50 * 650 + 100 * 850 + (soKwh - 200) * 1100;
    } else {
        totalKwh = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKwh - 350) * 1300;
    }

    document.getElementById("Result").innerText = `Khách hàng ${name} có số tiền điện phải trả: ${totalKwh.toLocaleString()} đồng. Vui lòng thanh toán nhanh lên tránh cắt điện ahihi.`;
}


/**
 * Tính thuế thu nhập 
 * - Đầu vào : tổng thu nhập năm, số người phụ thuộc, số liệu đóng thuế theo thu nhập.
 * - Xử lý: Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr
 * - Đầu ra: cho biết số tiền phải đóng thuế và thông tin của người nhập.
 */
function calculateTax() {
    const Name = document.getElementById("Name").value;
    const tongThuNhap = parseFloat(document.getElementById("tongThuNhap").value);
    const nguoiPhuThuoc = parseInt(document.getElementById("nguoiPhuThuoc").value);
    if (isNaN(tongThuNhap) || tongThuNhap < 0 || isNaN(nguoiPhuThuoc) || nguoiPhuThuoc < 0) {
      document.getElementById("Result3").innerText = "Nhập lại để em còn tính thuế cho mình nha!!!";
      return;
    }
    // Tính thuế trên thu nhập
    const thueThuNhap = tongThuNhap - 4000000 - (nguoiPhuThuoc * 1.6);
    // Tính thuế suất
    let thueSuat = 0;
    if (thueThuNhap <= 60000000) {
      thueSuat = 0.05;
    } else if (thueThuNhap <= 120000000) {
      thueSuat = 0.10;
    } else if (thueThuNhap <= 210000000) {
      thueSuat = 0.15;
    } else if (thueThuNhap <= 384000000) {
      thueSuat = 0.20;
    } else if (thueThuNhap <= 624000000) {
      thueSuat = 0.25;
    } else if (thueThuNhap <= 960000000) {
      thueSuat = 0.30;
    } else {
      thueSuat = 0.35;
    }thueSuat
    // thuế nộp
    const thueNop = thueThuNhap * thueSuat;
    // Xuất kết quả
    document.getElementById("Result3").innerText = `Khách hàng ${Name}, thu nhập tính thuế là ${thueThuNhap.toFixed(2)} triệu VND. Thuế suất: ${(thueSuat * 100).toFixed(0)}%. Thuế phải nộp: ${thueNop.toFixed(2)} triệu VND.`;
  }


  /**Tính bill mua cap
   * - Đầu vào : 
   * thông tin khách hàng, chọn lựa nhà dân hoặc doanh nghiệp
   * thông tin giá, chi phí từng loại 
   * thông tin thuê kênh cap
   * - Xử lý:
   * chia ra tính bill nhà dân và doanh nghiệp 
   * giá bill = phí xử lý + phí dịch vụ  + kênh * giá tiền 
   * - Xuất ra số tiền cần thanh toán
   * 
   */
   // Lựa chọn thông tin khách hàng, idKH
   function idInput() {
    const loaiKhachHang = document.getElementById("loaiKH").value;
    const soKenhKetNoi = document.getElementById("soKetNoiKenh");
    const soKetNoi = document.getElementById("soKetNoi");
    if (loaiKhachHang === "doanhNghiep") {
      soKenhKetNoi.style.display = "block";
      soKetNoi.disabled = false;
    } else {
      soKenhKetNoi.style.display = "none";
      soKetNoi.disabled = true;
      soKetNoi.value = ""; //  khi chọn Nhà dân giá trị mất 
    }
  }
  //tính toán hóa đơn
  function calculateBill() {
    const idKH = document.getElementById("idKH").value;
    const loaiKH = document.getElementById("loaiKH").value;
    const soKenhPro = parseInt(document.getElementById("soKenhPro").value);
    const soKenh = parseInt(document.getElementById("soKetNoi").value || 0);
    if (!idKH || isNaN(soKenhPro) || soKenhPro < 0 || (loaiKH === "doanhNghiep" && (isNaN(soKenh) || soKenh < 0))) {
      document.getElementById("result").innerText = "Vui lòng nhập đầy đủ và hợp lệ thông tin.";
      return;
    }
    let bill = 0;
    if (loaiKH === "nhaDan") {
      // Nhà dân
      bill = 4.5 + 20.5 + (soKenhPro * 7.5);
    } else if (loaiKH === "doanhNghiep") {
      // Doanh nghiệp
      bill = 15 + 75;
      if (soKenh > 10) {
        bill += (soKenh - 10) * 5;
      }
      bill += soKenhPro * 50;
    }
    document.getElementById("Result4").innerText = `Mã khách hàng: ${idKH}, Tổng hóa đơn: $${bill.toFixed(2)}`;
  }