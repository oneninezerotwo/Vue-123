// sql语句

var sqlMap = {

// 用户

user: {

add: "insert into useinfa(shuliang,jieshao) values(?,?)  ",//插入新数据
ser:'select * from useinfa where shuliang = ?', //查询用户数据
checkCurr:'select * from useinfa where shuliang = ?  ',
checkCurr1:'select * from useinfa where shuliang = ? and jieshao = ? ',
upd:'update xmtest set qty = ? where name = ? and goods_id = ?  ',//如果数据库已有这条数据,则只是更新

}

}

module.exports = sqlMap;
