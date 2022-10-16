export const get_color = (items, colors) => {

    let item = items.map((i) => i[colors])
    if (colors === "colors") {
        item = item.flat()
    }
    return ["select color", ...new Set(item)]
}
