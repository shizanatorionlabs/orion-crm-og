// const { Pool } = require('pg');
import pg from 'pg';
const { Pool } = pg;
// import { Pool } from 'pg';


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'orioncrmdb',
    password: 'OrionLabs666999$$',
    port: 5432
})


// Test the connection
export const testConnection = () => {
    pool.query('SELECT NOW()', (err, res) => {
        if (err) {
            console.error('Error Fetching Clients', err)
        } else {
            console.log('Connected to PostgreSQL at:', res.rows[0].now)
        }
    })
}


// Get All Clients
export const getAllClients = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM CLIENTS', (err, res) => {
            if (err) {
                console.error('Error Fetching Clients', err);
                reject(err);
            } else {
                resolve(res.rows);
            }
        });
    });
}


// Get Client By ID
export const getClient = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM CLIENTS WHERE client_id = ${id}`, (err, res) => {
            if (err) {
                console.error('Error Fetching Clients', err);
                reject(err);
            } else {
                if (res.rows.length === 0) {
                    console.error(`Client With ID ${id} Not Found`);
                    reject(new Error(`Client with ID ${id} Not Found`));
                } else {
                    console.log(`Client ${id}:`, res.rows);
                    resolve(res.rows[0]);
                }
            }
        });
    });
};


// Get All Products
export const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM PRODUCTS', (err, res) => {
            if (err) {
                console.error('Error Fetching Products', err)
                reject(err)
            } else {
                console.log('Products:', res.rows)
                resolve(res.rows)
            }
        })
    })
}


// Get Product By ID
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM PRODUCTS WHERE product_id = ${id}`, (err, res) => {
            if (err) {
                console.error('Error Fetching Product', err)
            } else {
                if (res.rows == 0) {
                    console.error(`Product With ID ${id} Not Found`)
                    reject(new Error(`Client with ID ${id} Not Found`))
                } else {
                    console.log(`Product ${id}:`, res.rows[0])
                    resolve(res.rows[0])
                }
            }
        })
    })
}

// Get All Purchase Products
export const getAllPurchaseProducts = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM PURCHASE_PRODUCTS', (err, res) => {
            if (err) {
                console.error('Error Fetching Purchase Products', err)
                reject(err)
            } else {
                console.log('Purchased Products:', res.rows)
                resolve(res.rows)
            }
        })
    })
}

// Get Purchased Product By ID
export const getPurchasedProduct = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM PURCHASE_PRODUCTS WHERE purchase_id  = ${id}`, (err, res) => {
            if (err) {
                console.error('Error Fetching Purchased Product', err)
                reject(err)
            } else {
                if (res.rows == 0) {
                    console.error(`Purchased Product With ID ${id} Not Found`)
                } else {
                    console.log(`Purchased Product ${id}:`, res.rows)
                    resolve(res.rows[0])
                }
            }
        })
    })
}


// Get All Purchases
export const getAllPurchases = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM PURCHASES', (err, res) => {
            if (err) {
                console.error('Error Fetching Purchases', err)
                reject(err)
            } else {
                console.log('Purchases:', res.rows)
                resolve(res.rows)
            }
        })
    })
}

// Get Purchase By ID
export const getPurchase = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM PURCHASES WHERE purchase_id  = ${id}`, (err, res) => {
            if (err) {
                console.error('Error Fetching Purchase', err)
                reject(err)
            } else {
                if (res.rows == 0) {
                    console.error(`Purchase With ID ${id} Not Found`)
                } else {
                    console.log(`Purchase ${id}:`, res.rows)
                    resolve(res.rows[0])
                }
            }
        })
    })
}