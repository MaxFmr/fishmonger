import type { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';
import { IncomingBatch } from '../custom_types/bigChainContent';
import { Buffer } from 'buffer';

const setBatch = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);

  if (req.method === 'POST') {
    let data = `${req.body.apiEmail}:${req.body.apiPassword}`;
    let buff = Buffer.from(data);
    let base64data = buff.toString('base64');

    //ajourd'hui
    const date = new Date();
    const nowDate = date.toISOString().split('T')[0];

    //hier
    // const today = new Date();
    // const yesterday = new Date(today);

    // yesterday.setDate(yesterday.getDate() - 1);

    //the last minus is the number of days before today

    // const yesterdayDate = yesterday.toISOString().split('T')[0];

    try {
      const response = await axios.get(
        `https://www.tracabapp.com/api/jsonws/abapp.ligneachat/get-lignes-achat/code-criee/-1/date-start/${nowDate}/date-stop/${nowDate}/code-espece-fao/-1/code-calibre/-1/zdp/-1/code-engin-c/-1/p-francais/false`,

        {
          headers: {
            Authorization: `Basic ${base64data}`,
          },
        }
      );

      const driver = require('bigchaindb-driver');

      const buyer = new driver.Ed25519Keypair();
      const conn = new driver.Connection('https://test.ipdb.io/api/v1/');

      const createTransaction = (lot: object) => {
        const tx = driver.Transaction.makeCreateTransaction(
          lot,
          null,
          [
            driver.Transaction.makeOutput(
              driver.Transaction.makeEd25519Condition(buyer.publicKey)
            ),
          ],
          buyer.publicKey
        );
        const txSigned = driver.Transaction.signTransaction(
          tx,
          buyer.privateKey
        );
        conn.postTransactionCommit(txSigned);

        return txSigned;
      };

      const tab: IncomingBatch[] = [];
      response.data.lignes.map((lot: IncomingBatch) => {
        tab.push(createTransaction(lot));
      });

      res.status(200).json(tab);

      res.end();
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
};

export default setBatch;
