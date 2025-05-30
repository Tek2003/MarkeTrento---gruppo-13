const express = require('express');
const path = require('path');
const { tokenChecker } = require("../tokenchecker.cjs");
const router = express.Router();

router.get('/interfacciavenditore', tokenChecker('Venditore'), (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'interfacciavenditore.html'));
});

router.get('/carrello', tokenChecker('Cliente'), (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'carrello.html'));
});

router.get('/dettagliaccount', tokenChecker('Cliente'), (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'dettagliaccount.html'));
});

router.get('/addPromo', tokenChecker('Imprenditore'), (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'addPromo.html'));
});

router.get('/consegne', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'viewOrders.html'));
});

router.get('/admin', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'dettagliaccount.html'));
});

module.exports = router;