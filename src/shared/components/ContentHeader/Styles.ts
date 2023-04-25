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
        width: "55px",
        borderBottom: `10px solid ${linerColor}`,
        position: "absolute",
        bottom: "-10px",
        left: "25%",
        transform: "translateX(-50%)",
      },
    },
  }
};