import { Box, Paper, Typography, useTheme } from "@mui/material"
import happy from '../../../image/happy.svg'



const CardMensageBox: React.FC = () => {
    const theme = useTheme();
    const secondaryColor = theme.palette.secondary.main;
    return (
        <Box component={Paper} elevation={3} height='260px' padding={2} bgcolor={secondaryColor} display='flex' flexDirection='column' justifyContent='space-between'>

            <Box>
                <Typography variant="h1" fontSize={45} >Muito bem !
                    <img src={happy} alt="" width='60px'  />
                </Typography>
            </Box>
         
            <Box>
                <Typography variant="h1" fontSize={35} >Sua carteira está positiva!</Typography>
            </Box>
            <Box>
                <Typography variant="h3">Continue assim. Considere investir o seu saldo.</Typography>
            </Box>

        </Box>
    )

}

export default CardMensageBox;