const techList = (arrTech, name) => {
    if (arrTech.length === 0) {
        return 'Vazio!'
    };
    const arrSortedList = arrTech.sort();
    const listOfTechs = [];
    for (let index = 0; index < arrSortedList.length; index += 1) {
        listOfTechs.push({
            tech: arrSortedList[index],
            name: name,
        });
    }
    return listOfTechs;
}

module.exports = techList;