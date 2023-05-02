const fs = require('fs') 

const addperson =(fname, lname, age, city, id)=>{
    const allData = loadInfo()
    const duplicateCheck = allData.filter((obj) =>{
        return obj.id === id
    })
    if(duplicateCheck.length == 0){
        allData.push ({
            id : id,
            fname : fname,
            lname : lname,
            age : age,
            city : city
        })
        saveallData(allData);
    }else {
        console.log('duplicate data')
    }

}
    
////////////////////////////////////
const loadInfo = ()=>{
    try{
        const dataJson = fs.readFileSync('data5.json').toString()
        return JSON.parse(dataJson)
    }catch{
        return []
    }
}

const saveallData = (allData) =>{
    const saveallDataJson = JSON.stringify(allData)
    fs.writeFileSync('data5.json', saveallDataJson)
}
//////////////////////////////////////////////////

//delete data

const deletedData = (id) =>{
    const allData = loadInfo()
    const dataToKeep = allData.filter((obj)=>{
        return obj.id !== id
    })
    saveallData(dataToKeep)
    console.log(dataToKeep)
    console.log("you have successfully deleted the item")
}


const readData = (id) =>{
    const allData = loadInfo()
    const itemNeeded = allData.find((obj)=>{
        return obj.id === id
    })
    console.log(itemNeeded)
    if(itemNeeded){
    console.log(itemNeeded.id)
    }else{
        console.log("id needed not found")
    }
}


const listData = (id) =>{
    const allData = loadInfo()
    allData.forEach(element => {
        console.log(element.fname, element.age, element.city )
    });
    
}




module.exports = {
    addperson,
    deletedData,
    readData,
    listData
}