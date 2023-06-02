import React, { useMemo, useState, useEffect } from 'react';
import { Box, Button, Grid } from '@mui/material';
import ContentHeader from '../../shared/components/ContentHeader';
import AutoComplete from '../../shared/components/AutoComplete';
import HistoryFinanceCard from '../../shared/components/HistoryFinanceCard';
import { useAppThemeContext } from '../../shared/contexts/ThemeContext';
import { DarkTheme, LightTheme } from '../../styles';

const months = [
  { value: 1, label: 'Janeiro' },
  { value: 2, label: 'Fevereiro' },
  { value: 3, label: 'Abril' },

];
const years = [
  { value: 2023, label: '2023' },
  { value: 2024, label: '2024' },


];
const Saida: React.FC = () => { 
  const { themeName } = useAppThemeContext();
  const [monthSelected, setMonthSelected] = useState<string>('');
  const [yearSelected, setYearSelected] = useState<string>('');

  return (
    <Grid container >
      <Grid item xs={12}>
        <ContentHeader title="Saída" linerColor="red">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <AutoComplete options={months} color="secondary" label="Mes" />
            </Grid>
            <Grid item xs={12} md={6}>
              <AutoComplete   options={years} color="secondary" label="Ano" />
            </Grid>
          </Grid>
        </ContentHeader>
      </Grid>
      <Box width='100%' display='flex' justifyContent='center'>
      <Box margin={2} >
          <Button
            type='button'
            variant='text'
            color='error'
            size='medium'          
          >Recorrentes
          </Button>
        </Box>
        <Box margin={2}>
          <Button
            type='button'
            variant='text'
            color='success'
            size='medium'  
          >Eventuais
          </Button>
        </Box>
      </Box>
      <HistoryFinanceCard
        cardColor={themeName === 'light' ? LightTheme.palette.secondary.main : DarkTheme.palette.secondary.main}
        amount='RS 250,00'
        subtitle='28/10/2023'
        tagColor='red'
        title='Conta de Luz'
      />

    </Grid>
  );
};

export default Saida;
