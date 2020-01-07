import { requestPost } from '@/utils/request'
import { createActions } from 'redux-actions'
import Apis from '@/services/api'
import qs from "qs";

export const home = createActions({
    SET_DATA: options => requestPost(Apis.listData, options),
  })

export const insertData = createActions({ 
   INSERT_DATA: options => {
     console.log(options);
     return requestPost(Apis.setData, qs.stringify(options)) 
   }
})

