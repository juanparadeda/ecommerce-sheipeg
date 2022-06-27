// React imports
import { useEffect, useState } from "react";
// MUI imports
import { Button, Menu, FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import FilterListIcon from '@mui/icons-material/FilterList';
import ItemList from "../ItemList/ItemList";
// Firestore imports
import { filterProducts } from "../../utils/fireBaseController";


const filterList = [{
    group: 'brand',
    groupLabel: 'Marcas',
    groupArray: [
        {
            label: 'Nikon',
            name: 'nikon',
            disabled: false
        },
        {
            label: 'Canon',
            name: 'canon',
            disabled: false
        },
        {
            label: 'Fujifilm',
            name: 'fuji',
            disabled: false
        }
    ]
}]

const FilterContainer = () => {
    const [productsState, setProductsState] = useState([])
    const [anchorEl, setAnchorEl] = useState(null);
    const [filters, setFilters] = useState([])
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleFilter = (e) => {
        const group = e.target.parentNode.parentNode.parentNode.id
        const name = e.target.name
        if (e.target.checked) {
            setFilters([...filters, {
                property: group,
                operator: '==',
                value: name
            }])
            filterDisablingControl(group, name)
        } else {
            enableFilterGroup(group)
            setFilters([])
        }
    }

    const filterDisablingControl = (checkedGroup, checkedName) => {
        filterList.map((group) => {
            (group.group == checkedGroup) && group.groupArray.map((brand) => {
                (brand.name != checkedName) && (brand.disabled = true)
            })
        })
    }

    const enableFilterGroup = (group) => {
        filterList.map((element) =>{
            (element.group == group) && element.groupArray.map((subElement) => subElement.disabled = false)
        })
    }

    useEffect(() => {
        setProductsState([])
        filterProducts(filters)
            .then((res) => {
                setProductsState(res)
            })
    }, [filters])

    return (
        <>
            <Button
                onClick={handleClick}
                variant='contained'
                color='secondary'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}

            >
                <FilterListIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {filterList.map((group, index) => {
                    return (<FormGroup id={group.group} key={index}>
                        <p style={{ marginLeft: '5px' }}><strong>{group.groupLabel}</strong></p>
                        {group.groupArray.map((subElement, index) => {
                            const { disabled, name, label } = subElement
                            return (<FormControlLabel key={index} disabled={disabled} onChange={handleFilter} sx={{ marginLeft: '5px' }} control={<Checkbox />} label={label} name={name} />)
                        })}
                    </FormGroup>)
                })}
            </Menu>
            <ItemList items={productsState} />

        </>
    )
}

export default FilterContainer