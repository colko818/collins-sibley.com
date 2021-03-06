const { MongoClient } = require("mongodb");
const Db = process.env.LOCAL_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            _db = db.db("ko-collins-sibley-com");
            
            console.log("Successfully connected to ko-collins-sibley.");
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
};