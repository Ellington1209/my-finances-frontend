import { Box,  Grid, Paper, Typography} from "@mui/material";
import { Styles } from './Styles';

interface IContentHeaderProps {
  title: string;
  linerColor: string;
  children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  linerColor,
  children
}) => {
  const classes = Styles({ linerColor });
 
 


  return (
    <Grid container>
      <Grid item xs={12} >
        <Box width="100%" component={Paper} display="flex" justifyContent="space-between">
          <Grid xs={12} padding={1}>
            <Typography sx={classes.title} variant='h1'>{title}</Typography>
          </Grid>
          <Grid xs={12} sm={4} margin={2}>
            {children}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContentHeader;
