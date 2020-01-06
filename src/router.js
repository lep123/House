import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import loader from '@/utils/loader'   // 路由懒加载

const Basic = loader(() => import('@/layouts/Basic'))
const Users = loader(() => import('@/layouts/Users'))
const Base = loader(() => import('@/pages/base'))
const Listings = loader(() => import('@/pages/listings'))
const Lessee = loader(() => import('@/pages/lessee'))
const Table = loader(() => import('@/pages/table'))


const routes = [
	{
		component: Users,
		path: '/users',
	},
	{
		component: Basic,
		path: '/',
		routes: [
			{
				component: Base,
				path: '/',
				routes:[
					{
						component: Listings,
						path: '/basic/base/listings',
					},
					{
						component: Lessee,
						path: '/',
						routes:[
							{
								component: Table,
								path: '/:id',
							}
						]
					}
				]
			},
		]
	}
]

export default class extends React.PureComponent {
	render () {
		return(
			<BrowserRouter >
					{renderRoutes(routes)}
			</BrowserRouter>
		)
	}
}
