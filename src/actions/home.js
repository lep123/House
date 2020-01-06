import { requestPost } from '@/utils/request'
import { createActions } from 'redux-actions'
import Apis from '@/services/api'

export const home = createActions({
    SET_DATA: options => requestPost(Apis.listData, options),
  })

