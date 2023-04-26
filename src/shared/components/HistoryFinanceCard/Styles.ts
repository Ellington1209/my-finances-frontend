import { SxProps } from '@mui/system';


interface IstylesProps {
    CardColor: string;
    TagColor: string;
}

export const Styles = ({
    CardColor,
    TagColor,
}: IstylesProps): Record<string, SxProps> => {
    return {
        paperHistory: {
    
            backgroundColor: CardColor,
            cursor: 'pointer',
            transition: 'all .3s',
            '&:hover': {
                opacity: 0.7,
                transform: 'translateX(10px)',
            },
        },
        BoxHistory: {
            backgroundColor: TagColor,
        },
    };
};
