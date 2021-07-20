import { MenuItem } from '../models/menu-item.model';

export const MENU_ITEMS: MenuItem[] = [
  {
    icon: 'NA',
    name: 'Dashboard',
    isActive: false,
    route: '/main/dashboard',
    children: [
      {
        icon: 'NA',
        name: 'Reports',
        isActive: false,
        route: 'NA',
      },
      {
        icon: 'NA',
        name: 'Lists',
        isActive: false,
        route: 'NA',
      },
    ],
  },
  {
    icon: 'NA',
    name: 'Articles',
    isActive: false,
    route: '/main/articles',
    children: [],
  },
  {
    icon: 'NA',
    name: 'Categories',
    isActive: false,
    route: '/main/article-categories',
    children: [],
  },
  {
    icon: 'NA',
    name: 'Tags',
    isActive: false,
    route: '/main/tags',
    children: [],
  },
  {
    icon: 'NA',
    name: 'Users',
    isActive: false,
    route: '/main/users',
    children: [],
  },
  {
    icon: 'NA',
    name: 'Settings',
    isActive: false,
    route: '/main/settings',
    children: [],
  },
];
