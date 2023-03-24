import { IconType } from "react-icons";
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from "react-icons/fi";
import { GiMatterStates } from "react-icons/gi";

interface LinkItemProps {
  name: string;
  to?: string;
  icon: IconType;
}

export const SidebarLinkItems: Array<LinkItemProps> = [
  { name: 'Welcome', to: '/', icon: FiHome },
  { name: 'Create', to: '/tauri', icon: FiCompass },
  { name: 'Craft', to: "/zustand", icon: GiMatterStates },
];
