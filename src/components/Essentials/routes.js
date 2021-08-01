
import Home from '../Home/component'
import Personal from '../Personal/component'
import HelpSupport from '../HelpSupport/component'
import ProductServices from '../ProductServices/component'
import Store from '../Store/component'

export default [

    {
        Component: Home,
        name: 'Home',
        path: '/'
    },
    {
        Component: Personal,
        name: 'Personal',
        path: '/personal'
    },
    {
        Component: HelpSupport,
        name: 'Help',
        path: '/help-support'
    },
    {
        Component: ProductServices,
        name: 'Product',
        path: '/products-services'
    },
    {
        Component: Store,
        name: 'Store',
        path: '/store'
    }
]