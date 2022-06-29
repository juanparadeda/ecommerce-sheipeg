const filterList = [
    {
        group: 'brand',
        operator: '==',
        groupLabel: 'Marcas',
        groupArray: [
            {
                label: 'Nikon',
                name: 'nikon',
            },
            {
                label: 'Canon',
                name: 'canon',
            },
            {
                label: 'Fujifilm',
                name: 'fuji',
            },
            {
                label: 'Lensbaby',
                name: 'lensbaby',
            }
        ]
    },
    {
        group: 'mount',
        operator: 'array-contains',
        groupLabel: 'Montura',
        groupArray: [
            {
                label: 'Canon EF',
                name: 'ef',
            },
            {
                label: 'Canon EF-S',
                name: 'efs',
            },
            {
                label: 'Canon RF',
                name: 'rf',
            },
            {
                label: 'Fujifilm X',
                name: 'x',
            },
            {
                label: 'Nikon DX',
                name: 'dx',             
            },
            {
                label: 'Nikon Z',
                name: 'z',
            },
            {
                label: 'Nikon F',
                name: 'f',
            },
        ]
    }



]

export default filterList