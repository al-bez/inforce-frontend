import React from 'react'
import { Collapse } from '@mui/material'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { Icon } from '@iconify/react'
import arrowDown from '@iconify-icons/eva/arrow-ios-downward-fill'
import { MCard } from '@atoms'
import { TwoLinedAvatar } from '@molecules'
import { ICardItem } from './CardsSection'
import { SunEllipseIcon } from '../../../../assets/icons'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  alignSelf: 'flex-start',
  marginTop: 10,
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

interface CardItemProps {
  item: ICardItem
}

const CardItem = ({ item }: CardItemProps) => {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <MCard>
      <TwoLinedAvatar
        primaryText={item.primaryText}
        secondaryText={
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {item.secondaryText}
          </Collapse>
        }
      >
        <SunEllipseIcon />
      </TwoLinedAvatar>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <Icon icon={arrowDown} width="24" height="24" />
      </ExpandMore>
    </MCard>
  )
}

export default CardItem
