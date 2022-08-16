const express = require("express");
var expressLayouts = require("express-ejs-layouts");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const db = require('../db')
router.use(expressLayouts);

//route, routing
router.get("/", (req, res) => {
  res.render("main");
});

router.get("/intro", (req, res) => {
  res.render("intro");
});

router.get("/event", (req, res) => {
  res.render("event");
});

router.get("/event_detail_pic", (req, res) => {
  res.render("event_detail_pic");
});

router.get("/event_detail_tea_set", (req, res) => {
  res.render("event_detail_tea_set");
});

router.get("/king_guest_room", (req, res) => {
  res.render("king_guest_room");
});
router.get("/family_premium_deluxe", (req, res) => {
  res.render("family_premium_deluxe");
});
router.get("/king_deluxe_mountain", (req, res) => {
  res.render("king_deluxe_mountain");
});
router.get("/king_executive_mountain", (req, res) => {
  res.render("king_executive_mountain");
});
router.get("/king_executive_suite", (req, res) => {
  res.render("king_executive_suite");
});
router.get("/king_executive", (req, res) => {
  res.render("king_executive");
});
router.get("/king_premier_suite", (req, res) => {
  res.render("king_premier_suite");
});
router.get("/nam_duplex_suite", (req, res) => {
  res.render("nam_duplex_suite");
});
router.get("/parkhill_duplex_suite", (req, res) => {
  res.render("parkhill_duplex_suite");
});
router.get("/twin_deluxe_mountain", (req, res) => {
  res.render("twin_deluxe_mountain");
});
router.get("/twin_executive_mountain", (req, res) => {
  res.render("twin_executive_mountain");
});
router.get("/twin_executive", (req, res) => {
  res.render("twin_executive");
});
router.get("/twin_guest_room", (req, res) => {
  res.render("twin_guest_room");
});
router.get("/vista_duplex_suite", (req, res) => {
  res.render("vista_duplex_suite");
});
router.get("/location", (req, res) => {
  res.render("location");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/join", (req, res) => {
  res.render("join");
});

router.post('/hiltonjoin', 
    check('id').isLength({min: 1, max: 300}),
    function(req, res, next) {
    let errs = validationResult(req);
    console.log(errs); //테스트 필요할 때 사용
    if (errs['errors'].length > 0){ //화면에 에러 출력하기
        res.render('join',{errs:errs['errors']}); 
    } else {
        let param = JSON.parse(JSON.stringify(req.body));
        console.log(param);
        let id = param['id'];
        let pw = param['pw'];
        let emailID = param['emailID'];
        let emailAdress = param['emailAdress'];
        let EnameF = param['EnameF'];
        let EnameL = param['EnameL'];
        let Kname = param['Kname'];
        let birthYear = param['birthYear'];
        let birthMonth = param['birthMonth'];
        let birthDay = param['birthDay'];
        let gender = param['gender'];
        let phone = param['phone'];

        db.insertJoinInfo(id, pw, emailID, emailAdress, EnameF, EnameL, Kname, birthYear, birthMonth, birthDay, gender, phone,() => {
            res.redirect('/join_complete');
        });
    }
});


router.get("/join_agree", (req, res) => {
  res.render("join_agree");
});

router.get("/join_complete", (req, res) => {
  res.render("join_complete");
});

router.get("/manager", (req, res) => {
  res.render("manager");
});


router.get('/reservation3', (req, res) => {
  res.render("reservation3");
});

router.get("/reservation2", (req, res) => {
  res.render("reservation2");
});

router.get("/reservation", (req, res) => {
  res.render("reservation");
});

router.get("/room", (req, res) => {
  res.render("room");
});

router.get('/write', (req, res) => {
  res.render("write");
});

router.get('/offer', (req, res) => {
  res.render("offer");
});

router.get('/offerIn1', (req, res) => {
  res.render("offerIn1");
});

router.get('/offerIn2', (req, res) => {
  res.render("offerIn2");
});

router.get('/offerIn3', (req, res) => {
  res.render("offerIn3");
});

router.get('/offerIn4', (req, res) => {
  res.render("offerIn4");
});

router.get('/offerIn5', (req, res) => {
  res.render("offerIn5");
});

router.get('/offerIn6', (req, res) => {
  res.render("offerIn6");
});

router.get('/offerIn7', (req, res) => {
  res.render("offerIn7");
});



///////////////////////////////////////////
router.get("/notice", (req, res, next) => {
  db.getAllNotice((rows) => {
    res.render("notice", { rows: rows });
  });
});

router.get('/write', (req, res) => {
  res.render("write");
});

router.post('/hiltonWrite',
  check('title').isLength({min: 1, max: 100000}),
  function(req, res, next) {
  let errs = validationResult(req);
  console.log(errs); //테스트 필요할 때 사용
  if (errs['errors'].length > 0){ //화면에 에러 출력하기
      res.render('write',{errs:errs['errors']}); 
  } else {
      let param = JSON.parse(JSON.stringify(req.body));
      var title = param['title'];
      var content = param['content'];
      var noticeItem = param['noticeItem'];

      db.insertNotice(title,content,noticeItem,() => {
          res.redirect('/notice');
      });
  }
});

router.get("/updatenoti", (req, res) => {
  let id = req.query.id;

  db.getNoticeById(id, (row) => {
    if (typeof id === "undefined" || row.length <= 0) {
      res.status(404).json({ error: "undefined" });
    } else {
      res.render("updatenoti", { row: row[0] });
    }
  });
});

router.post('/updatenoti',[check("title").isLength({ min: 1, max: 300 })],
  (req, res) => {
    let errs = validationResult(req);
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param['id'];
    let title = param['title'];
    let content = param['content'];
    var noticeItem = param['noticeItem'];

    if (errs["errors"].length > 0) {
      db.getNoticeById(id, (row) => {
        res.render("updatenoti", { row: row[0], errs:errs["errors"] });
      });
    } else {
      db.updateNoticeById(id,title,content,noticeItem, () => {
        res.redirect("/notice");
      });
    }
  }
);

router.get("/deletenoti", (req, res) => {
  let id = req.query.id;
  db.deleteNoticeById(id, () => {
    res.redirect("/notice");
  });
});

router.get("/manager", (req, res) => {
  res.render("manager");
});

router.get('/notice_deta', function(req, res) {
  let id = req.query.id;

  db.getpageByid(id, (row)=>{
      if(typeof id === 'undefined' || row.length <= 0){
          res.status(404).json({error:'undefind memo'});
      } else {
          res.render('notice_deta',{row:row[0]});
      }
  });
});

router.post("/login", function(req, res){
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['joinid'];
  let pw = param['joinpw'];
  db.getlogin(id, (row)=>{
    if(typeof id === 'undefined' || row.length <= 0){
      res.status(404).json({error:'undefind id'});
  } else if(pw == row.pw) {
    res.redirect("/");
  }
  })
})

module.exports = router;
