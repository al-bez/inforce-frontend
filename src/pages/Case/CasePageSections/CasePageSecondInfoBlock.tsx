import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import {
  SvgContainer,
  TextBlockWithHeader,
  PaddingBox,
  PImage,
} from '@molecules'
import { MTheme } from 'theme'
import links from '../../../assets/images'

const useStyles = makeStyles((theme: MTheme) => ({
  mainInfoBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md-large')]: {
      flexDirection: 'column',
    },
  },
  caseSVGWrapper: {
    flex: 0.9,

    [theme.breakpoints.down('lg')]: {
      marginRight: theme.spacing(3),
    },
    [theme.breakpoints.down('md-large')]: {
      marginRight: 0,
      marginBottom: theme.spacing(5),
      width: '100%',
    },
  },
  infoBox: {
    maxWidth: '50%',

    [theme.breakpoints.down('lg-medium')]: {
      maxWidth: '40%',
    },

    [theme.breakpoints.down('md-large')]: {
      maxWidth: '100%',
    },
  },
}))

const CasePageSecondInfoBlock = () => {
  const classes = useStyles()
  return (
    <PaddingBox>
      <Box className={classes.mainInfoBlock}>
        <Box className={classes.caseSVGWrapper}>
          <SvgContainer>
            <PImage src={links.shared.phonesPair.src} />
          </SvgContainer>
        </Box>
        <Box className={classes.infoBox}>
          <TextBlockWithHeader header="What we do?" subHeader="Inforce">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis nisl
            mauris sit leo aenean arcu at ultrices amet. Adipiscing et
            pellentesque neque aliquam lectus iaculis amet, massa. Arcu neque
            nisl laoreet tristique ante ac. Felis, vulputate pellentesque
            volutpat id eu, turpis. Donec diam duis cursus in velit vivamus.
            Lectus sagittis eu cursus mattis sollicitudin urna. Eget tellus
            elementum risus lacus, velit eget. Lorem faucibus tincidunt lorem
            orci laoreet. Nisl semper bibendum cursus blandit ac scelerisque. Ut
            eget eu sem vel mi viverra. Donec ipsum orci volutpat, id eget nulla
            ut ut.
          </TextBlockWithHeader>
        </Box>
      </Box>
    </PaddingBox>
  )
}
export default CasePageSecondInfoBlock
