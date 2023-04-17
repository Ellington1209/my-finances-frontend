import { ReactNode, useMemo } from 'react';
import { useState } from "react";
import { Icon, IconButton, Theme, Typography, useMediaQuery, useTheme, AppBar, Toolbar, Tooltip, Avatar, Menu, MenuItem,  Switch } from '@mui/material';
import { Box } from '@mui/system';

import { useAppThemeContext, useAuthContext, useDrawerContext } from '../../contexts';
import emojis from '../../../utils/emojis';


interface IAppBarProps {

    children: ReactNode;
  
}
export const MenuAppBar: React.FC<IAppBarProps> = ({ children }) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const theme = useTheme();

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    const { toggleDrawerOpen } = useDrawerContext();
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const { toggleTheme } = useAppThemeContext();
    const { logout } = useAuthContext();
    
    
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    },[]);

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <AppBar position="static">
                <Toolbar>
                    <Box padding={1} display="flex" alignItems="center" gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 9)}>
                        {smDown && (
                            <IconButton onClick={toggleDrawerOpen}>
                                <Icon>menu</Icon>
                            </IconButton>
                        )}

                  
                        <Box display='flex' alignItems="center" marginLeft='25px'>
                            <Typography>Dia</Typography>
                            <Tooltip title="Selecionar thema" >
                                <Switch color='secondary' {...label} onClick={toggleTheme} />
                            </Tooltip>
                            <Typography>Noite</Typography>
                        </Box>
                        <Box position="absolute" right={0} bottom={0} marginBottom='8px' >

                            <Tooltip title="Configurações">
                                <Box display='flex' height='100%' alignItems='center' justifyContent='center'>

                                    <Typography >Olá!</Typography>

                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                                        <Avatar sx={{fontSize:'38px'}}>{emoji}</Avatar>                                           
                                      
                                    </IconButton>
                                </Box>
                            </Tooltip>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                              

                                <MenuItem  onClick={logout}>
                                    <Typography
                                        textAlign="center"
                                        fontSize={16}
                                        sx={{ color: "black !important" }}
                                        
                                    >
                                        Sair
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>



            <Box flex={1} overflow="auto">
                {children}
            </Box>
        </Box>
    );
};