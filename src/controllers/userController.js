const UserModel = require('../models/userModel');

const questions = {
  // Nhóm 1: Đúng/Sai (10 câu)
  group1: [
    { id: 1, text: "Bạn có đang sống tại Việt Nam không?", type: "truefalse" },
    { id: 2, text: "Bạn đã từng thay đổi địa chỉ thường trú trong 5 năm qua?", type: "truefalse" },
    { id: 3, text: "Bạn có sử dụng mạng xã hội hàng ngày không?", type: "truefalse" },
    { id: 4, text: "Bạn đã từng đi du lịch nước ngoài chưa?", type: "truefalse" },
    { id: 5, text: "Bạn có sở thích đọc sách không?", type: "truefalse" },
    { id: 6, text: "Bạn có biết bơi không?", type: "truefalse" },
    { id: 7, text: "Bạn có nuôi thú cưng không?", type: "truefalse" },
    { id: 8, text: "Bạn có thường xuyên tập thể dục không?", type: "truefalse" },
    { id: 9, text: "Bạn đã từng tham gia khóa học trực tuyến chưa?", type: "truefalse" },
    { id: 10, text: "Bạn có thích nghe nhạc cổ điển không?", type: "truefalse" }
  ],
  
  // Nhóm 2: Chọn 1 trong 4 đáp án (10 câu)
  group2: [
    { id: 11, text: "Bạn thích mùa nào nhất trong năm?", type: "single", options: ["Xuân", "Hạ", "Thu", "Đông"] },
    { id: 12, text: "Phương tiện giao thông bạn dùng nhiều nhất là gì?", type: "single", options: ["Xe máy", "Ô tô", "Xe buýt", "Xe đạp"] },
    { id: 13, text: "Bạn thường ăn sáng bằng gì?", type: "single", options: ["Phở", "Bánh mì", "Cơm", "Không ăn sáng"] },
    { id: 14, text: "Mạng xã hội bạn dùng nhiều nhất là gì?", type: "single", options: ["Facebook", "Instagram", "TikTok", "Twitter"] },
    { id: 15, text: "Bạn thích loại nhạc nào nhất?", type: "single", options: ["Pop", "Rock", "Ballad", "Rap"] },
    { id: 16, text: "Thời gian rảnh bạn thường làm gì?", type: "single", options: ["Xem phim", "Chơi game", "Đọc sách", "Ngủ"] },
    { id: 17, text: "Bạn thích loại đồ uống nào nhất?", type: "single", options: ["Cà phê", "Trà", "Nước ngọt", "Nước lọc"] },
    { id: 18, text: "Màu sắc yêu thích của bạn là gì?", type: "single", options: ["Đỏ", "Xanh", "Vàng", "Đen"] },
    { id: 19, text: "Bạn thường đi ngủ vào lúc nào?", type: "single", options: ["Trước 10h", "10h-12h", "Sau 12h", "Không cố định"] },
    { id: 20, text: "Bạn thích xem phim thuộc thể loại nào?", type: "single", options: ["Hành động", "Tình cảm", "Hài", "Kinh dị"] }
  ],
  
  // Nhóm 3: Chọn nhiều đáp án (10 câu)
  group3: [
    { id: 21, text: "Bạn thích những môn thể thao nào?", type: "multiple", options: ["Bóng đá", "Bơi lội", "Cầu lông", "Chạy bộ"] },
    { id: 22, text: "Bạn đã từng ghé thăm những thành phố nào?", type: "multiple", options: ["Hà Nội", "TP.HCM", "Đà Nẵng", "Huế"] },
    { id: 23, text: "Bạn thường dùng những ứng dụng nào để nhắn tin?", type: "multiple", options: ["Zalo", "Messenger", "WhatsApp", "Telegram"] },
    { id: 24, text: "Bạn thích những loại trái cây nào?", type: "multiple", options: ["Táo", "Chuối", "Xoài", "Dưa hấu"] },
    { id: 25, text: "Bạn đã từng học những ngoại ngữ nào?", type: "multiple", options: ["Anh", "Pháp", "Nhật", "Hàn"] },
    { id: 26, text: "Bạn thích những hoạt động ngoài trời nào?", type: "multiple", options: ["Cắm trại", "Leo núi", "Đạp xe", "Dã ngoại"] },
    { id: 27, text: "Bạn thường mua sắm ở đâu?", type: "multiple", options: ["Siêu thị", "Chợ", "Online", "Cửa hàng tiện lợi"] },
    { id: 28, text: "Bạn thích những loại thức ăn nào?", type: "multiple", options: ["Cay", "Ngọt", "Chua", "Mặn"] },
    { id: 29, text: "Bạn thường nghe nhạc bằng thiết bị nào?", type: "multiple", options: ["Điện thoại", "Máy tính", "Loa Bluetooth", "Tai nghe"] },
    { id: 30, text: "Bạn đã từng tham gia những sự kiện nào?", type: "multiple", options: ["Hội thảo", "Triển lãm", "Hòa nhạc", "Từ thiện"] }
  ],
  
  // Nhóm 4: Tự luận (10 câu)
  group4: [
    { id: 31, text: "Bạn nghĩ điều gì quan trọng nhất trong cuộc sống?", type: "text" },
    { id: 32, text: "Hãy kể về một kỷ niệm đáng nhớ của bạn.", type: "text" },
    { id: 33, text: "Bạn muốn làm gì trong 5 năm tới?", type: "text" },
    { id: 34, text: "Món ăn yêu thích của bạn là gì và tại sao?", type: "text" },
    { id: 35, text: "Bạn thường làm gì để giảm căng thẳng?", type: "text" },
    { id: 36, text: "Hãy mô tả một ngày hoàn hảo của bạn.", type: "text" },
    { id: 37, text: "Điều gì khiến bạn tự hào nhất về bản thân?", type: "text" },
    { id: 38, text: "Bạn thích đi du lịch ở đâu và tại sao?", type: "text" },
    { id: 39, text: "Hãy kể về một người quan trọng trong cuộc đời bạn.", type: "text" },
    { id: 40, text: "Bạn nghĩ công nghệ ảnh hưởng thế nào đến cuộc sống?", type: "text" }
  ]
};

class UserController {
  static createUser(req, res) {
    const userData = req.body;
    UserModel.createUser(userData, (err, userId) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ userId, questions });
    });
  }

  static submitAnswer(req, res) {
    const { userId, questionId, answer } = req.body;
    UserModel.saveAnswer(userId, questionId, answer, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Answer saved' });
    });
  }
}

module.exports = UserController;
