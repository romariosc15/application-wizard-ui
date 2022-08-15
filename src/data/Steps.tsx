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
                required:true
            },
            {
                label: 'Apellidos',
                type: 'text',
                name: 'lastName',
                id: 'lastName',
                placeholder: 'Ingresa tus apellidos',
                required: true
            },
            {
                label: 'Describe como sería tu trabajo ideal',
                type: 'textarea',
                rows: 5,
                name: 'idealJob',
                id: 'idealJob',
                placeholder: 'Ejemplo: Mi trabajo ideal está en un ambiente retador, en donde pueda asumir mayor responsabilidad ...',
                required: true
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
                required:true
            }
        ]
    }, 
    {
        title: 'Formación',
        order: 3,
        fields: []
    }
];