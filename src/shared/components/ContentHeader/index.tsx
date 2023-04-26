import { Box,  Grid, Paper, Typography, useMediaQuery, Theme} from "@mui/material";
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
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
 


  return (
    <Grid container>
      <Grid item xs={12}>
        <Box width="100%" component={Paper} display="flex" justifyContent="space-between">
          <Box padding={2}>
            <Typography sx={classes.title} variant={smDown ? 'h3' : 'h1'}>{title}</Typography>
          </Box>
          <Box margin={2}>
            {children}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContentHeader;
