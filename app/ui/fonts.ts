import { Proza_Libre, Averia_Libre, Dosis, Gowun_Dodum, Meow_Script, Yellowtail, Norican, Amatic_SC, Fira_Sans, Overlock } from 'next/font/google';

// const prozaLibre = Proza_Libre({
//     weight: ['400'],
//     fallback: ['system-ui'],
// });

// const averiaLibre = Averia_Libre({
//     weight: ['300'],
//     fallback: ['system-ui'],
// });

// const cursive2 = Yellowtail({
//     weight: ['400'],
//     subsets: ['latin'],
// });

// const cursive3 = Norican({
//         weight: ['400'],
//         subsets: ['latin'],
//     });

const titleHeader = Overlock({
    weight: ['400'],
    fallback: ['system-ui'],
});

const gowunDodum = Gowun_Dodum({
    weight: ['400'],
    fallback: ['system-ui'],
});

const amatic = Amatic_SC({
    weight: ['700'],
    subsets: ['latin'],
});

const cursive = Meow_Script({
    weight: ['400'],
    subsets: ['latin'],
});

const paragraph = Fira_Sans({
    weight: ['300'],
    fallback: ['system-ui'],
});

export { titleHeader, gowunDodum, amatic, cursive, paragraph }