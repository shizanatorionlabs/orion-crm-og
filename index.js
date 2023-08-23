import express from 'express'
import { getAllClients, getAllProducts, getAllPurchaseProducts, getAllPurchases, getClient, getProduct, getPurchase, getPurchasedProduct } from './schema.js'

const app = express()
const port = process.env.PORT || 3000

const apiKey = 'abcd1234$$'


app.get('/', (req, res) => {
    res.status(200).send('home')
    console.log('home')
})


// Clients Route
app.get('/clients', (req, res) => {
    if (req.query.apiKey === apiKey) {
        getAllClients()
            .then(data => res.json(data))
            .catch(err => console.error(err));
    } else {
        res.status(401).json({ message: 'Invalid API Key' })
    }
});


// Client Route
app.get('/client', (req, res) => {
    const client_id = req.query.client_id
    if (req.query.apiKey === apiKey) {
        getClient(client_id)
            .then(data => res.json(data))
            .catch(err => res.status(401).json({ message: 'Client Not Found' }));
    } else {
        res.status(401).json({ message: 'Invalid API Key' })
    }
});


// Products Route
app.get('/products', (req, res) => {
    if (req.query.apiKey === apiKey) {
        getAllProducts()
            .then(data => res.json(data))
            .catch(err => console.error(err));
    } else {
        res.status(401).json({ message: 'Invalid API Key' })
    }
});


// Product Route
app.get('/product', (req, res) => {
    const product_id = req.query.product_id
    if (req.query.apiKey === apiKey) {
        getProduct(product_id)
            .then(data => res.json(data))
            .catch(err => res.status(401).json({ message: 'Product Not Found' }));
    } else {
        res.status(401).json({ message: 'Invalid API Key' })
    }
});


// Purchased Products Route
app.get('/purchased-products', (req, res) => {
    if (req.query.apiKey === apiKey) {
        getAllPurchaseProducts()
            .then(data => res.json(data))
            .catch(err => console.error(err));
    } else {
        res.status(401).json({ message: 'Invalid API Key' })
    }
});


// Purchased Product By ID Route
app.get('/purchased-product', (req, res) => {
    const purchase_id = req.query.purchase_id
    if (req.query.apiKey === apiKey) {
        getPurchasedProduct(purchase_id)
            .then(data => res.json(data))
            .catch(err => res.status(401).json({ message: 'Product Not Found' }));
    } else {
        res.status(401).json({ message: 'Invalid API Key' })
    }
});


// Purchases Route
app.get('/purchases', (req, res) => {
    if (req.query.apiKey === apiKey) {
        getAllPurchases()
            .then(data => res.json(data))
            .catch(err => console.error(err));
    } else {
        res.status(401).json({ message: 'Invalid API Key' })
    }
});


// Purchase By ID Route
app.get('/purchase', (req, res) => {
    const purchase_id = req.query.purchase_id
    if (req.query.apiKey === apiKey) {
        getPurchase(purchase_id)
            .then(data => res.json(data))
            .catch(err => res.status(401).json({ message: 'Product Not Found' }));
    } else {
        res.status(401).json({ message: 'Invalid API Key' })
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})