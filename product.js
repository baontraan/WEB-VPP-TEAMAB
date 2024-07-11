let empty = [];
const product = [
  {
    id: 1,
    name: "Sổ tay lò xò kép xọc ngang Planner A5",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20210621_COJ2NMxmNF1ifg68rY9eWhTT.jpg",
    price: "34,000",
    status: "Còn hàng",
    describe:
      "Sổ tay lò xo kép sọc ngang Planner A5 Klong 200 trang được thiết kế để lên và thực hiện kế hoạch bản thân hoàn hảo nhất cho năm, tháng, tuần. Kết cấu lò xo kép ánh ngọc với bìa được thiết kế hiện đại, bồi dày (1200g/m2) tạo sự sang trọng, luôn mới. Ruột sổ được in offset rõ ràng, sắc nét, bố cục hợp lý trên giấy silky kem siêu mịn với định lượng 72,4g/m2, bắt mực.",
    charac1: "- Định lượng: 72,4 g/m2",
    charac2: "- Độ trắng: 76% ISO",
    charac3: "- Số trang: 200 trang",
    charac4: "- Kích thước: (148 x 210) mm",
  },
  {
    id: 3,
    name: "Sổ Study Planner for 100 days A5 Klong",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20210621_387GwixGfutVjQmM7AN5xamo.jpg",
    price: "49,860",
    status: "Còn hàng",
    describe:
      "ĐẶC ĐIỂM SỔ STUDY PLANER: - Kết cấu lò xo kép ánh ngọc với bìa được thiết kế hiện đại, bồi dày (1200g/m2) tạo sự sang trọng, luôn mới; - Ruột sổ được in offset rõ ràng, sắc nét, bố cục hợp lý trên giấy chống lem với định lượng 120g/m2, chống lem nhòe hiệu quả.",
    charac1: "- Kích thước: (148 x 210) mm",
    charac2: "- Định lượng: 120 g/m2",
    charac3: "- Độ trắng: 76% ISO",
    charac4: "- Số trang: 160 trang",
  },
  {
    id: 2,
    name: "Vở Dash Line kép lò xo bìa nhựa B5 200 trang",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240424_DkfC0x3cDk.jpeg",
    price: "36,860",
    status: "Còn hàng",
    describe:
      "Vở Klong lò xo kép màu vàng ánh ngọc với bìa nhựa viền chéo PP tạo sự đơn giản nhưng chắc chắn, tiện lợi và sang trọng Có nhiều phân loại để ban lựa chọn trong link Tổng hợp này. (Video mô tả là mã Ms585) Đặc điểm từng phân loại: Ms592: Vở A5 caro nét đứt ô 6x6mm, 120 tr",
    charac1: "- Kết cấu lò xo kép, bìa trong suốt 2 mặt",
    charac2: "- Định lượng: 100g/m2",
    charac3: "- Độ trắng: 76% ISO",
    charac4:
      "- Ruột vở được in offset sắc nét trên giấy có độ dày cao (100g/m2), độ trắng kem tự nhiên (76%ISO) có thể viết, vẽ với tất cả các loại mực, màu gốc nước không bị nhòe, lem, không gây mỏi mắt khi đọc, viết.",
  },
  {
    id: 4,
    name: "Vở Caro 10x10 mm may dán gáy luyện viết chữ Trung/Hàn",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240321_fw7vQcK0wW.jpeg",
    price: "17,000",
    status: "Còn hàng",
    describe:
      "ĐẶC ĐIỂM SỔ STUDY PLANER: - Kết cấu lò xo kép ánh ngọc với bìa được thiết kế hiện đại, bồi dày (1200g/m2) tạo sự sang trọng, luôn mới; - Ruột sổ được in offset rõ ràng, sắc nét, bố cục hợp lý trên giấy chống lem với định lượng 120g/m2, chống lem nhòe hiệu quả.",
    charac1:
      "- Vở có kết cấu may dán gáy đảm bảo độ bền chắc khi sử dụng; Bìa vở in màu pastel và dán gáy cùng tông tạo sự tươi mát sang trọng;",
    charac2:
      "- Ruột vở được thiết kế ô caro (10x10)mm, in offset màu xanh nhạt, tạo sự thông thoáng, phù hợp để luyện chữ tượng hình Trung, Nhật, Hàn;",
    charac3:
      "- Giấy định lượng cao (100 g/m²), độ trắng kem tự nhiên không lem nhoè với các loại mực, màu gốc nước và các loại ngòi bút chuyên dụng.",
    charac4: "- Số trang: 160 trang",
  },
  {
    id: 5,
    name: "Tập sổ tay note B5 30 tờ S42 màu retro S42",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240311_mH5HFkU8RZ.png",
    price: "19,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 6,
    name: "Vở kẻ ngang đóng gáy A5 256 trang No Bad Days",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240405_43CIN1EO7e.jpeg",
    price: "41,000",
    status: "Còn hàng",
    describe:
      "Vở kẻ ngang No Bad Day được thiết kế phong cách cá tính trẻ trung, dòng kẻ được thiết kế nét đứt kèm khoảng cách dòng kẻ 8cm giúp bạn viết chữ thông thoáng và dễ nhìn hơn. Bìa vở được bồi giấy vuông vắn và được cán đẹp mắt.",
    charac1: "- Kích thước: 25,5x18cm Size B5 ",
    charac2:
      "- Giấy kẻ ngang, khoảng cách dòng 8cm giúp viết thoáng rộng hơn  ",
    charac3: "- Định lượng 60 g/m2",
    charac4: "- Độ trắng 84 %ISO ",
  },
  {
    id: 7,
    name: "Vở kẻ ngang chấm may dán gáy B5 200 trang",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_LWIh2bPgJK.jpeg",
    price: "25,000",
    status: "Còn hàng",
    describe:
      "Ruột vở định lượng dày vừa phải với độ trắng cao nhưng không phản xạ ánh sáng, được in offset kẻ ngang với các chỉ thị toạ độ dọc ngang trên trang vở, dễ dàng xác định toạ độ dựng hình, tạo bảng, vẽ đồ thị; chất giấy gia keo không lem nhoè với hầu hết các loại mực, màu gốc nước. Kết cấu may dán gáy bền chắc không bong bìa, giấy khi sử dụng. Bìa thiết kế đơn giản với gam màu pastel được cán màng mờ, bảo vệ tốt bìa vở",
    charac1: "- Định lượng 70 g/m²",
    charac2: "- Độ trắng 92% ISO ",
    charac3: "- Số trang 200 trang",
    charac4: "- Kích thước (175 x 250) mm ",
  },
  {
    id: 8,
    name: "Vở kẻ ngang chấm may dán gáy B5 120 trang",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_PVchd4Jqk7.jpeg",
    price: "16,000",
    status: "Còn hàng",
    describe:
      "Ruột vở định lượng dày vừa phải với độ trắng cao nhưng không phản xạ ánh sáng, được in offset kẻ ngang với các chỉ thị toạ độ dọc ngang trên trang vở, dễ dàng xác định toạ độ dựng hình, tạo bảng, vẽ đồ thị; chất giấy gia keo không lem nhoè với hầu hết các loại mực, màu gốc nước. Kết cấu may dán gáy bền chắc không bong bìa, giấy khi sử dụng. Bìa thiết kế đơn giản với gam màu pastel được cán màng mờ, bảo vệ tốt bìa vở.",
    charac1: "- Định lượng 70 g/m²",
    charac2: "- Độ trắng 92% ISO ",
    charac3: "- Số trang 120 trang.",
    charac4: "- Kích thước (175 x 250) mm ",
  },
  {
    id: 9,
    name: "Vở kẻ ngang nét đứt may dán gáy B5 80 trang",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_LLtt4hr5Pw.jpeg",
    price: "12,000",
    status: "Còn hàng",
    describe:
      "Ruột vở định lượng dày vừa phải với độ trắng cao nhưng không phản xạ ánh sáng, được in offset kẻ ngang với các chỉ thị toạ độ dọc ngang trên trang vở, dễ dàng xác định toạ độ dựng hình, tạo bảng, vẽ đồ thị; chất giấy gia keo không lem nhoè với hầu hết các loại mực, màu gốc nước. Kết cấu may dán gáy bền chắc không bong bìa, giấy khi sử dụng. Bìa thiết kế đơn giản với gam màu pastel được cán màng mờ, bảo vệ tốt bìa vở.",
    charac1: "- Định lượng 70 g/m²",
    charac2: "- Độ trắng 92% ISO ",
    charac3: "- Số trang 80 trang",
    charac4: "- Kích thước (175 x 250) mm ",
  },
  {
    id: 10,
    name: "Vở Campus KN Muted Color 80 trang",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_DzUlyipuuJ.jpeg",
    price: "12,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 11,
    name: "Vở KN nét đứt may dán gáy B5 200 trang",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240424_taOjssnBzy.jpeg",
    price: "25,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 12,
    name: "Vở kẻ ngang đóng gáy A5 256 trang No Bad Days",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240405_43CIN1EO7e.jpeg",
    price: "41,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 13,
    name: "Vở kẻ ngang nét đứt may dán gáy B5 120 trang",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240314_8rZeI21BjG.jpeg",
    price: "16,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 14,
    name: "Vở KN Four Season 2 120 trang",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_dTHTWGCIgQ.jpeg",
    price: "15,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 15,
    name: "Vở kẻ ngang đóng gáy A5 256 trang No Bad Days",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240405_43CIN1EO7e.jpeg",
    price: "41,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 16,
    name: "Vở Dash Line lò xo kép bìa nhựa B5 120 trang",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240424_DkfC0x3cDk.jpeg",
    price: "26,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 17,
    name: "Sổ vẽ phác thảo giấy trơn Sketch Book A4 50 tờ",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_gKs2YKQWjS.jpeg",
    price: "50,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },

  {
    id: 18,
    name: "Vở vẽ lò xo xé A3 + 20 tờ",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_Ic96HX9ZdP.jpeg",
    price: "32,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 19,
    name: "Vở vẽ lò xo xé A4 + 30 tờ",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_BFaDUsfNJG.jpeg",
    price: "20,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 20,
    name: "Tập 50 tờ giấy vẽ phấn tiên HC4",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220726_7QFXDAxrO2KeU6H1qoPhbeHC.jpg",
    price: "67,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 21,
    name: "Giấy vẽ A3 - 20 tờ/tập",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220314_jS24kcgYXMCBMPP3WovegDr7.jpeg",
    price: "15,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 22,
    name: "Giấy vẽ A4 20 tờ/tập",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220314_TVla9qUxINB9tulqXsfFaO0d.jpeg",
    price: "9,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 23,
    name: "Vở vẽ ký họa lò xo xé B5",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20210621_g0qwWrYPnAfzn8Of12HCdRC3.jpg",
    price: "17,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 24,
    name: "Giấy vẽ A4 + cao cấp 20 tờ",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20210621_Kf65QUorCJvR63jw7kIp8cn6.jpg",
    price: "72,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },

  {
    id: 25,
    name: "Sổ tay A7 96 trang bìa cứng S35",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_IpA1dKDbB8.jpeg",
    price: "19,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 26,
    name: "60 thẻ flashcard vuông hoạt hình NO15",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20210930_p3OiWxHXSIshIX0ct5syLK9N.jpg",
    price: "12,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 27,
    name: "Tập thẻ Index Card A7-móc treo",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20210621_l33CGQNgPOEq2eNMXDNROXrD.jpg",
    price: "10,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 28,
    name: "Tập 30 tờ B5 2 cột viết công thức, ghi chú",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240410_ku6TWpC4rs.png",
    price: "20,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 29,
    name: "Tập 30 tờ giấy B5 học bài ghi chú thời tiết",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240502_mhSEjS3NIt.jpeg",
    price: "24,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 30,
    name: "Tập giấy B5 30 tờ caro/kẻ ngang bầu trời",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240410_AzN2ToUZLD.png",
    price: "24,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 31,
    name: "Sổ lò xo học từ vựng Word List B5 120 trang",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240314_cAWxvMhQNJ.jpeg",
    price: "35,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 32,
    name: "400 tờ note NO37C-có dính",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20230810_288gylvXyg.png",
    price: "29,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 33,
    name: "400 tờ note NO37B-mỏng hơn",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20231129_A7Pj75LStp.jpeg",
    price: "28,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },

  {
    id: 34,
    name: "Tập giấy not học từ vựng, lập kế hoạch B5",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_hZIuK34hLM.jpeg",
    price: "28,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 35,
    name: "Giấy ghi chú trong suốt NO25",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20230620_iYqR57YC6g.jpeg",
    price: "9,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 36,
    name: "Giấy học từ vựng ghi chú, ôn tập",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20230620_iYqR57YC6g.jpeg",
    price: "25,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 37,
    name: "Tập note kế hoạch thời khóa biểu tuần, tháng",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20230531_taO2b3tAEs.png",
    price: "34,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 38,
    name: "Flashcard ghi chú tranh sơn dầu",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_m0Oi3opzcO.jpeg",
    price: "9,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 39,
    name: "Giấy ghi chú trơn gam Pastel NO36",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_K4fv4k3iTK.jpeg",
    price: "7,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 40,
    name: "File bìa còng 2 đầu 10 chấu B5 Lite Binder",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240321_PnMEv0H7iM.jpeg",
    price: "16,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 41,
    name: "Sổ còng nhựa 2 đầu Panda S41",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240405_Rumvr0MMlZ.jpeg",
    price: "35,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 42,
    name: "Sổ tay kẹp còng nhựa bìa PP ombre S40",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240301_g9tc7K7T5z.png",
    price: "18,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 43,
    name: "Sổ tay A7 kẹp còng nhựa Movie Disney S37",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_2D8LvssIOz.jpeg",
    price: "16,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 44,
    name: "Sổ còng nhựa 2 đầu Mickey S36",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240125_AoKxEHGHRr.png",
    price: "30,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 44,
    name: "Sổ còng bìa vải khuy bấm vintage S30",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240314_47CGaydKnT.jpeg",
    price: "85,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 45,
    name: "Sổ còng học ghi nhớ từ mới B5 S28",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_TwBvgYI5XS.jpeg",
    price: "51,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 46,
    name: "Ruột bút mực đen B88R",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_G9iZyT7wlM.jpeg",
    price: "6,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 47,
    name: "Sổ còng 2 đầu B5 bìa trong suốt Never Give Up",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_pOY5JYeChS.jpeg",
    price: "49,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 48,
    name: "Ruột sổ kẹp còng caro 6x6 mm B5",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_8YxaCTsL5F.jpeg",
    price: "30,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 49,
    name: "Ruột sổ kẹp còng 5x5 mm B5",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_Fnm3ujv5o3.jpeg",
    price: "26,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 50,
    name: "Sổ còng PAstel B5 mi giấy caro + kẻ ngang",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_1rvrsjrLqK.jpeg",
    price: "98,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 51,
    name: "Tập 4 ly ngang khổ 156x205 mm 96 trang",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240408_ARPFzKeZdi.jpeg",
    price: "12,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 52,
    name: "Sổ 4 ly may dán gáy 1st school A4 200 trang",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240301_kyNxyVueIc.jpeg",
    price: "45,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 53,
    name: "Vở 4 ly 2.5x2.5 80 trang",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220517_keLkuxskCwg3wZb7eKfGVAjv.jpg",
    price: "10,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 54,
    name: "Vở 5 ô ly 2.5x2.5 80 trang",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220517_c1dSyV9JkT8TqdwMBQ0IR4Lw.jpg",
    price: "10,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 55,
    name: "Vở 5 ô ly 2.5x2.5 200 trang",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220517_YeRUBBzG9ykhMIlvwOMZ1P0w.jpg",
    price: "24,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 56,
    name: "Vở 4 ô ly 80 trang đủ may dán gáy IK",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20211118_bjBu0S52D5MqTU4YD7I8bW1E.jpg",
    price: "14,500",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 57,
    name: "Vở 4 ô ly 48 trang school Mi Mi",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20211118_EBdFXsiyLXVrnlqYsBWadJqb.jpg",
    price: "10,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 58,
    name: "Vở 4 ô ly 48 trang đủ may dán gáy IK",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20211118_IiVSqJuMkYrjHUX91b0MYr48.jpg",
    price: "9,500",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 59,
    name: "Vở 4 ô ly 2.5x2.5 120 trang may dán gáy B5",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20211118_3Ehs5rQ6vQO97jjbe1wndWHI.jpg",
    price: "15,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 60,
    name: "Bút xóa băng kéo linh hoạt dang bấm B103",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_nco1rEyLFy.jpeg",
    price: "22,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 61,
    name: "Bút ngòi kim mực nước B49",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220705_SIxVbn1WxVglE881cpC1hoDS.jpg",
    price: "4,500",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 62,
    name: "Bút Marker kèm đi nét 2 đầu B44 Aihao 3191",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220416_7JUX6Y6r9O3w5Md1a8TNxG27.png",
    price: "6,500",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 63,
    name: "Bút xóa Thiên Long CP-05",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220311_dJWmtVCyUKVtfvcWZ9yFNoT2.jpg",
    price: "17,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 64,
    name: "Bút xóa Thiên Long CP-02",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220311_9gzbUh81vZjCx2R97oLkIfws.jpg",
    price: "22,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },

  {
    id: 65,
    name: "Bộ 2 bút xóa kéo mini B26",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20210908_ROF5MIbmMxz3pkHV3HLtVC3L.jpg",
    price: "16,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 66,
    name: "Combo bút Baoke + hộp mực B16",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20210709_VpJserhpU7rOSZcdwtddyVnf.jpg",
    price: "22,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 67,
    name: "Bút viết calligraphy Bao ke B15",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20210709_CYXrYVmCE6grq5WT37aiAeRD.jpg",
    price: "18,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 68,
    name: "Bút sơn acrylic STA1000 B13",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20210628_rO9dPaZq9vugLtse04nRGDAB.jpg",
    price: "19,900",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 69,
    name: "Bút xóa kéo 2 đầu chân mèo",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20210621_aj6SGjhlJYKp0LLueVfAhjJB.jpg",
    price: "29,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 70,
    name: "Vở Dash Line lò xo kép bìa nhựa B5 200 trang",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20210621_26jBuur5EDmGwYhGI7ZbztUK.jpg",
    price: "93,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 71,
    name: "Bộ 24 bút đầu 2 brush + fine B07",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20210621_fKpisG4ViilwBxTxrz0yfQWo.jpg",
    price: "130,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 72,
    name: "Bộ 12 bút chì màu meta llic Brutfuner B121",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240328_ENiiWPxKI2.png",
    price: "75,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 73,
    name: "Bút chì bấm họa tiết ngòi 0.5mm B83",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_gKBuDqGvpU.jpeg",
    price: "7,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 74,
    name: "Bút chì Deli 2B gỗ B91",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_xrInolP9EP.jpeg",
    price: "5,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 75,
    name: "Bút chì HB hình hoa patel",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_5KRpkX6AVa.jpeg",
    price: "4,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 76,
    name: "Bút chì 2B ngòi vuông kèm hộp chì lõi B107",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_Qsmcn1AjLX.jpeg",
    price: "19,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 77,
    name: "Bút chì khúc quả Đào B100",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_wy5im8B2vB.jpeg",
    price: "6,500",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 78,
    name: "Bút chì Deli 2B gỗ B91-Xanh",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240613_IIutI9IKm3.png",
    price: "5,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 79,
    name: "Bút lông Colokit Thiên Long 20 màu rửa được",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_ZIpDMJ81oj.jpeg",
    price: "68,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 80,
    name: "Bút chì gỗ HB thân màu pastel Deli B75",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_cZ7LYmaZjq.jpeg",
    price: "5,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 81,
    name: "Bút chì gỗ HB thân đen Deli B77",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_xrInolP9EP.jpeg",
    price: "5,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 82,
    name: "CB 10 bút chì bấm 0.5 + ruột + tẩy",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220913_ipGfGovXz5nD66x7NADwd0n1.jpg",
    price: "10,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 83,
    name: "Bút chì vĩnh cửu B52",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220726_dohDtrMkhBDZnWppFJxxChL9.jpg",
    price: "12,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 84,
    name: "Bút highlight màu nhũ ánh kim khổ lớn <HL18></HL18>",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240427_nLKZtLoTrf.jpeg",
    price: "16,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 85,
    name: "Bút highlight thân trong HL14",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_7sm4msEz63.jpeg",
    price: "9,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 86,
    name: "Bộ 5 bút đánh dấu có nhũ ánh kim Shiny",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_FOhlwcMvsT.jpeg",
    price: "38,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 87,
    name: "Bộ 4 bút đánh dấu 2 đầu Good luck HL12",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_sJ32ZQry4u.jpeg",
    price: "31,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 89,
    name: "Set 6 bút highlight 2 đầu light color HI06",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240402_1PdXfZlPJO.png",
    price: "38,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 90,
    name: "Set 6 bút highlight 2 đầu light color HI06",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240402_05cJd8EPDJ.png",
    price: "38,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 91,
    name: "Bút highlight ngòi lăn kẻ đường họa tiết HI11",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_HyxgrCPnVs.jpeg",
    price: "9,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 92,
    name: "Bộ bút lông 20 màu Ret ro rửa được Fiber Pen",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_WINE3drYYT.jpeg",
    price: "68,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 93,
    name: "Bút dạ quang Thiên Long Pazto",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_qyQZUwGcmN.jpeg",
    price: "9,500",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 94,
    name: "Set 6 bút highlight dạ quang Taco Taco",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_qZq52jlc6d.jpeg",
    price: "80,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 95,
    name: "Bút gel tacotaco giảm mỏi tay mực nhanh khô",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240619_vEb0Lp99TR.jpeg",
    price: "13,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 96,
    name: "Bút gel đệm tay lớn 3 màu B131",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240520_QObhwjz4Di.png",
    price: "10,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 97,
    name: "Bút gel bấm Languo mực đen đệm tay dài",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240621_rxGg6oYQXw.jpeg",
    price: "15,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 98,
    name: "Set 6 bút highlight 2 đầu light color HI06",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240402_05cJd8EPDJ.png",
    price: "38,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 99,
    name: "Bút gel Deli lineflow nét mượt S60",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240701_QRqIu5DLR9.jpeg",
    price: "12,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 100,
    name: "Bút gel mực bấm Deli S128",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240314_0UKARBgXCj.jpeg",
    price: "9,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 101,
    name: "Bút gel Deli A575 mực đen",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240301_t7CK6nyUuz.png",
    price: "10,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 102,
    name: "Bút gel Deli nhiều màu A119",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_l4ZiX5Sc2K.jpeg",
    price: "6,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 103,
    name: "Hộp 5 bút đi nét Baoke B108",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_5fvM937SeZ.jpeg",
    price: "95,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 104,
    name: "Bút gel nét muột mực đen B105",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_XMQ8KlbTQY.jpeg",
    price: "5,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 105,
    name: "Combo 7 bút Moka bút gel, highlight nhiều loại",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240406_5svpWZYXZP.jpeg",
    price: "44,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 106,
    name: "Combo 7 bút Moka bút gel, highlight nhiều loại",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_g5gyP3XUYY.jpeg",
    price: "44,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 107,
    name: "Bút lông dầu 2 đầu Thiên Lông PM-09",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220311_bzFHV6YjootMpl7Cf95PfNWb.jpg",
    price: "9,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 108,
    name: "Bút lông dầu Thiên Long PM-04",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220311_Vks6xmb43vogWfI1szyVUSqS.jpg",
    price: "9,500",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 109,
    name: "Bút lông viết bảng Thiên Long WB-03",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220311_FpYw4haAz7IDALcfgnTWzCQ1.jpg",
    price: "8,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 110,
    name: "Bút bi ge 3 ngòi bấm màu cổ điển B106",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20231225_QlxAgsedAi.png",
    price: "19,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 111,
    name: "Bút bi đệm tay lớn chống mỏi quả đào B104",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20231114_sj0DHJXWk2.png",
    price: "9,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 112,
    name: "Bút bi đệm tay êm hình đại dương B102",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_gZMhyAI9Ni.jpeg",
    price: "15,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 113,
    name: "Bút bi mực đen Mura cài kim loại trắng B97",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_At0I6JTvim.jpeg",
    price: "14,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 114,
    name: "Ruột bút mực đỏ B88R",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20231129_JEyLDYS8lg.jpeg",
    price: "6,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 115,
    name: "Ruột bút mực xanh B88R",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20231129_jQTK8c5bbo.jpeg",
    price: "6,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 116,
    name: "Bộ 6 bút bi bấm Resun mực đen style hiện đại",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_aCaaCVddOU.jpeg",
    price: "89,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 117,
    name: "Bút bi mực gel phong cách Nhật Bản B65",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_NsZ16V1AQs.jpeg",
    price: "9,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 118,
    name: "Bút bi đệm tay lớn chống mỏi Simple life B93",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_iOatYeJpGb.jpeg",
    price: "9,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 119,
    name: "Bút bi bấm Thỏ hồng cài kim loại B90",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_JMgGDNtKeE.jpeg",
    price: "14,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 120,
    name: "Bộ 5 bút bi màu pastel B87 Rosy Posy",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_7BbokY3iks.jpeg",
    price: "68,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 121,
    name: "Bút bi Lopet cài kim loại trà xanh B86",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20240313_rSeaIdZRQe.jpeg",
    price: "14,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 122,
    name: "Bút lông màu Monami B46",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220511_fn74OwvmFAmSZ6vU9mGDgqwI.jpg",
    price: "7,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 123,
    name: "Bút sáp bộ 10 màu Thiên Long Colokit Doraemon",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220311_QWO26cSiG3ZYipj9tY40tGSg.jpg",
    price: "16,500",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 124,
    name: "Bút sáp bộ 16 màu Thiên Long Colokit Doraemon",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220311_2Q1LfvLNj2yDxAQJqEgBiIP8.jpg",
    price: "23,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 125,
    name: "Màu nước bộ 8 màu kèm cọ tô Thiên Long",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220311_5eGqw84HHk1PddAI9EjQh2ar.jpg",
    price: "22,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 126,
    name: "Bút sáp tô màu 24 màu Thiên Long",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220311_Z5f5Jzhalzd96TFfQBC3ICZ1.jpg",
    price: "31,000",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
  {
    id: 127,
    name: "Sáp 12 màu Thiên Long Colokit CR-C016",
    src: "https://pos.nvncdn.com/7a6d8f-102734/ps/20220311_WGcjLiebLThfswCNFEv8FojA.jpg",
    price: "8,800",
    status: "Còn hàng",
    describe:
      "Tập giấy note B5 30 tờ S42 màu retro S42 là sản phẩm tiện lợi giúp bạn ghi chú những điều quan trọng trong quá trình học tập và làm việc. Với thiết kế ghi chú caro, bạn có thể dễ dàng viết, vẽ hoặc tóm tắt nội dung một cách rõ ràng và hợp lý. Sản phẩm này không chỉ là vật dụng hỗ trợ công việc hiệu quả cho các nhân viên văn phòng hay sinh viên năng động trong quá trình học tập, nó còn được thiết kế theo phong cách Retro thu hút người tiêu dùng yêu thích vintage.",
    charac1: "- Kích thước B5",
    charac2: "- Số lượng 60 trang (30 tờ) ",
    charac3:
      "- Định lượng cao: Với định lượng 80gsm, sản phẩm có độ bền cao và không bị rách rách khi gấp hay xé.",
    charac4:
      "- Tạo thành sổ: Tập giấy note màu retro có thể được ghim lại để tạo thành các cuốn sổ bất kì theo ý muốn của bạn. Định lượng 100GSM phù hợp dùng bút bi, bút gel ",
  },
];
