import type { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';
import { Buffer } from 'buffer';
import prisma from '../../prisma/index';

interface IncomingBatch {
  lha_prix_kg: number;
  cri_code: string;
  lha_nbr_bac: number;
  pre_code: string;
  esp_nom_commun: string;
  lha_heure: string;
  lha_num_lot: string;
  lha_poids: number;
  lha_prix_lot: number;
  lha_type_bac: string;
  'nav_nom ': string;
  fra_code: string;
  cal_code: string;
  cpt_code_acheteur: string;
  esp_nom_scientifique: string;
  lha_code_transaction: string;
  nav_code_cfr: string;
  lha_date: string;
  esp_code_fao: string;
  eng_code: string;
  lha_zone_de_peche: string;
  nav_marquage_ext: string;
}

const readPersonas = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    let data = `${req.body.apiEmail}:${req.body.apiPassword}`;
    let buff = Buffer.from(data);
    let base64data = buff.toString('base64');

    //ajourd'hui
    const date = new Date();
    const nowDate = date.toISOString().split('T')[0];

    //hier
    const today = new Date();
    const yesterday = new Date(today);

    yesterday.setDate(yesterday.getDate() - 5);

    const yesterdayDate = yesterday.toISOString().split('T')[0];

    try {
      const response = await axios.get(
        `https://www.tracabapp.com/api/jsonws/abapp.ligneachat/get-lignes-achat/code-criee/-1/date-start/${yesterdayDate}/date-stop/${nowDate}/code-espece-fao/-1/code-calibre/-1/zdp/-1/code-engin-c/-1/p-francais/false`,

        {
          headers: {
            Authorization: `Basic ${base64data}`,
          },
        }
      );

      response.data.lignes.map(async (lot: IncomingBatch) => {
        const mvt = await prisma.mvtTracabapp.create({
          data: {
            id2: `${lot.lha_date}${lot.lha_heure}${lot.cri_code}${lot.lha_num_lot}`,
            date: lot.lha_date,
            heure: lot.lha_heure,
            acheteur: lot.cpt_code_acheteur,
            criee: lot.cri_code,
            numLot: lot.lha_num_lot,
            faoCodeEspece: lot.esp_code_fao,
            especeNomCommun: lot.esp_nom_commun,
            especeNomScientifique: lot.esp_nom_scientifique,
            calibre: lot.cal_code,
            codePresentation: lot.pre_code,
            codeFraicheur: lot.fra_code,
            poidsLot: lot.lha_poids,
            typeBac: lot.lha_type_bac,
            nombreBacs: lot.lha_nbr_bac,
            prixKg: lot.lha_prix_kg,
            codeTransaction: lot.lha_code_transaction,
            montantLot: lot.lha_prix_lot,
            codeEngin: lot.eng_code,
            zonePeche: lot.lha_zone_de_peche,
            codeCfrNavire: lot.nav_code_cfr,
            marquageExtNavire: lot.nav_marquage_ext,
            nomNavire: lot['nav_nom '],
          },
        });
      });

      res.status(200).json(response.data);
      res.end();
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
};

export default readPersonas;
