import { MenuItem } from "../models/menu-item.model";

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
    ]
  },
  {
    icon: 'NA',
    name: 'News',
    isActive: false,
    route: '/main/news',
    children: [
    ]
  },
  {
    icon: 'NA',
    name: 'Students',
    isActive: false,
    route: '/main/students',
    children: [
    ]
  },
  {
    icon: 'NA',
    name: 'Enrollees',
    isActive: false,
    route: '/main/enrollees',
    children: [
    ]
  },
]