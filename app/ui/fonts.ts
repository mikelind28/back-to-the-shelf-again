import { Proza_Libre, Averia_Libre, Dosis, Gowun_Dodum } from 'next/font/google';

const prozaLibre = Proza_Libre({
    weight: ['400'],
    fallback: ['system-ui'],
});

const averiaLibre = Averia_Libre({
    weight: ['300'],
    fallback: ['system-ui'],
});

const dosis = Dosis({
    weight: ['500'],
    fallback: ['system-ui'],
});

const gowunDodum = Gowun_Dodum({
    weight: ['400'],
    fallback: ['system-ui'],
});

export { prozaLibre, averiaLibre, dosis, gowunDodum }