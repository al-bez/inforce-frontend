import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { MButton, MCircularProgress } from '@atoms'
import {
  PhoneInput,
  InputWithLabel,
  PaddingBox,
  TextBlockWithHeader,
  WrapperWithBorder,
} from '@molecules'
import { useTranslation } from 'react-i18next'
import { contactService, localizationService } from 'services'
import {
  IContact,
  ISnackbarNotification,
  IServerResponse,
  ILocalization,
} from 'types'
import { useActions, useLocalStorage } from 'hooks'
import { MTheme } from 'theme'
import { EMAIL_PATTERN, PHONE_PATTERN } from './utils'
import 'react-phone-input-2/lib/style.css'

// move to i18 later
enum Placeholders {
  PHONE = '+38 (096) 806 9762',
  NAME = 'John Doe',
  EMAIL = 'john.doe@gmail.com',
}

const defaultValues: IContact = {
  name: '',
  phone: '',
  email: '',
}

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginLeft: theme.spacing(8),
    alignSelf: 'stretch',
    justifyContent: 'space-between',

    [theme.breakpoints.down('lg')]: {
      marginLeft: 0,
      justifyContent: 'center',
    },
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),

    [theme.breakpoints.down('lg')]: {
      minWidth: 400,
    },

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      minWidth: 0,
    },

    '& .MuiBox-root': {
      width: '48%',

      [theme.breakpoints.down('sm')]: {
        width: '100%',
        '&:last-child': {
          marginTop: theme.spacing(2),
        },
      },
    },
  },
  btn: {
    alignSelf: 'flex-end',
    marginTop: theme.spacing(4),
    padding: theme.spacing(2, 6.625),
  },
  input: {
    display: 'block',
  },
  label: {
    display: 'block',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.spacing(2.25),
  },
}))

const FormSection = () => {
  const classes = useStyles()
  const [localizationData, setLocalizationData] =
    useLocalStorage<ILocalization>('localization')
  const { enqueueSnackbar } = useActions()
  const { t } = useTranslation()

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<IContact>({ defaultValues, mode: 'all' })

  const handleFormSubmission: SubmitHandler<IContact> = async (
    values,
    e
  ): Promise<void> => {
    e?.preventDefault()
    try {
      const { data } = await contactService.sendContact<
        IServerResponse<IContact>
      >(values)

      const notification: Omit<ISnackbarNotification, 'key'> = {
        message: `Thank you ${data.data.name}! Our company will contact you in a couple of days.`,
        variant: 'success',
      }

      enqueueSnackbar(notification)
      reset()
    } catch (err) {
      const notification: Omit<ISnackbarNotification, 'key'> = {
        message:
          'Fail to send your contact information! Please, try again later.',
        variant: 'error',
      }

      enqueueSnackbar(notification)
    }
  }

  React.useEffect(() => {
    if (!localizationData) {
      localizationService.fetchLocalizationData<ILocalization>().then(
        (res) => {
          setLocalizationData(res.data)
        },
        () => {
          return
        }
      )
    }
  }, [localizationData])

  return (
    <PaddingBox id="consultation-form">
      <WrapperWithBorder
        sx={{
          maxWidth: 1269,
        }}
      >
        <TextBlockWithHeader
          header="Let’s talk about your next big idea"
          subHeader="Got a project in mind?"
          sx={{ maxWidth: 538 }}
        >
          {t('form.desc')}
        </TextBlockWithHeader>
        <form
          className={classes.root}
          onSubmit={handleSubmit(handleFormSubmission)}
        >
          <Box className={classes.inputWrapper}>
            <Controller
              name="name"
              control={control}
              rules={{
                required: 'Enter your name',
                maxLength: { value: 50, message: 'Limit: 50' },
              }}
              render={({ field: { ref, ...rest } }) => (
                <InputWithLabel
                  labelText="Your name"
                  placeholder={Placeholders.NAME}
                  type="text"
                  errorMsg={errors?.name?.message}
                  {...rest}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              rules={{
                required: 'Enter your phone',
                pattern: {
                  value: PHONE_PATTERN,
                  message: 'Invalid phone',
                },
              }}
              render={({ field: { ref, ...rest } }) => (
                <InputWithLabel
                  labelText="Your Phone"
                  placeholder={Placeholders.PHONE}
                  errorMsg={errors?.phone?.message}
                  type="tel"
                  {...rest}
                >
                  <PhoneInput
                    country={localizationData?.country_code?.toLowerCase()}
                  />
                </InputWithLabel>
              )}
            />
          </Box>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Enter your email',
              pattern: {
                value: EMAIL_PATTERN,
                message: 'Invalid email',
              },
            }}
            render={({ field: { ref, ...rest } }) => (
              <InputWithLabel
                labelText="E-mail"
                placeholder={Placeholders.EMAIL}
                type="email"
                errorMsg={errors?.email?.message}
                {...rest}
              />
            )}
          />
          {isSubmitting ? (
            <MCircularProgress />
          ) : (
            <MButton
              type="submit"
              color="primary"
              variant="contained"
              className={classes.btn}
            >
              Free consultation
            </MButton>
          )}
        </form>
      </WrapperWithBorder>
    </PaddingBox>
  )
}

export default FormSection
