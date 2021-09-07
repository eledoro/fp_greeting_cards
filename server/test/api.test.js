const request = require('supertest');
// import server
const server = require('../server');



describe('API server', () => {
    let api;
    let testCard = {
        eventType: 'Birthday',
        message: 'HB to you',
        greeting:'Hi',
        background:'',
        
    };

    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(5000, () =>
            console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
        // close the server, then run done
        console.log('Close test server');
        api.close(done);
    });

    it('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });

    it('responds to get /cards with status 200', (done) => {
        request(api).get('/cards').expect(200, done);
    });
    

    it('responds to post /cards with status 201', (done) => {
        request(api)
            .post('/cards')
            .send(testCard)
            .set('Accept', /application\/json/)
            .expect(201)
            .expect({ id: 3, ...testCard }, done);
    });





})
