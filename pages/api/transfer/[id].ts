import type { NextApiRequest, NextApiResponse } from 'next';
import { driver, buyer, conn } from '../../../bigchain/driverInstance';

const setBatchInProduction = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === 'POST') {
    try {
      const setInProduction = async (id: string) => {
        const tx = await conn.getTransaction(id);

        const newTx = driver.Transaction.makeCreateTransaction(
          tx.asset.data,
          { status: 'production', originAssetId: tx.id },
          [
            driver.Transaction.makeOutput(
              driver.Transaction.makeEd25519Condition(buyer.publicKey)
            ),
          ],
          buyer.publicKey
        );
        const txSigned = driver.Transaction.signTransaction(
          newTx,
          buyer.privateKey
        );
        conn.postTransactionCommit(txSigned);
        res.send(txSigned);
        return txSigned;
      };

      await setInProduction(req.query.id as string);

      res.end();
    } catch (error: any) {
      res.status(400).send(error.message);
      console.log(error);
    }
  }
};

export default setBatchInProduction;
