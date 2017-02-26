// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});

// Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:reservations?", function(req, res) {
//   var chosen = req.params.reservations;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < reservations.length; i++) {
//       if (chosen === reservations[i].routeName) {
//         res.json(reservations[i]);
//         return;
//       }
//     }

//     res.json(false);
//   }
//   else {
//     res.json(reservations);
//   }
// });

// Create New Characters - takes in JSON input
app.get("/add-reservation", function(req, res) {
  var newReservation = req.body;

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});
