// React imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// MUI imports
import { Button, Menu, FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import FilterListIcon from '@mui/icons-material/FilterList';
import ItemList from "../ItemList/ItemList";
// Site components imports
import filterList from "../../utils/filterList";
import Carousel from "../Carousel/Carousel";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
// Firestore imports
import { filterProducts } from "../../utils/fireBaseController";




const ItemListContainer = () => {
    const { category } = useParams()
    let title = '';
    let subtitle = '';
    (category === 'camaras') && (title = 'Cámaras de Fotos');
    (category === 'lentes') && (title = 'Lentes');
    (category === 'accesorios') && (title = 'Accesorios');
    (category === undefined) && (title = 'Sheipeg | Tu Tienda de Fotografía') && (subtitle = 'Catálogo de Productos')
    const [SpinnerState, setSpinnerState] = useState({ display: 'flex' })
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
            let operator = ''
            filterList.forEach((element) =>
                (element.group == group) && (operator = element.operator))
            setFilters([...filters, {
                property: group,
                operator: operator,
                value: name
            }])
            filterDisablingControl(group, name)
        } else {
            enableFilterGroup(group)
            const newFilters = filters.filter((element) => group != element.property)
            setFilters(newFilters)
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
        filterList.map((element) => {
            (element.group == group) && element.groupArray.map((subElement) => subElement.disabled = false)
        })
    }
    useEffect(() => {

        if (category) {
            const categoryFilter = {
                property: 'category',
                operator: '==',
                value: category
            }
            setFilters([categoryFilter])
        }
        
    }, [category])
    useEffect(() => {
        setProductsState([])
        filterProducts(filters)
            .then((res) => {
                setProductsState(res)
            })
            .finally(() => {
                setSpinnerState({ display: 'none' })
            })
    }, [filters])

    return (
        <>
            {category === undefined && <Carousel />}
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
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
            <LoadingSpinner display={SpinnerState} />
            <ItemList items={productsState} />

        </>
    )
}

export default ItemListContainer