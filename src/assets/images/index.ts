const url = process.env.REACT_APP_AWS_URL

interface ISrc {
  src: string
  src_pixel: string
}

type ToSrcSwitch<Type, G> = {
  [k in Type as string]: G
}

type TShared = 'avatar' | 'phonesPair' | 'labIconSmall' | 'chartIcon' | 'video'
type TNotFound = 'error404'
type TAboutUs = 'img1' | 'img2' | 'img3'
type TCoockieView = 'cookie'
type TMainView = 'tabletLab' | 'phoneLab' | 'DMLPost'
type TProcessView = 'writeBg'
type TServicesView =
  | 'computerIcon'
  | 'computerPages'
  | 'designIcon'
  | 'reactLogo'
  | 'computerGroup'
  | 'phoneGroup'

interface IVideos {
  intro: Pick<ISrc, 'src'>
}
interface ILinks {
  shared: ToSrcSwitch<TShared, ISrc>
  notFound: ToSrcSwitch<TNotFound, ISrc>
  aboutUs: ToSrcSwitch<TAboutUs, ISrc>
  coockieView: ToSrcSwitch<TCoockieView, ISrc>
  mainView: ToSrcSwitch<TMainView, ISrc>
  processView: ToSrcSwitch<TProcessView, ISrc>
  servicesView: ToSrcSwitch<TServicesView, ISrc>
  logos: ToSrcSwitch<TServicesView, Pick<ISrc, 'src'>>
  videos: IVideos
}

const links: ILinks = {
  shared: {
    avatar: {
      src: url + '/shared/Avatar.png',
      src_pixel: url + '/shared/Avatar-pixel.png',
    },
    phonesPair: {
      src: url + '/shared/PairOfPhones.png',
      src_pixel: url + '/shared/PairOfPhones-pixel.png',
    },
    labIconSmall: {
      src: url + '/shared/SmallLabIcon.png',
      src_pixel: url + '/shared/SmallLabIcon-pixel.png',
    },
    chartIcon: {
      src: url + '/shared/tempoContainer.png',
      src_pixel: url + '/shared/tempoContainer-pixel.png',
    },
    // upload to s3 first
    // succsessRequest: {
    //   src: url + '/shared/',
    // },
  },
  notFound: {
    error404: {
      src: url + '/404View/404.png',
      src_pixel: url + '/404View/404-pixel.png',
    },
  },
  aboutUs: {
    img1: {
      src: url + '/aboutUsView/FirstImg.png',
      src_pixel: url + '/aboutUsView/FirstImg-pixel.png',
    },
    img2: {
      src: url + '/aboutUsView/SecondImg.png',
      src_pixel: url + '/aboutUsView/SecondImg-pixel.png',
    },
    img3: {
      src: url + '/aboutUsView/ThirdImg.png',
      src_pixel: url + '/aboutUsView/ThirdImg-pixel.png',
    },
  },
  coockieView: {
    cookie: {
      src: url + '/coockieView/laptopGirl.png',
      src_pixel: url + '/coockieView/laptopGirl-pixel.png',
    },
  },
  mainView: {
    tabletLab: {
      src: url + '/mainView/InforceLab-tablet.png',
      src_pixel: url + '/mainView/InforceLab-tablet-pixel.png',
    },
    phoneLab: {
      src: url + '/mainView/InforceLab-phone.png',
      src_pixel: url + '/mainView/InforceLab-phone-pixel.png',
    },
    DMLPost: {
      src: url + '/mainView/DMLPost.png',
      src_pixel: url + '/mainView/DMLPost-pixel.png',
    },
  },
  processView: {
    writeBg: {
      src: url + '/processView/WriteBg.png',
      src_pixel: url + '/processView/WriteBg-pixel.png',
    },
  },
  servicesView: {
    computerIcon: {
      src: url + '/servicesView/ComputerIcon.png',
      src_pixel: url + '/servicesView/ComputerIcon-pixel.png',
    },
    computerPages: {
      src: url + '/servicesView/ComputerPages.png',
      src_pixel: url + '/servicesView/ComputerPages-pixel.png',
    },
    designIcon: {
      src: url + '/servicesView/DesignIcon.png',
      src_pixel: url + '/servicesView/DesignIcon-pixel.png',
    },
    reactLogo: {
      src: url + '/servicesView/ReactIcon.png',
      src_pixel: url + '/servicesView/ReactIcon-pixel.png',
    },
    computerGroup: {
      src: url + '/servicesView/ThreeComputerIcon.png',
      src_pixel: url + '/servicesView/ThreeComputerIcon-pixel.png',
    },
    phoneGroup: {
      src: url + '/servicesView/ThreePhoneIcon.png',
      src_pixel: url + '/servicesView/ThreePhoneIcon-pixel.png',
    },
  },
  logos: {
    react: {
      src: url + '/shared/logos/ReactIcon.png',
    },
    html: {
      src: url + '/shared/logos/5html.png',
    },
    css: {
      src: url + '/shared/logos/css3-logo.png',
    },
    js: {
      src: url + '/shared/logos/js.png',
    },
    ts: {
      src: url + '/shared/logos/typescript.png',
    },
    mui: {
      src: url + '/shared/logos/mui.png',
    },
    redux: {
      src: url + '/shared/logos/redux.png',
    },
    testingLibrary: {
      src: url + '/shared/logos/testinglib.png',
    },
    cypress: {
      src: url + '/shared/logos/cypress.png',
    },
  },
  videos: {
    intro: {
      src: 'https://youtu.be/ysEN5RaKOlA',
    },
  },
}

export default links
