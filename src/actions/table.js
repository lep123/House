import { createActions } from 'redux-actions'
import { TABLE_DATA_POST } from '@/constants/actionTypes'
// import { table } from '@/services/api'
import api from '@/services/api'
import { requestPost } from '@/utils/request'

export const toTable = createActions({
    [TABLE_DATA_POST] : options => {
        return (requestPost(api.List, options))
    },
})