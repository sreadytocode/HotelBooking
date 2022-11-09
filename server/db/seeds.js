use hotel_booking;
db.dropDatabase();

db.bookings.insertMany(
    [
        {
            name: "Stephen Perry",
            emailAddress: "king_of_css@gmail.com",
            checked_in_status: "true"
        },
        {
            name: "Sara Qureshi",
            emailAddress: "queen_coder@hotmail.com",
            checked_in_status: "false"
        }
    ]
);