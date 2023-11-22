import React from 'react';

import ApiRefTable from './ApiRefTable';
import { CreateRoomAPI } from './data/CreateRoomData';
import { TokenGatedRoomAPI } from './data/TokenGatedRoomData';

export type IApiDataType = {
  id?: number;
  title: string;
  type: string;
  required: boolean;
  description: string;
  default?: string;
  validValues?: string;
};

interface Props {
  data: IApiDataType[];
}

const TokenGated: React.FC<Props> = ({ data = CreateRoomAPI }) => {
  const values = data.map(item => {
    return [
      item.title,
      item.description,
      item.type,
      item.required ? 'Y' : item.default ? item.default : 'N',
    ];
  });

  const tokenValues = TokenGatedRoomAPI.map(item => {
    return [
      item.title,
      item.description,
      item.type,
      item.validValues ? item.validValues : 'N/A',
    ];
  });

  return (
    <div className="overflow-x-hidden">
      <ApiRefTable
        headers={['Params', 'Definition', 'Data Type', 'Mandatory']}
        options={values}
      />

      <ApiRefTable
        headers={['Params', 'Definition', 'Data Type', 'Options']}
        options={tokenValues}
      />
    </div>
  );
};

export default TokenGated;
