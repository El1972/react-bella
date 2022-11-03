import React from 'react'
import { useFiltersContext } from '../context/filters_context'
import { get_designer } from '../side functions/get_designer';
import { get_color } from '../side functions/get_color';

const Sidebar = () => {

    const { sort, handleSort,
        filters: {
            toggle,
            choose,
            colors,
            artists
        },
        updateItems,
        items
    } = useFiltersContext();

    const color = get_color(items, "colors");
    const designer = get_designer(items, "designers");

    return (
        <div id='sidebar-parent'>
            <div className="sidebar-float">
                <div className="sidebar-properties">
                    <div className="sidebar-items">



                        {/*    !!!  Radio Buttons Functionality Is Working. Just Uncomment It  !!!    */}



                        {/* <div className="dress-section">
                            <div className="inner-dress-section">
                                <form>
                                    <input type="radio"
                                        className='input-oxford'
                                        name='toggle'
                                        value="oxford"
                                        checked={toggle === 'oxford'}
                                        onChange={updateItems}
                                    /> Oxford
                                    <input type="radio"
                                        className='input-derby'
                                        name='toggle'
                                        value="derby"
                                        checked={toggle === 'derby'}
                                        onChange={updateItems}
                                    /> Derby
                                </form>
                            </div>
                        </div>

                        <div className="modern-section">
                            <div className="inner-modern-section">
                                <form>
                                    <input type="radio"
                                        className='input-loafer'
                                        name='choose'
                                        value="loafer"
                                        checked={choose === 'loafer'}
                                        onChange={updateItems}
                                    /> Loafer
                                    <input type="radio"
                                        className='input-monk-strap'
                                        name='choose'
                                        value="monk-strap"
                                        checked={choose === 'monk-strap'}
                                        onChange={updateItems}
                                    /> Monk Strap
                                </form>
                            </div>
                        </div> */}

                        <div className="all-wrapper">
                            <div className="inner-all-wrapper">
                                <div className="clearfix">
                                    <div className="all-shoes-container">
                                        <div className="inner-all-shoes-container">
                                            <button className="all-shoes" name="all_shoes" type="button"
                                                onClick={updateItems}>All Shoes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fabric-wrapper">
                            <div className="inner-fabric-wrapper">
                                <div className="clearfix">
                                    <div className="leather-buttons-container">
                                        <div className="inner-leather-buttons-container">
                                            <button className="leather" name="all_shoes" type="button"
                                                onClick={updateItems}>Leather</button>
                                        </div>
                                    </div>
                                    <div className="suede-buttons-container">
                                        <div className="inner-suede-buttons-container">
                                            <button className="suede" name="all_shoes" type="button"
                                                onClick={updateItems}>Suede</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="laces-wrapper">
                            <div className="inner-laces-wrapper">
                                <div className="clearfix">

                                    <div className="leather-buttons-container">
                                        <div className="inner-leather-buttons-container">
                                            <button className="leather" name="all_shoes"
                                                onClick={updateItems}>Laces</button>
                                        </div>
                                    </div>
                                    <div className="suede-buttons-container">
                                        <div className="inner-suede-buttons-container">
                                            <button className="suede" name="all_shoes"
                                                onClick={updateItems}>Laceless</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="price-section">
                            <span className='price-filter'> - Filter By Price</span>
                            <form onSubmit={(e) => e.preventDefault()} className='price-form'>
                                <label htmlFor="sort"></label>
                                <select className='select-width'
                                    name="sort"
                                    value={sort}
                                    onChange={handleSort}>
                                    <option value="select price" className='opl'>select price</option>
                                    <option value="highest price">From lowest to highest</option>
                                    <option value="lowest price">From highest to lowest</option>
                                </select>
                            </form>
                        </div>
                        <div className="color-section">
                            <span className='color-filter'> - Filter By Color</span>
                            <form className='colors-form'>
                                <label htmlFor="colors"></label>
                                <select className='select-width'
                                    name="colors"
                                    value={colors}
                                    onChange={updateItems}>
                                    {color.map((m, index) => {
                                        return <option key={index} value={m}>{m}</option>
                                    })}
                                </select>
                            </form>
                        </div>
                        <div className="designer-section">
                            <span className='designer-filter'> - Filter By Designer</span>
                            <form className='designer-form'>
                                <label htmlFor="designer"></label>
                                <select className='select-width'
                                    name="artists"
                                    value={artists}
                                    onChange={updateItems}>
                                    {designer.map((d, index) => {
                                        return <option key={index} value={d}>{d}</option>
                                    })}
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar