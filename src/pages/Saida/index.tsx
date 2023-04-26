import { Grid } from '@mui/material';
import ContentHeader from '../../shared/components/ContentHeader';
import AutoComplete from '../../shared/components/AutoComplete';
import HistoryFinanceCard from '../../shared/components/HistoryFinanceCard';
import { useAppThemeContext } from '../../shared/contexts/ThemeContext';
import { DarkTheme, LightTheme } from '../../styles';

const options = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
];

const Saida: React.FC = () => {
  const { themeName } = useAppThemeContext();

  return (
    <Grid container  >
      <Grid item xs={12}>
        <ContentHeader title="Saída" linerColor="red">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <AutoComplete options={options} color="secondary" label="Mes" />
            </Grid>
            <Grid item xs={12} md={6}>
              <AutoComplete options={options} color="secondary" label="Ano" />
            </Grid>
          </Grid>
        </ContentHeader>
      </Grid>
      <HistoryFinanceCard
        cardColor={themeName === 'light' ? LightTheme.palette.secondary.main : DarkTheme.palette.secondary.main}
        amount='RS 250,00'
        subtitle='28/10/2023'
        tagColor='red'
        title='Conta de Luz'
      />
      <HistoryFinanceCard
        cardColor={themeName === 'light' ? LightTheme.palette.secondary.main : DarkTheme.palette.secondary.main}
        amount='RS 250,00'
        subtitle='28/10/2023'
        tagColor='red'
        title='Conta de Luz'
      />
      <HistoryFinanceCard
        cardColor={themeName === 'light' ? LightTheme.palette.secondary.main : DarkTheme.palette.secondary.main}
        amount='RS 250,00'
        subtitle='28/10/2023'
        tagColor='red'
        title='Conta de Luz'
      />
      <HistoryFinanceCard
        cardColor={themeName === 'light' ? LightTheme.palette.secondary.main : DarkTheme.palette.secondary.main}
        amount='RS 250,00'
        subtitle='28/10/2023'
        tagColor='red'
        title='Conta de Luz'
      />
      <HistoryFinanceCard
        cardColor={themeName === 'light' ? LightTheme.palette.secondary.main : DarkTheme.palette.secondary.main}
        amount='RS 250,00'
        subtitle='28/10/2023'
        tagColor='red'
        title='Conta de Luz'
      />
      <HistoryFinanceCard
        cardColor={themeName === 'light' ? LightTheme.palette.secondary.main : DarkTheme.palette.secondary.main}
        amount='RS 250,00'
        subtitle='28/10/2023'
        tagColor='red'
        title='Conta de Luz'
      />
      <HistoryFinanceCard
        cardColor={themeName === 'light' ? LightTheme.palette.secondary.main : DarkTheme.palette.secondary.main}
        amount='RS 250,00'
        subtitle='28/10/2023'
        tagColor='red'
        title='Conta de Luz'
      />
      <HistoryFinanceCard
        cardColor={themeName === 'light' ? LightTheme.palette.secondary.main : DarkTheme.palette.secondary.main}
        amount='RS 250,00'
        subtitle='28/10/2023'
        tagColor='red'
        title='Conta de Luz'
      />
      <HistoryFinanceCard
        cardColor={themeName === 'light' ? LightTheme.palette.secondary.main : DarkTheme.palette.secondary.main}
        amount='RS 250,00'
        subtitle='28/10/2023'
        tagColor='red'
        title='Conta de Luz'
      />
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
