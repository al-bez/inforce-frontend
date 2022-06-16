import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import { MButton } from '@atoms'
import { TextBlockWithHeader, PaddingBox, GhostHeaderBox } from '@molecules'
import { SectionWithSvgAndText } from '@templates'
import { MTheme } from 'theme'
import { useNavigation } from 'hooks'
import { IProject } from 'types/project'

const useStyles = makeStyles((theme: MTheme) => ({
  sectionContainer: {
    paddingTop: theme.spacing(12),
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(8),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(6),
    },
  },
  coloredText: {
    color: theme.palette.primary.main,
  },
  mainInfoBlock: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: theme.spacing(12),
    padding: theme.spacing(0, 16),

    [theme.breakpoints.down('lg')]: {
      gridColumnGap: theme.spacing(8),
      padding: 0,
    },
    [theme.breakpoints.down('md-large')]: {
      gridColumnGap: theme.spacing(3),
    },
    [theme.breakpoints.down('sm-large')]: {
      gridTemplateColumns: '1fr',
      gridRowGap: theme.spacing(3),
    },
    [theme.breakpoints.down('xs-medium')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    '& button:first-of-type': {
      marginRight: theme.spacing(2),
    },

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      '& button:first-of-type': {
        marginRight: 0,
        marginBottom: theme.spacing(1),
      },
    },
  },
}))

interface ICasePageFirstInfoBlock {
  currentProject: IProject
}

const CasePageFirstInfoBlock = ({
  currentProject,
}: ICasePageFirstInfoBlock) => {
  const classes = useStyles()
  const { navigate } = useNavigation('consultation-form')

  return (
    <PaddingBox>
      <GhostHeaderBox />
      <Box className={classes.sectionContainer}>
        <SectionWithSvgAndText
          key={currentProject._id}
          project={currentProject}
        >
          <Box className={classes.buttonsContainer}>
            <Link to={`/results`}>
              <MButton color="primary" variant="outlined">
                Other cases
              </MButton>
            </Link>
            <MButton color="primary" variant="contained" onClick={navigate}>
              Free consultation
            </MButton>
          </Box>
        </SectionWithSvgAndText>
      </Box>
      {/* Main info block */}
      <Box className={classes.mainInfoBlock}>
        <TextBlockWithHeader header="Business needs">
          {currentProject.customer.business_needs}
        </TextBlockWithHeader>
        <TextBlockWithHeader header="Result">
          {currentProject.customer.result}
        </TextBlockWithHeader>
      </Box>
    </PaddingBox>
  )
}

export default CasePageFirstInfoBlock
