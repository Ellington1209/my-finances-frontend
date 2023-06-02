interface ItitleProps {
  linerColor: string;
}

export const Styles = ({ linerColor }: ItitleProps) => {
  return {
    title: {
      position: "relative",
      "&::after": {
        content: "''",
        display: "block",
        width: "65px",
        borderBottom: `10px solid ${linerColor}`,
        position: "absolute",
        bottom: "-10px",
        left: "3%",
        transform: "translateX(-50%)",
        '@media (max-width: 600px)': { // Estilos para telas xs
          left: '18%',
        },
      },
    },
  };
};