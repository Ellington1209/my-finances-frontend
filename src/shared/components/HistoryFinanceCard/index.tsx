import { Paper, Box, Typography } from '@mui/material';
import { Styles } from './Styles';

interface IHistoryFinanceCardProps {
  cardColor: string;
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
  cardColor,
  tagColor,
  title,
  subtitle,
  amount,
}) => {
    const classes = Styles({ CardColor: cardColor, TagColor: tagColor });
    

  return (
    <Box component={Paper}display='flex' justifyContent='space-between'alignItems='center' position='relative' width='100%' margin={2} padding={2}   sx={classes.paperHistory}>
      <Box position='absolute' width='10px' height='60%' left='3px' sx={classes.BoxHistory} />
      <Box display='flex' flexDirection='column' justifyContent='space-between' marginLeft={2} >
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </Box>
      <Typography variant="h3" sx={{fontSize:'22px'}}>{amount}</Typography>
    </Box>
  );
};

export default HistoryFinanceCard;
