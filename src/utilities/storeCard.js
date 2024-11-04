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
    const addGadgets = getGadgetList();
    console.log(addGadgets);
        const isExist = addGadgets.find(item => item.product_id == card.product_id);
        if(isExist) return  alert("This Item is added")
  
        addGadgets.push(card)
        const storedListGadget = JSON.stringify(addGadgets);
        localStorage.setItem('gadget-list',storedListGadget)
        
}

export {addGadgetToCart,getGadgetList}