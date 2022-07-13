export const driver = require('bigchaindb-driver');

export const buyer = new driver.Ed25519Keypair();
export const conn = new driver.Connection('https://test.ipdb.io/api/v1/');

export const productionAgent = new driver.Ed25519Keypair();
