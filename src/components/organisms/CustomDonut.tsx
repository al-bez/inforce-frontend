import { makeStyles } from '@mui/styles'
import { Box, Typography } from '@mui/material'
import { MTheme } from 'theme'
import { pxToRem } from 'theme/utils/formatFontSize'
import sectionImage from '../../assets/images/section.svg'
import sectionSelectedImage from '../../assets/images/sectionSelected.svg'
import { SetStateAction } from 'react'

const defaultOptions = [
  'Planning',
  'Analysis',
  'Design',
  'Implementation',
  'Testing & integration',
  'Maintenance',
]
// ------------------------------------------------------------

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    position: 'relative',
    height: 193,
    width: 193,
    borderRadius: 120,
    animation: '$spin 130s linear infinite',

    [theme.breakpoints.down('sm')]: {
      height: 144,
      width: 144,
    },

    [theme.breakpoints.down('xs-medium')]: {
      width: 128,
    },
  },
  section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundImage: `url(${sectionImage})`,
    backgroundSize: 'cover',
    width: 178,
    height: 259,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '110px 40px 40px 110px',
    zIndex: 1,

    [theme.breakpoints.down('lg-medium')]: {
      width: 148,
      height: 217,
      borderRadius: '90px 40px 40px 90px',
    },
    [theme.breakpoints.down('md-large')]: {
      width: 134,
      height: 199,
      borderRadius: '75px 25px 25px 75px',
    },
    [theme.breakpoints.down('md')]: {
      width: 127,
      height: 186,
    },
    [theme.breakpoints.down('sm-large')]: {
      width: 124,
      height: 182,
    },
    [theme.breakpoints.down('sm')]: {
      width: 105.5,
      height: 154.5,
      borderRadius: '55px 20px 20px 55px',
    },
    [theme.breakpoints.down(400)]: {
      height: 129.5,
      width: 88.5,
    },
    [theme.breakpoints.down('xs-medium')]: {
      height: 123.5,
      width: 83.5,
    },

    '&:first-child': {
      left: 191,
      top: -21,

      [theme.breakpoints.down('lg-medium')]: {
        left: 180,
        top: -8,
      },
      [theme.breakpoints.down('md-large')]: {
        left: 175,
        top: 5,
      },
      [theme.breakpoints.down('md')]: {
        left: 161,
        top: 10.5,
      },
      [theme.breakpoints.down('sm-large')]: {
        left: 154,
        top: 11,
      },
      [theme.breakpoints.down('sm')]: {
        left: 131,
        top: -1,
      },
      [theme.breakpoints.down(400)]: {
        left: 125,
        top: 11,
      },
      [theme.breakpoints.down('xs-medium')]: {
        left: 107,
        top: 13,
      },
    },
    '&:nth-child(2)': {
      left: 107,
      top: -179,
      transform: 'rotate(-60deg)',
      '& > div': {
        transform: 'rotate(60deg)',
      },
      [theme.breakpoints.down('lg-medium')]: {
        left: 106,
        top: -145,
      },
      [theme.breakpoints.down('md-large')]: {
        left: 107,
        top: -123,
      },
      [theme.breakpoints.down('md')]: {
        left: 102,
        top: -103,
      },
      [theme.breakpoints.down('sm-large')]: {
        left: 97,
        top: -96,
      },
      [theme.breakpoints.down('sm')]: {
        left: 77.5,
        top: -99.75,
      },
      [theme.breakpoints.down(400)]: {
        left: 79.5,
        top: -74.5,
      },
      [theme.breakpoints.down('xs-medium')]: {
        left: 67.5,
        top: -61.5,
      },
    },
    '&:nth-child(3)': {
      right: 87,
      top: -185,
      transform: 'rotate(-120deg)',
      '& > div': {
        transform: 'rotate(120deg)',
      },
      [theme.breakpoints.down('lg-medium')]: {
        right: 95,
        top: -151,
      },
      [theme.breakpoints.down('md-large')]: {
        right: 99,
        top: -130,
      },
      [theme.breakpoints.down('md')]: {
        right: 92,
        top: -107.5,
      },
      [theme.breakpoints.down('sm-large')]: {
        right: 94,
        top: -101,
      },
      [theme.breakpoints.down('sm')]: {
        right: 72.25,
        top: -104,
      },
      [theme.breakpoints.down(400)]: {
        right: 71.5,
        top: -77,
      },
      [theme.breakpoints.down('xs-medium')]: {
        right: 60.5,
        top: -64,
      },
    },
    '&:nth-child(4)': {
      left: -167,
      top: -32,
      transform: 'rotate(-180deg)',
      '& > div': {
        transform: 'rotate(180deg)',
      },
      [theme.breakpoints.down('lg-medium')]: {
        left: -133,
        top: -19.5,
      },
      [theme.breakpoints.down('md-large')]: {
        left: -119,
        top: -7.5,
      },
      [theme.breakpoints.down('md')]: {
        left: -95,
        top: -0.5,
      },
      [theme.breakpoints.down('sm-large')]: {
        left: -90,
        top: 1.5,
      },
      [theme.breakpoints.down('sm')]: {
        left: -92.75,
        top: -10.375,
      },
      [theme.breakpoints.down(400)]: {
        left: -64.75,
        top: 4.625,
      },
      [theme.breakpoints.down('xs-medium')]: {
        left: -59.75,
        top: 6.625,
      },
    },
    '&:nth-child(5)': {
      left: -83,
      top: 125,
      transform: 'rotate(-240deg)',
      '& > div': {
        transform: 'rotate(240deg)',
      },
      [theme.breakpoints.down('lg-medium')]: {
        left: -60,
        top: 118,
      },
      [theme.breakpoints.down('md-large')]: {
        left: -49,
        top: 124,
      },
      [theme.breakpoints.down('md')]: {
        left: -35,
        top: 114,
      },
      [theme.breakpoints.down('sm-large')]: {
        left: -33,
        top: 109,
      },
      [theme.breakpoints.down('sm')]: {
        left: -41,
        top: 88,
      },
      [theme.breakpoints.down(400)]: {
        left: -21,
        top: 91,
      },
      [theme.breakpoints.down('xs-medium')]: {
        left: -21,
        top: 81,
      },
    },
    '&:last-of-type': {
      left: 95,
      top: 130,
      transform: 'rotate(-300deg)',
      '& > div': {
        transform: 'rotate(300deg)',
      },
      [theme.breakpoints.down('lg-medium')]: {
        left: 97,
        top: 124,
      },
      [theme.breakpoints.down('md-large')]: {
        left: 98,
        top: 130,
      },
      [theme.breakpoints.down('md')]: {
        left: 93,
        top: 119,
      },
      [theme.breakpoints.down('sm-large')]: {
        left: 89.2,
        top: 114,
      },
      [theme.breakpoints.down('sm')]: {
        left: 70,
        top: 93,
      },

      [theme.breakpoints.down(400)]: {
        left: 76,
        top: 93.25,
      },
      [theme.breakpoints.down('xs-medium')]: {
        left: 62.5,
        top: 84.2,
      },
    },

    '&:hover': {
      backgroundImage: `url(${sectionSelectedImage})`,
      color: theme.palette.primary.light,
    },
  },
  subtitle: {
    ...theme.typography.body1,
    wordBreak: 'normal',
    fontWeight: theme.typography.fontWeightRegular,
    [theme.breakpoints.down('sm')]: {
      padding: '0 10% 0 0',
      whiteSpace: 'normal',
    },
  },
  number: {
    ...theme.typography.h3,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: pxToRem(18),
    },
  },
  textBlock: {
    display: 'block',
    textAlign: 'center',
    wordBreak: 'break-word',
    maxWidth: theme.spacing(14),
    animation: '$spinOpposite 130s linear infinite',

    '& .MuiTypography-root': {
      opacity: 1,
      '&:first-child': {
        fontWeight: theme.typography.fontWeightBold,
      },
      '&:last-child': {
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: 17,
        [theme.breakpoints.down('lg-medium')]: {
          fontSize: 15,
        },
        [theme.breakpoints.down('md-large')]: {
          fontSize: 14,
        },
        [theme.breakpoints.down('sm-large')]: {
          fontSize: 11.9,
        },
        [theme.breakpoints.down(400)]: {
          fontSize: 9.7,
        },
        [theme.breakpoints.down('xs-medium')]: {
          fontSize: 8.8,
        },
      },
    },
  },
  '@keyframes spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(359deg)',
    },
  },
  '@keyframes spinOpposite': {
    from: {
      transform: 'rotate(359deg)',
    },
    to: {
      transform: 'rotate(0deg)',
    },
  },
}))

interface ICustomDonut {
  options?: string[]
  setActiveImage?: React.Dispatch<SetStateAction<number>>
}

function CustomDonut({
  options = defaultOptions,
  setActiveImage,
}: ICustomDonut): JSX.Element {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      {options.map((option, idx) => (
        <Box
          key={idx}
          className={classes.section}
          onClick={
            setActiveImage
              ? () => setActiveImage(idx)
              : () => {
                  return 0
                }
          }
        >
          <Box>
            <Box className={classes.textBlock}>
              <Typography className={classes.number}>{idx + 1}</Typography>
              <Typography className={classes.subtitle}>{option}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default CustomDonut
