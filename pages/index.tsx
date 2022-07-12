import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <h1>
        Votre Appli d'animation commerciale pour la traçabilité des produits de
        la mer.
      </h1>
      <button
        onClick={() => {
          router.push('/batches');
        }}>
        Consulter les Achats
      </button>

      <footer>
        <span>Developped by KERLIDOU Family. </span>
      </footer>
    </>
  );
};

export default Home;
