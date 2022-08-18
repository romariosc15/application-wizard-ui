import renderer from 'react-test-renderer';
import Steps from '../../components/Steps';

const testSteps = [
    {
        id: 'test-1',
        title: 'Información Personal', 
        order: 1, 
        fields: [
            {
                label:'Nombres',
                type:'text',
                name:'firstName',
                id:'firstName',
                placeholder:'Ingresa tus nombres',
                required:true,
                columns: 6
            },
            {
                label: 'Apellidos',
                type: 'text',
                name: 'lastName',
                id: 'lastName',
                placeholder: 'Ingresa tus apellidos',
                required: true,
                columns: 6
            },
            {
                label: 'Linkedin',
                type: 'url',
                name: 'linkedin',
                id: 'linkedin',
                placeholder: 'Ingresa la URL de tu perfil de LinkedIn',
                columns: 6
            }
        ],
    }, 
    {
        id: 'test-2',
        title: 'Experiencia TEST',
        order: 3,
        fields: [
            {
                label: 'Describe tu trabajo ideal',
                type: 'textarea',
                rows: 3,
                name: 'idealJob',
                id: 'idealJob',
                placeholder: 'Ejemplo: Mi trabajo ideal está en un ambiente retador, en donde pueda asumir mayor responsabilidad ...',
                columns: 12
            }
        ]
    }, 
    {
        id: 'test-3',
        title: 'Complementario TEST',
        order: 2,
        fields: [
            {
                label: '¿Puede mantener una conversación en inglés?',
                description: 'Es requerido tener un nivel B1 en adelante',
                type: 'radio',
                name: 'isEnglishSpeaker',
                id: 'isEnglishSpeaker',
                required: true,
                columns: 12,
                options: [
                    {label: 'Si', value: 'yes'},
                    {label: 'No', value: 'no'}
                ]
            }
        ]
    }
];

it('steps array ordered by order property', () => {
    const component = renderer.create(
        <Steps steps={testSteps} />,
    );

    const testInstance = component.root;

    expect(testInstance.findByProps({"data-step-id": "test-3"}).props.children).toBe(2)

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});