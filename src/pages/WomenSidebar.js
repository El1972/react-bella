import React from 'react'
import { useFiltersContext } from '../context/filters_context'
import { get_designer } from '../side functions/get_designer';
import { get_color } from '../side functions/get_color';

const WomenSidebar = () => {

    const { sort, handleSort,
        filters: {
            toggle,
            women_choose,
            colors,
            artists
        },
        updateItems,
        women_items
    } = useFiltersContext();

    const color = get_color(women_items, "colors");
    const designer = get_designer(women_items, "designers");

    return (
        <div id='sidebar-parent'>
            <div className="sidebar-float">
                <div className="sidebar-properties">
                    <div className="sidebar-items">
                        {/* <div className="material-type">
                            <form>
                                <input type="radio"
                                    className='input-leather'
                                    name='toggle'
                                    value='leather'
                                    checked={toggle === 'leather'}
                                    onChange={updateItems}
                                /> All
                                <input type="radio"
                                    className='input-suede'
                                    name='toggle'
                                    value='suede'
                                    checked={toggle === 'suede'}
                                    onChange={updateItems}
                                /> Suede
                            </form>
                        </div> */}
                        {/* <div className="laces-section" >
                            <form>
                                <input type="radio"
                                    className='women-input-laceless'
                                    name='women_choose'
                                    value='laceless'
                                    checked={women_choose === 'laceless'}
                                    onChange={updateItems}
                                /> All
                                <input type="radio"
                                    className='input-lace'
                                    name='women_choose'
                                    value='laces'
                                    checked={women_choose === 'laces'}
                                    onChange={updateItems}
                                /> Laces
                            </form>
                        </div> */}
                        <div className="price-section">
                            <span>--- Filter By Price ---</span>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <label htmlFor="sort"></label>
                                <select className='select-width'
                                    name="sort"
                                    value={sort}
                                    onChange={handleSort}>
                                    <option value="highest price">From lowest to highest</option>
                                    <option value="lowest price">From highest to lowest</option>
                                </select>
                            </form>
                        </div>
                        <div className="color-section">
                            <span>--- Filter By Color ---</span>
                            <form>
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
                            <span>--- Filter By Designer ---</span>
                            <form>
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

export default WomenSidebar