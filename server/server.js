const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());


const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');


MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
.then((client) => {
    const db = client.db('hotel_booking');
    const bookingCollection = db.collection('bookings');
    const bookingRouter = createRouter(bookingCollection);
    app.use('/api/bookings', bookingRouter);
})
.catch(console.error);

app.listen(9000, function () {
    console.log(`Listening on port ${ this.address().port }`)
});