import { ReactNode } from 'react';
import { useState } from "react";
import { Icon, IconButton, Theme, Typography, useMediaQuery, useTheme, AppBar, Toolbar, Tooltip, Avatar, Menu, MenuItem, Button, Switch } from '@mui/material';
import { Box } from '@mui/system';

import { useAppThemeContext, useDrawerContext } from '../contexts';


interface ILayoutBaseDePaginaProps {
    titulo: string;
    children: ReactNode;
    barraDeFerramentas?: ReactNode;
}
export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, titulo, barraDeFerramentas }) => {
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

                        <Typography
                            overflow="hidden"
                            whiteSpace="nowrap"
                            textOverflow="ellipses"
                            variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
                        >
                            {titulo}
                        </Typography>
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
                                        <Avatar
                                            alt=""
                                            src=''
                                        />
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
                                <MenuItem>
                                    <label htmlFor="foto">
                                        <input
                                            style={{ display: "none" }}
                                            id="foto"
                                            name="foto"
                                            key="foto"
                                            type="file"
                                        //onChange={handleUploadImage}
                                        />
                                        <Button
                                            color="secondary"
                                            variant="contained"
                                            component="span"
                                        >
                                            + Foto
                                        </Button>
                                    </label>
                                </MenuItem>

                                <MenuItem >
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