const express = require('express');
const router = express.Router();

var fakeUsers = [{
    id: 1,
    first_name: 'Seth',
    last_name: 'Childers',
    password: 'hashedPotato',
    email: 'not_telling@gmail.com'
}];


router.get('/', (req, res, next) => {
    

    return res.status(200).json(fakeUsers[0]);
});

router.post('/', (req, res, next) => {
    // save new contact
    res.status(200).json({
        message: 'contact saved',
        obj: fakeUsers[0]
    });
});


module.exports = router;