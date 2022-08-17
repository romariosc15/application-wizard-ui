interface Wizard{
    id: string,
    title: string,
    description: string,
    author: string,
    logo: string
};
const wizardData:Wizard[] = [
    {
        id: '2uvwxyz1',
        title: 'Formulario de prueba 1',
        description: 'Consta de 3 etapas, lo que se puede traducir como 3 formularios con preguntas muy generales.',
        author: 'Jaime Romario Sarmiento',
        logo: '/image/wizard/romario.png'
    },
    {
        id: '2uvwabc2',
        title: 'Formulario de prueba 2',
        description: 'Consta de 3 etapas, lo que se puede traducir como 3 formularios con preguntas muy generales. Ésta versión consta de menos preguntas.',
        author: 'Jaime Romario Sarmiento',
        logo: '/image/wizard/romario.png'
    }
];
export default wizardData;