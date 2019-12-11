const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const {name, username, email, phone_number, password} = req.body;
        const db = req.app.get('db');

        const foundUser = await db.authUsers.checkForUsername(username)
        if(foundUser[0]) {
            res.status(409).json({message: 'Username taken'})
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            
            const newUser = await db.authUsers.registerUser(name, username, email, phone_number, hash);

            req.session.user = {
                userId: newUser[0].user_id,
                name: newUser[0].name,
                userName: newUser[0].username,
                email: newUser[0].email,
                phoneNumber: newUser[0].phone_number,
            };

            res.status(200).json(req.session.user)
        }
    },

    login: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        const foundUser = await db.authUsers.checkForUsername(username);
        if(!foundUser[0]) {
            res.status(403).json({message: 'Username not found'});
        } else {
            console.log(foundUser[0]);
            const isAuthenticated = bcrypt.compareSync(password, foundUser[0].password)

            if(!isAuthenticated) {
                res.status(403).json({message: 'Password is incorrect'})
            } else {
                req.session.user = {
                    userId: foundUser[0].user_id,
                    name: foundUser[0].name,
                    userName: foundUser[0].username,
                    email: foundUser[0].email,
                    phoneNumber: foundUser[0].phone_number
                }
                res.status(200).json(req.session.user);
            }
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}