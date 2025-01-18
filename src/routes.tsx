import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from 'react-icons/md';
import { IRoute } from 'types/navigation';

const routes: IRoute[] = [
  {
    name: 'Main Dashboard',
    layout: '/dashboard',
    path: '/admin',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Data Tables',
    layout: '/dashboard',
    path: '/data-tables',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Profile',
    layout: '/dashboard',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Category',
    layout: '/dashboard',
    path: '/category',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
  },
  {
    name: 'Login',
    layout: '/auth',
    path: '/login',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  },
];

export default routes;
