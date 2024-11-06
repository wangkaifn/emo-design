// Ant Design Icons (AI)
import * as AI from 'react-icons/ai'
// Bootstrap Icons (BS)
import * as BS from 'react-icons/bs'
// BoxIcons (BI)
import * as BI from 'react-icons/bi'
// Devicons (DI)
import * as DI from 'react-icons/di'
// Feather Icons (FI)
import * as FI from 'react-icons/fi'
// Font Awesome (FA)
import * as FA from 'react-icons/fa'
// Game Icons (GI)
import * as GI from 'react-icons/gi'
// Heroicons (HI)
import * as HI from 'react-icons/hi'
// IcoMoon Free (IM)
import * as IM from 'react-icons/im'
// Ionicons (IO)
import * as IO from 'react-icons/io'
// Material Design Icons (MD)
import * as MD from 'react-icons/md'
// Remix Icons (RI)
import * as RI from 'react-icons/ri'
// Simple Icons (SI)
import * as SI from 'react-icons/si'
// Typicons (TI)
import * as TI from 'react-icons/ti'
// Weather Icons (WI)
import * as WI from 'react-icons/wi'

const IconTypeMap = {
  ai: AI,
  bs: BS,
  bi: BI,
  di: DI,
  fi: FI,
  fa: FA,
  gi: GI,
  hi: HI,
  im: IM,
  io: IO,
  md: MD,
  ri: RI,
  si: SI,
  ti: TI,
  wi: WI,
}

export type IconType = keyof typeof IconTypeMap

export type IconName<T extends IconType> = keyof (typeof IconTypeMap)[T]
export default IconTypeMap
