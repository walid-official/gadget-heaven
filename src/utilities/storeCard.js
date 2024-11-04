const getGadgetList = () => {
    const storeGadgetList = localStorage.getItem('gadget-list');
    if(storeGadgetList){
        const gadgetList = JSON.parse(storeGadgetList);
        return gadgetList;
    }
    else{
        return [];
    }
}

const addGadgetToCart = (card) => {
    const addGadget = getGadgetList();
        const isExist = addGadget.find(item => item.id === item.id);
        if(isExist){
            alert("This Item is added")
        }else{
            addGadget.push(card)
            const storedListGadget = JSON.stringify(addGadget);
            localStorage.setItem('gadget-list',storedListGadget)
        }
}

export {addGadgetToCart,getGadgetList}