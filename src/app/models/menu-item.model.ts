export interface MenuItem {
  icon: String;
  name: String;
  route: String;
  isActive: boolean;
  children: MenuChildren[]
}

export interface MenuChildren {
  icon: String;
  name: String;
  route: String;
  isActive: boolean;
}