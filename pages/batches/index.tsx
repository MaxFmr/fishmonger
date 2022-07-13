import { useState } from 'react';
import axios from 'axios';
import { Block } from '../../custom_types/bigChainContent';
import styles from './styles.module.css';
const Batches = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState([]);

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_SERVER + '/api/create',
        {
          apiEmail: email,
          apiPassword: password,
        }
      );
      setResponse(response.data);
      console.log(response.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className={styles.emailPw}>
        <h1>Lots du jour</h1>
        <div className={styles.inputs}>
          <input
            className={styles.input}
            type='email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className={styles.input}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type='password'
          />
        </div>

        <button className={styles.subBtn} onClick={() => onSubmit()}>
          Memorisez vos lots sur la Blockchain
        </button>
      </div>
      <div className={styles.batchList}>
        {response.length
          ? response.map((p: Block) => {
              return (
                <button className={styles.btn}>
                  <div className={styles.batchCard}>
                    <p>Id du Block : {p.id}</p>

                    <div>{p.asset.data.lha_date}</div>
                    <img
                      className={styles.img}
                      src={`https://Tracemaker.fr/Images/${p.asset.data.esp_code_fao}.jpg`}
                      alt='poisson'
                    />
                    <h4>{p.asset.data.esp_nom_commun}</h4>
                    <div>{p.asset.data.cri_code}</div>
                    <div>{p.asset.data.lha_num_lot}</div>
                    <div className='prix-moyen'>
                      {p.asset.data.lha_prix_lot} €
                    </div>
                    <div>{p.asset.data.lha_poids} kg</div>
                    <div>{p.asset.data.lha_prix_kg} €/kg</div>
                    <div>
                      {p.asset.data.nav_code_cfr[0] === 'F' &&
                        p.asset.data.nav_code_cfr[1] === 'R' &&
                        p.asset.data.fra_code !== 'B' && (
                          <img
                            className={styles.img}
                            src='https://beganton-static-files-prod.s3.amazonaws.com/fichier_joint/180306092733-pavillon-france-2x.png'
                            alt=''
                          />
                        )}
                    </div>

                    <div className='caliber'>
                      Calibre : {p.asset.data.cal_code}
                    </div>
                  </div>
                </button>
              );
            })
          : ''}
      </div>
    </div>
  );
};
export default Batches;
