import { IconType } from "react-icons";
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from "react-icons/fi";
import { Gi3DHammer, GiBlackBook, GiMatterStates, GiPrayer } from "react-icons/gi";

interface LinkItemProps {
  name: string;
  to?: string;
  icon: IconType;
}

export const SidebarLinkItems: Array<LinkItemProps> = [
  { name: 'Welcome', to: '/', icon: FiHome },
  { name: 'Create', to: '/create', icon: GiPrayer },
  { name: 'Craft', to: "/craft", icon: Gi3DHammer },
  { name: 'Validate', to: "/validate", icon: GiBlackBook },
];
