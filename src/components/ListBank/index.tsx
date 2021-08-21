import { useState } from 'react';
import { useQuery } from 'react-query';

import BoxBank from 'components/BoxBank';
import Empty from 'components/shared/Empty';
import ICountry from 'interfaces/country';
import { bankApi } from 'api';

interface IProps {
  selectedCountry?: ICountry;
}

function ListBank(props: IProps) {
  const { selectedCountry } = props;

  const [idBank, setIdBank] = useState<number>();
  const [expanded, setExpanded] = useState<number | false>(false);

  const { isLoading, data } = useQuery(
    ['banks', idBank],
    () => {
      if (idBank) {
        return bankApi.getInfoBankById(idBank);
      }
      return null;
    },
    { enabled: !!idBank }
  );

  const handleChange =
    (id: number) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? id : false);
      setIdBank(id);
    };

  return (
    <>
      {selectedCountry ? (
        selectedCountry.supportedBanks?.map((statusBank) => (
          <BoxBank
            key={statusBank.id}
            statusBank={statusBank}
            handleChange={handleChange}
            expanded={expanded}
            infoBank={data}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Empty />
      )}
    </>
  );
}

export default ListBank;
