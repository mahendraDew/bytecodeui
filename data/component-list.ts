import { AnimatedBorderDemo } from "@/components/demos/animated-border-demo";
import BackButtonIconDemo from "@/components/demos/back-button-icon-effect-demo";
import ButtonArrowIconDemo from "@/components/demos/button-arrow-icon-demo";
import { CardHorizonDemo } from "@/components/demos/card-horizon-demo";
import { DynamicGridPatternDemo } from "@/components/demos/dynamic-grid-pattern-demo";
import { FlickeringBackgroundDemo } from "@/components/demos/flickering-background-demo";
import {HackyButtonDemo} from "@/components/demos/hacky-button-demo";
import { ModernCardDemo } from "@/components/demos/modern-card-demo";
import { ShimmerDemo } from "@/components/demos/shimmer-demo";
import { SpotligthBorderDemo } from "@/components/demos/spotlight-border-demo";
import { SpotlightDemo } from "@/components/demos/spotlight-demo";
import { StaticMacDemo } from "@/components/demos/static-mac-demo";
import TimeFrameListHoverEffectDemo from "@/components/demos/time-frame-list-hover-effect-demo";


export const COMPONENTS_LIST = [
  {
    name: "Spotlight Border",
    component: SpotligthBorderDemo,
    slug: "spotlight-border",
    description: "A spotlight effect that highlights border on hover."
  },
  {
    name: "Spotlight",
    component: SpotlightDemo,
    slug: "spotlight",
    description: "A spotlight effect that follows the mouse cursor on hover."
  },
  {
    name: "Horizon",
    component: CardHorizonDemo,
    slug: "card-horizon",
    description: "A subtle horizon top border effect on hover."
  },
  {
    name: "Shimmer",
    component: ShimmerDemo,
    slug: "shimmer",
    description:
      "A shimmering light that travels around the perimeter on hover."
  },
  {
    name: "Animated Border",
    component: AnimatedBorderDemo,
    slug: "animated-border",
    description: "A continuous animated gradient border effect."
  },
  {
    name: "Hacky Button",
    component: HackyButtonDemo,
    slug: "hacky-button",
    description: "Hacky button effect on button text."
  },
  {
    name: "Modern Card",
    component: ModernCardDemo,
    slug: "modern-card",
    description: "New modern card."
  },
  {
    name: "Static Mac",
    component: StaticMacDemo,
    slug: "static-mac",
    description: "Static mac with customizable image/background."
  },
  {
    name: "Flickering Background",
    component: FlickeringBackgroundDemo,
    slug: "flickering-background",
    description: "Flickering Background from your hero page."
  },
  {
    name: "Dynamic Grid Pattern",
    component: DynamicGridPatternDemo,
    slug: "dynamic-grid-pattern",
    description: "Grid Background from your hero page with hover effect."
  },
  {
    name: "Back Button Icon effect",
    component: BackButtonIconDemo,
    slug: "back-button-icon-effect",
    description: "back button with icon effect on hover."
  },
  {
    name: "Back Button with arrow icon",
    component: ButtonArrowIconDemo,
    slug: "button-arrow-icon",
    description: "back button with arrow icon and hover effect."
  },
  {
    name: "Timeframe List hover effect",
    component: TimeFrameListHoverEffectDemo,
    slug: "time-frame-list-hover-effect",
    description: "list with timeframe hover effect."
  },
  
]
