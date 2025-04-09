const UserModel = require('../models/userModel');

const questions = {
  group1: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    text: `Câu hỏi đúng/sai ${i + 1}`,
    type: 'truefalse'
  })),
  group2: Array.from({ length: 10 }, (_, i) => ({
    id: i + 11,
    text: `Câu hỏi lựa chọn ${i + 1}`,
    type: 'single',
    options: ['A', 'B', 'C', 'D']
  })),
  group3: Array.from({ length: 10 }, (_, i) => ({
    id: i + 21,
    text: `Câu hỏi đa lựa chọn ${i + 1}`,
    type: 'multiple',
    options: ['A', 'B', 'C', 'D']
  })),
  group4: Array.from({ length: 10 }, (_, i) => ({
    id: i + 31,
    text: `Câu hỏi tự luận ${i + 1}`,
    type: 'text'
  }))
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
