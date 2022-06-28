// React imports
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// MUI imports
import { Button, Menu, FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import FilterListIcon from '@mui/icons-material/FilterList';
import ItemList from "../ItemList/ItemList";

// Site components imports
import filterList from "../../utils/filterList"
// Firestore imports
import { filterProducts } from "../../utils/fireBaseController";

const Filter = ({setProductsState, setSpinnerState}) => {
    const { category } = useParams()
    const [anchorEl, setAnchorEl] = useState(null)
    const [filters, setFilters] = useState([])

    const filterDisabled = (group, name) => {
        let returnValue = false
        filters.forEach((element) => {
            (element.property == group && element.value != name) && (returnValue = true)
        })
        return returnValue
    }
    const filterChecked = (group, name) => {
        let returnValue = false
        filters.forEach((element) => {
            (element.property == group && element.value == name) && (returnValue = true)
        })
        return returnValue
    }

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
        }
        else {
            const newFilters = filters.filter((element) => group != element.property)
            setFilters(newFilters)
        }
    }
    useEffect(() => {
        setProductsState([])
        setSpinnerState({ display: 'flex' })
        if (category != undefined) {
            const categoryFilter = {
                property: 'category',
                operator: '==',
                value: category
            }
            setFilters([categoryFilter])
        } else setFilters([])
    }, [category])

    useEffect(() => {
        setProductsState([])
        setSpinnerState({ display: 'flex' })
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

                            const { name, label } = subElement
                            return (<FormControlLabel key={index} onChange={handleFilter} sx={{ marginLeft: '5px' }} control={<Checkbox checked={filterChecked(group.group, name)} />} label={label} name={name} disabled={filterDisabled(group.group, name)} />)

                        })}
                    </FormGroup>)
                })}

            </Menu>
        </>
    )
}

export default Filter