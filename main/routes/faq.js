var express = require('express');
var nodeMailer = require('nodemailer');
var mustache = require('../common/mustache')
var router = express.Router();

/* GET login page */
router.get('/', function (req, res, next) {
	res.render('base_template', {
		title: 'FAQ',
		body: mustache.render('faq')
	})
});

router.post('/', (req, res, next) => {
    if(req.body.name === "" || req.body.question === "") {
        res.json({ message: "The name and question fields must not be empty" })
    } else {
        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                // should be replaced with real sender's account
                user: 'zachcs498@gmail.com',
                pass: 'Fakegmail1234'
            }
        });
    
        let mailOptions = {
            // should be replaced with real recipient's account
            to: 'zachdmoore@gmail.com',
            subject: "New Question From" + req.body.name,
            body: req.body.question
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
    }
    
    res.redirect('/faq')
    res.end();
	
})


module.exports = router;
