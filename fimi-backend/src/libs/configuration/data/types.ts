import { ConfigType } from '@nestjs/config'

import { databaseConfigData } from '@/libs/configuration/data/database-config.data'
import { systemConfigData } from '@/libs/configuration/data/system-config.data'

export type SystemConfigDataType = ConfigType<typeof systemConfigData>
export type DatabaseConfigDataType = ConfigType<typeof databaseConfigData>
