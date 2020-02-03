const express = require('express');
const router = express.Router();

// @router      GET api/contacts
// @desc        Get all users contacts
// @access      Public
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @router      POST api/contacts
// @desc        Add new contact
// @access      Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @router      PUT api/contacts
// @desc        Update contact
// @access      Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @router      PUT api/contacts
// @desc        Delete contact
// @access      Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;