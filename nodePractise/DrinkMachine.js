class DrinkMachine{
    serveDrink(size){
        console.log('Drink to be served')
        switch (size)
        {   
            case 'L': console.log('Large coke');break;
            case 'S': console.log('Small coke'); break;
            case 'M': console.log('Medium coke'); break;
        }    
    }
}
module.exports  = DrinkMachine;