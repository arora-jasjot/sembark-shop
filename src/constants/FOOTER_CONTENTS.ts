import QualityIcon from "@/assets/icons/quality.svg";
import WarrentyIcon from "@/assets/icons/warrenty.svg";
import ShippingIcon from "@/assets/icons/shipping.svg";
import SupportIcon from "@/assets/icons/support.svg";

interface FooterItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}
export const FOOTER_CONTENTS: FooterItem[] = [
  {
    id: 1,
    icon: QualityIcon,
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    id: 2,
    icon: WarrentyIcon,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    id: 3,
    icon: ShippingIcon,
    title: "Free Shipping",
    description: "Order over Rs. 1000",
  },
  {
    id: 4,
    icon: SupportIcon,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];
