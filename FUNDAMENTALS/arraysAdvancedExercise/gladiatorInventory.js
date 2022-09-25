function gladiatorInventory(arr) {

    let newArr = arr.slice(); // commands with items
    let currentEquipment = newArr.shift().split(' '); //current equipment he has

    for (let i = 0; i < newArr.length; i++) {
        let commandAndItem = newArr[i].split(' '); //['command' , 'item']
    
        let command = commandAndItem[0];
        let item = commandAndItem[1]; //item or item upgrade

        switch (command) {
            case 'Buy':
                if (!currentEquipment.includes(item)) {
                    currentEquipment.push(item);
                }
                break;
            case 'Trash':
                if (currentEquipment.includes(item)) {
                    let index = currentEquipment.indexOf(item);
                    currentEquipment.splice(index, 1);
                }
                break;
            case 'Repair':
                if (currentEquipment.includes(item)) {
                    let index = currentEquipment.indexOf(item);
                    currentEquipment.push(currentEquipment.splice(index, 1));
                }
                break;
            case 'Upgrade':
                let itemAndUpgrade = item.split('-');
                let itemForUpgrade = itemAndUpgrade[0];
                let upgrade = itemAndUpgrade[1];
                if (currentEquipment.includes(itemForUpgrade)) {
                    let index = currentEquipment.indexOf(itemForUpgrade);
                    let itemToAdd = '' + currentEquipment.splice(index, 1) + ':' + upgrade;
                    currentEquipment.splice(index,0,itemForUpgrade);
                    currentEquipment.splice(index+1,0,itemToAdd);
                }
                break;
        }

    }
    console.log(currentEquipment.join(' '));

}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
);