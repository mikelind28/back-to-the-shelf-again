import {
  Gowun_Dodum,
  Meow_Script,
  Amatic_SC,
  Fira_Sans,
  Overlock,
} from "next/font/google";

const titleHeader = Overlock({
  weight: ["400"],
  fallback: ["system-ui"],
});

const gowunDodum = Gowun_Dodum({
  weight: ["400"],
  fallback: ["system-ui"],
});

const amatic = Amatic_SC({
  weight: ["700"],
  subsets: ["latin"],
});

const cursive = Meow_Script({
  weight: ["400"],
  subsets: ["latin"],
});

const paragraph = Fira_Sans({
  weight: ["300"],
  fallback: ["system-ui"],
});

export { titleHeader, gowunDodum, amatic, cursive, paragraph };
