import CabinTable from '../component/CabinTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import AddCabin from '../component/AddCabin';

function Cabins() {
  return (
    <section id='container'>
      <Row type='horizontal'>
        <Heading className='all-cabin_header' as='h1'>
          All cabins
        </Heading>
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </section>
  );
}

export default Cabins;
