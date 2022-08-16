const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'us-cdbr-east-05.cleardb.net',
    user : 'b58476bab4d03', //ID
    password : '6500331a@', //비밀번호
    port : '3306',
    database : 'heroku_b7ac236f22ffd05',
    dateStrings: "date" //날짜 시간 출력
  });


/////////////회원가입 테이블에서 정보 불러오기/////////////
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
function getlogin(id,callback) {
  connection.query(
    `SELECT id, pw FROM joinhilton WHERE id='${id}'`,
    (err, row, fields) => {
      if (err) throw err;
      callback(row);
    }
  );
}


/////////////공지사항 테이블에서 정보 불러오기/////////////

//리스트의 모든 정보를 불러오는 함수
function getAllNotice(callback) {
  connection.query(
    "select * from notihilton ORDER BY id DESC",
    (err, rows, fields) => {
      if (err) throw err;
      callback(rows);
    }
  );
}
//리스트 중 id값이 일치하는 row만 불러오는 함수
function insertNotice(title, content, noticeItem, callback) {
  connection.query(
    `INSERT INTO notihilton(title, content, noticeItem) VALUES
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
    `select * from notihilton WHERE ID = ${id}`,
    (err, row, fields) => {
      if (err) throw err;
      callback(row);
    }
  );
}

//리스트를 수정하고 싶을때 id값이 일치하는 부분을 수정하는 함수
function updateNoticeById(id, title, content, noticeItem, callback) {
  connection.query(
    `UPDATE notihilton SET content="${content}", title="${title}", datetime=NOW(), noticeItem="${noticeItem}" WHERE id="${id}"`,
    (err, result) => {
      if (err) throw err;
      callback();
    }
  );
}

//리스트 중 id값이 일치하는 부분을 삭제하는 함수
function deleteNoticeById(id, callback) {
  connection.query(`DELETE from notihilton WHERE id=${id}`, (err, result) => {
    if (err) throw err;
    callback();
  });
}

//리스트 중 id값이 일치하는 row만 불러오는 함수
function getpageByid(id, callback) {
  connection.query(
    `SELECT * FROM notihilton WHERE id='${id}'`,
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