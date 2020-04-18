module.exports = function (app) {
    const COLUMNS = ['user_id', 'last_name', 'first_name', 'e_mail'];

    // GET all users from the table
    app.get('/api/users', (req, res) => {
        var queryString = "SELECT * FROM users";
        pool.query(queryString, function (err, rows, fields) {
            if (err) throw err;

            if (rows.length > 0) {
                res.json(
                    rows.map(entry => {
                        const e = {};
                        COLUMNS.forEach(c => {
                            e[c] = entry[c];
                        });
                        return e;
                    })
                );
            } else {
                res.json([]);
            }
        });
    });
    //GET specific user from table
    app.get('/api/users/:userId', (req, res) => {
        var queryString = "SELECT * FROM users WHERE user_id = " + string(req.params.userId);
        pool.query.(queryString, unction(err, rows, fields) {
            if (err) throw err;

            if (rows.length > 0) {
                res.json(
                    rows.map(entry => {
                        const e = {};
                        COLUMNS.forEach(c => {
                            e[c] = entry[c];
                        });
                        return e;
                    })
                );
            } else {
                res.json([]);
            }
        });
    });
}