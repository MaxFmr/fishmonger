import type { NextApiRequest, NextApiResponse } from 'next';

const transferBatch = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const driver = require('bigchaindb-driver');

      const buyer = new driver.Ed25519Keypair();
      const conn = new driver.Connection('https://test.ipdb.io/api/v1/');

      const transferTransaction = async (id: string) => {
        const tx = await conn.getTransaction(id);

        const txTranfered = await driver.Transaction.makeTransferTransaction(
          [{ tx: tx, output_index: 0 }],

          [
            driver.Transaction.makeOutput(
              driver.Transaction.makeEd25519Condition(buyer.publicKey)
            ),
          ],
          { status: 'production', date: new Date() }
        );
        const txSigned = driver.Transaction.signTransaction(
          txTranfered,
          buyer.privateKey
        );
        conn.postTransactionCommit(txSigned);
        console.log(txSigned);
        res.status(200).json({ message: 'Block transfered', tx: txSigned });

        return txSigned;
      };
      await transferTransaction(req.query.id as string);

      res.end();
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
};

export default transferBatch;
