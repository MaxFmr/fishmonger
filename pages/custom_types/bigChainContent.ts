export interface Block {
  asset: { data: IncomingBatch };
  id: string;
  inputs: [];
  metadata: null | object;
  operation: string;
  outputs: [];
  version: string;
}

export interface IncomingBatch {
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
