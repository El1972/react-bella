
export const get_designer = (items, designers) => {

    let item = items.map((i) => i[designers])
    if (designers === "designers") {
        item = item.flat()
    }
    return ["select designer", ...new Set(item)]
}

