
const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const members = require('../../Members');


router.get('/', (req, res) => {
    res.json(members);
});

// get instance of member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: ` No Member with the ID of ${req.params.id}`});
    }
});

//create member

router.post('/', (req, res) => {
    console.log(req.body);

    console.log( req.body.name, req.body.email);
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        status: "active",
        email: req.body.email
    }

    if(!newMember.email || !newMember.name){
        res.status(400).json({msg: "Please add name and email"});
    } else {
        members.push(newMember);
        res.json(members);
    }
});

// get instance of member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found) {
        const updateMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                member.name = updateMember.name ? updateMember.name : member.name;
                member.email = updateMember.email ? updateMember.email : member.email;

                res.json({msg: 'Member Updated', member});
            }
        });
    } else {
        res.status(400).json({msg: ` No Member with the ID of ${req.params.id}`});
    }
});
module.exports = router;