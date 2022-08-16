export default [
    {
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
                columns: 6,
                containerClasses: 'w-6/12'
            },
            {
                label: 'Apellidos',
                type: 'text',
                name: 'lastName',
                id: 'lastName',
                placeholder: 'Ingresa tus apellidos',
                required: true,
                columns: 6,
                containerClasses: 'w-6/12'
            },
            {
                label: 'Linkedin',
                type: 'url',
                name: 'linkedin',
                id: 'linkedin',
                placeholder: 'Ingresa la URL de tu perfil de LinkedIn',
                columns: 6,
                containerClasses: 'w-6/12'
            },
            {
                label: 'GitHub',
                type: 'url',
                name: 'github',
                id: 'github',
                placeholder: 'Ingresa la URL de tu perfil de GitHub',
                columns: 6,
                containerClasses: 'w-6/12'
            },
            {
                label: 'País',
                type: 'text',
                name: 'country',
                id: 'country',
                placeholder: 'Nombre del país en el que vives',
                columns: 4,
                required: true,
                containerClasses: 'w-4/12'
            },
            {
                label: 'Ciudad',
                type: 'text',
                name: 'city',
                id: 'city',
                placeholder: 'Nombre de la ciudad en la que vives',
                columns: 4,
                required: true,
                containerClasses: 'w-4/12'
            },
            {
                label: 'Celular',
                type: 'tel',
                name: 'phoneNumber',
                id: 'phoneNumber',
                placeholder: 'Número de celular',
                columns: 4,
                pattern: '[0-9]{9}',
                containerClasses: 'w-4/12'
            },
            {
                label: 'Cuentanos algo adicional sobre ti',
                type: 'textarea',
                rows: 4,
                name: 'aboutYou',
                id: 'aboutYou',
                placeholder: 'Ejemplo: Realizo voluntariado en una asociación sin fines de lucro ...',
                columns: 12
            }
        ],
    }, 
    {
        title: 'Experiencia',
        order: 2,
        fields: [
            {
                label:'Encabezado',
                type:'text',
                name:'heading',
                id:'heading',
                placeholder:'Ejemplo: Frontend Developer y amante de la lectura',
                required:true,
                columns: 6
            },
            {
                label:'Años de experiencia',
                type:'number',
                name:'experienceYears',
                id:'experienceYears',
                placeholder:'00',
                required:true,
                columns: 3
            },
            {
                label:'¿Estás trabajando actualmente en algún proyecto personal? Comentanos sobre ello',
                type:'textarea',
                rows: 4,
                name:'personalProject',
                id:'personalProject',
                placeholder:'Ejemplo: Estoy desarrollando una aplicación para la gestión de formularios de ...',
                columns: 12
            },
            {
                label:'Comentanos qué aprendiste en los últimos 3 meses',
                type:'textarea',
                rows: 4,
                name:'yourLearning',
                id:'yourLearning',
                placeholder:'Ejemplo: He terminado un curso de Unit Testing con Jest para aplicaciones en React ...',
                columns: 12
            },
            {
                label: 'Describe tu trabajo ideal',
                type: 'textarea',
                rows: 4,
                name: 'idealJob',
                id: 'idealJob',
                placeholder: 'Ejemplo: Mi trabajo ideal está en un ambiente retador, en donde pueda asumir mayor responsabilidad ...',
                columns: 12
            }
        ]
    }, 
    {
        title: 'Complementario',
        order: 3,
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
            },
            {
                label: '¿Está autorizado para trabajar en Estados Unidos?',
                type: 'radio',
                name: 'isUsaWorkPermit',
                id: 'isUsaWorkPermit',
                required: true,
                columns: 12,
                options: [
                    {label: 'Si', value: 'yes'},
                    {label: 'No', value: 'no'}
                ]
            },
            {
                label: '¿Tiene experiencia trabajando con equipos de personas de distintas partes del mundo?',
                description: 'Se trabaja mucho con personas de Norteamérica y de Latinoamérica',
                type: 'radio',
                name: 'isMulticultural',
                id: 'isMulticultural',
                required: true,
                columns: 12,
                options: [
                    {label: 'Si', value: 'yes'},
                    {label: 'No', value: 'no'}
                ]
            },
        ]
    }
];