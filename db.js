const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root', //ID
    password : '1234', //비밀번호
    port : '3306',
    database : 'hilton',
    dateStrings: "date" //날짜 시간 출력
  });

  function getAllinfo(callback) {
    connection.query('select * from joinhilton order by id DESC', 
    (err, rows, fields) =>{
        if(err) throw err;
        callback(rows);
    })
}


function insertJoinInfo(id, pw, emailID, emailAdress, EnameF, EnameL, Kname, birthYear, birthMonth, birthDay, gender, phone, callback){
    connection.query(`INSERT INTO joinhilton(id, pw, emailID, emailAdress, EnameF, EnameL, Kname, birthYear, birthMonth, birthDay, gender, phone) VALUES
    ('${id}','${pw}','${emailID}', '${emailAdress}','${EnameF}','${EnameL}','${Kname}','${birthYear}','${birthMonth}','${birthDay}','${gender}','${phone}')`,(err, result) => {
      if(err) throw err;
      callback();
    })
}

function getAllNotice(callback) {
  connection.query(
    "select * from notice ORDER BY id DESC",
    (err, rows, fields) => {
      if (err) throw err;
      callback(rows);
    }
  );
}

function insertNotice(title, content, noticeItem, callback) {
  connection.query(
    `INSERT INTO notice(title, content, noticeItem) VALUES
    ("${title}","${content}", "${noticeItem}")`,
    (err, result) => {
      if (err) throw err;
      callback();
    }
  );
}

//리스트 중 id값이 일치하는 row만 불러오는 함수
function getNoticeById(id, callback) {
  connection.query(
    `select * from notice WHERE ID = ${id}`,
    (err, row, fields) => {
      if (err) throw err;
      callback(row);
    }
  );
}

//리스트를 수정하고 싶을때 id값이 일치하는 부분을 수정하는 함수
function updateNoticeById(id, title, content, noticeItem, callback) {
  connection.query(
    `UPDATE notice SET content="${content}", title="${title}", datetime=NOW(), noticeItem="${noticeItem}" WHERE id="${id}"`,
    (err, result) => {
      if (err) throw err;
      callback();
    }
  );
}

//리스트 중 id값이 일치하는 부분을 삭제하는 함수
function deleteNoticeById(id, callback) {
  connection.query(`DELETE from notice WHERE id=${id}`, (err, result) => {
    if (err) throw err;
    callback();
  });
}

function getpageByid(id, callback) {
  connection.query(
    `SELECT * FROM notice WHERE id='${id}'`,
    (err, row, fields) => {
      if (err) throw err;
      callback(row);
    }
  );
}

function getlogin(id,callback) {
  connection.query(
    `SELECT id, pw FROM joinhilton WHERE id='${id}'`,
    (err, row, fields) => {
      if (err) throw err;
      callback(row);
    }
  );
}

module.exports = {
    getAllinfo,
    insertJoinInfo,
    getAllNotice,
    insertNotice,
    getNoticeById,
    deleteNoticeById,
    updateNoticeById,
    getpageByid,
    getlogin
  }