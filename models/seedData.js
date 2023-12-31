const seedUsers = [
  {
    name: '廣志',
    email: 'user1@gmail.com',
    password: '12345678'
  },
  {
    name: '小新',
    email: 'user2@gmail.com',
    password: '12345678'
  }
]

const categories = [
  {
    name: '家居物業',
    icon: 'fa-solid fa-house'
  },
  {
    name: '交通出行',
    icon: 'fa-solid fa-van-shuttle'
  },
  {
    name: '休閒娛樂',
    icon: 'fa-solid fa-face-grin-beam'
  },
  {
    name: '餐飲食品',
    icon: 'fa-solid fa-utensils'
  },
  {
    name: '其他',
    icon: 'fa-solid fa-pen'
  }
]

const seedRecords = [
  {
    name: '午餐',
    date: '2019-04-23',
    amount: 60,
    categoryName: '餐飲食品'
  },
  {
    name: '晚餐',
    date: '2019-04-23',
    amount: 60,
    categoryName: '餐飲食品'
  },
  {
    name: '捷運',
    date: '2019-04-23',
    amount: 120,
    categoryName: '交通出行'
  },
  {
    name: '電影：驚奇隊長',
    date: '2019-04-23',
    amount: 220,
    categoryName: '休閒娛樂'
  },
  {
    name: '租金',
    date: '2015-04-01',
    amount: 25000,
    categoryName: '家居物業'
  }
]

module.exports = { seedUsers, categories, seedRecords }
