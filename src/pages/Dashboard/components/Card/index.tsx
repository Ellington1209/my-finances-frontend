import React, {useMemo} from 'react';
import { Box, Paper, Typography   } from '@mui/material';
import CountUp from 'react-countup';

import dolarImg from '../../../../image/dolar.svg';
import arrowUpImg from '../../../../image/arrow-up.svg';
import arrowDownImg from '../../../../image/arrow-down.svg';
import { Styles } from './styles'


interface ICardProps{
    title: string;
    amount: number;
    footerlabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown' ;
    color: string;
}


const Card: React.FC<ICardProps> = ({title, amount, footerlabel, color, icon}) => {


    const iconSelected = useMemo(() => {
        switch (icon) {
            case 'dolar':
                return dolarImg;
            case 'arrowUp': 
                return arrowUpImg;
            case 'arrowDown':
                return arrowDownImg;
            default:
              return undefined;
        }
    },[icon]);


    return (
        <Box component={Paper} elevation={3} bgcolor={color} width='90%' height='150px' margin='10px 0' position='relative' overflow='hidden' >
            <Box marginLeft={2} marginTop={1}>
              <Typography variant='h3' >{title}</Typography>
            </Box>
            <Box marginLeft={3}>
                <Typography variant='h1' >
                    <CountUp
                        end={amount}
                        prefix={'R$ '}
                        separator='.'
                        decimal=','
                        decimals={2}
                    />
                </Typography>
            </Box>
            <Box  marginTop='-10px' marginRight='-30px' >
                  <img src={iconSelected} alt={title} height="110%" style={Styles().img} />
            </Box>
            <Box marginTop={6} marginLeft={2}>
                <Typography position='absolute' variant='subtitle1' >{footerlabel}</Typography>
            </Box>
        </Box>
    );
}

export default Card;
