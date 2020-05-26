const admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialape-46c2a.firebaseio.com",
});

const db = admin.firestore();

module.exports = { admin, db };
