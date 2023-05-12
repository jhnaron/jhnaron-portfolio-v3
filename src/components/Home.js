import Container from 'react-bootstrap/Container';
import Introduction from '../components/introduction-section/Introduction';
import Happenings from '../components/happenings-section/Happenings';

function Home() {
  return (
      <article className='article-container'>
        <section className='section-introduction'> <Introduction />
        </section>
        <section className='section-happenings'> <Happenings />
        </section>
      </article>
  );
}

export default Home;