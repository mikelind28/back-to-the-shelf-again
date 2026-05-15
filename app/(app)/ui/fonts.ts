import {
  Gowun_Dodum,
  Meow_Script,
  Amatic_SC,
  Fira_Sans,
  Overlock,
  Ms_Madi,
} from "next/font/google";

export const titleHeader = Overlock({
  weight: ["400"],
  fallback: ["system-ui"],
});

export const titleHeaderBold = Overlock({
  weight: ["700"],
  fallback: ["system-ui"],
});

export const gowunDodum = Gowun_Dodum({
  weight: ["400"],
  fallback: ["system-ui"],
});

export const amatic = Amatic_SC({
  weight: ["700"],
  subsets: ["latin"],
});

export const cursive = Meow_Script({
  weight: ["400"],
  subsets: ["latin"],
});

export const paragraph = Fira_Sans({
  weight: ["300"],
  fallback: ["system-ui"],
});

export const cursive2 = Ms_Madi({
  weight: ["400"],
  subsets: ["latin"],
});
