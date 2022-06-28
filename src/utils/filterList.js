const filterList = [
    {
        group: 'brand',
        operator: '==',
        groupLabel: 'Marcas',
        groupArray: [
            {
                label: 'Nikon',
                name: 'nikon',
                //disabled: false,
            },
            {
                label: 'Canon',
                name: 'canon',
                //disabled: false,
            },
            {
                label: 'Fujifilm',
                name: 'fuji',
                //disabled: false,
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
                //disabled: false,
                
            },
            {
                label: 'Canon EF-S',
                name: 'efs',
                //disabled: false,
                
            },
            {
                label: 'Canon RF',
                name: 'rf',
                //disabled: false,
                
            },
            {
                label: 'Fujifilm X',
                name: 'x',
                //disabled: false,
                
            },
            {
                label: 'Nikon DX',
                name: 'dx',
                //disabled: false,
                
            },
            {
                label: 'Nikon Z',
                name: 'z',
                //disabled: false,
                
            },
            {
                label: 'Nikon F',
                name: 'f',
                //disabled: false,
                
            },
        ]
    }



]

export default filterList