
let chai = require('../../chai')
let chaiHttp = require('chai-http');
let server = require('../../../../bin/www');
let should = chai.should();

chai.use(chaiHttp);

  /*
  * Test the /POST route
  */
describe('/POST faq', () => {
    it('it should send an email', (done) => {
        let email = {
            name: 'Zach Moore',
            question: 'Test Question'
        }
    chai.request(server)
        .post('/faq')
        .send(email)
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });

    it('it should throw an error when the name and question field are empty', (done) => {
        let email = {
            name: '',
            question: ''
        }

        chai.request(server)
        .post('/faq')
        .send(email)
        .end((err, res) => {
            res.body.should.have.property('message').eql('The name and question fields must not be empty');
            done();
        });
    })

});
