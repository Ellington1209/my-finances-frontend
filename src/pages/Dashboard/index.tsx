import { Box } from '@mui/material';
import React from 'react';
import ContentHeader from '../../shared/components/ContentHeader';
import AutoComplete from '../../shared/components/AutoComplete';


const options = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
];



const Dashboard: React.FC = () => {
  return (
    <Box>
      <ContentHeader title='Titulo' linerColor='red' >
        <Box display='flex '>
          <Box marginLeft={2}>
            <AutoComplete options={options} color='secondary' label='Mes' />
          </Box>
          <Box marginLeft={2}>
            <AutoComplete options={options} color='secondary' label='Ano' />
          </Box>
        </Box>
      </ContentHeader>

     
    </Box>

  );
};


export default Dashboard;