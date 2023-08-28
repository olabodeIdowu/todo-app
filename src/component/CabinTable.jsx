import Spinner from '../ui/Spinner';
import CabinRow from './CabinRow';
import { useCabins } from './useCabins';
import Table from '../ui/Table';
import Menus from '../ui/Menus';
import { useSearchParams } from 'react-router-dom';
import Empty from '../ui/Empty';
import { useState } from 'react';

function CabinTable() {
  // const [isLoading] = useState(false);
  // const [cabins] = useState([]);

  const { isLoading, error, cabins } = useCabins();
  // const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  // if (!cabins.length) return <Empty resourceName='cabins' />;

  return (
    <Menus>
      <Table columns='2.2fr 2.2fr 1.5fr 1fr 1fr 1fr'>
        <Table.Header>
          <div>Name</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={cabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
