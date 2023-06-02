import { Grid } from '@mui/material';
import ContentHeader from '../../shared/components/ContentHeader';
import AutoComplete from '../../shared/components/AutoComplete';
import Card from './components/Card/';
import CardMensageBox from './components';



const months = [
  { value: 1, label: 'Janeiro' },
  { value: 2, label: 'Fevereiro' },
  { value: 3, label: 'Abril' },

];
const years = [
  { value: 2023, label: '2023' },
  { value: 2024, label: '2024' },


];

const Dashboard: React.FC = () => {

  return (
    <Grid container>
      <Grid xs={12}>
        <ContentHeader title="Dashboard" linerColor="#F7931B">
          <Grid container spacing={2}>
            <Grid item xs={9} md={6}>
              <AutoComplete options={months} color="secondary" label="Mes" />
            </Grid>
            <Grid item xs={9} md={6}>
              <AutoComplete options={years} color="secondary" label="Ano" />
            </Grid>
          </Grid>
        </ContentHeader>
      </Grid>
      <Grid container display='flex' flexDirection='row' justifyContent='space-between' marginTop={2} >
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card
            title='Saldo'
            amount={500}
            color='#4E41F0'
            icon='dolar'
            footerlabel='atualizado com base nas entradas e saidas '
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card
            title='Entrada'
            amount={5000}
            color='#43861d'
            footerlabel='atualizado com base nas entradas e saidas '
            icon='arrowUp'
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Card
            title='Saida'
            amount={4500}
            color='#E44C4E'
            footerlabel='atualizado com base nas entradas e saidas '
            icon='arrowDown'
          />
        </Grid>
      </Grid>


      <Grid container display='flex' flexDirection='row' spacing={2} marginTop={2}>
        <Grid item xs={11} sm={5} >
          <CardMensageBox />
        </Grid>
        <Grid item xs={11} sm={5} >
          <CardMensageBox />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
