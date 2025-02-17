const elements = {
    bar: document.querySelector('.bar'),
    barScreen: document.querySelector('.bar-modal'),
    closeBarScreen: document.getElementById('bar-modal--dismiss'),
    brandsSelect: document.querySelector('.brands'),
    eucafloorLine: document.getElementById('linha-eucafloor'),
    durafloorLine: document.getElementById('linha-durafloor'),
    espacofloorLine: document.getElementById('linha-espacofloor'),
    quickLine: document.getElementById('linha-quickstep'),
    tarketLine: document.getElementById('linha-tarket')
}

elements.bar.addEventListener('click', () =>{
    elements.barScreen.classList.toggle('bar-modal--active');
});

elements.closeBarScreen.addEventListener('click', () => {
    elements.bar.dispatchEvent(new Event('click'));
})

let eucafloor = elements.eucafloorLine;
let durafloor = elements.durafloorLine;
let espacofloor = elements.espacofloorLine;
let quickstep = elements.quickLine;
let tarket = elements.tarketLine;

let children = elements.brandsSelect.querySelectorAll('*');
let arrayChildren = Array.from(children);
arrayChildren.forEach((item, index) => {
    item.addEventListener('click', () => {
        arrayChildren.forEach(otherItem => otherItem.classList.remove('item-brand--active'));
        item.classList.add('item-brand--active');
        console.log(index);
        
        let eucafloor = elements.eucafloorLine;
        let durafloor = elements.durafloorLine;
        let espacofloor = elements.espacofloorLine;
        let quickstep = elements.quickLine;
        let tarket = elements.tarketLine;
        
        eucafloor.style.display = 'none';
        durafloor.style.display = 'none';
        espacofloor.style.display = 'none';
        quickstep.style.display = 'none';
        tarket.style.display = 'none';
        
        switch(index) {
            case 0:
            durafloor = durafloor.style.display = 'flex';
            break
            case 2: 
            espacofloor = espacofloor.style.display = 'flex';
            break
            case 3: 
            eucafloor = eucafloor.style.display = 'flex';
            break
            case 5:
            quickstep = quickstep.style.display = 'flex';
            break
            case 6:
            tarket = tarket.style.display = 'flex';
        }
        
    });
});
let typeEucafloor = Array.from(eucafloor.getElementsByTagName('li'));
let typeDurafloor = Array.from(durafloor.getElementsByTagName('li'));
let typeEspacofloor = Array.from(espacofloor.getElementsByTagName('li'));
let typeQuickstep = Array.from(quickstep.getElementsByTagName('li'));
let typeTarket = Array.from(tarket.getElementsByTagName('li'));

function handleType(type, index) {
    let paragraphType = Array.from(type.querySelectorAll('p, strong'));
    type.addEventListener('click', () =>{
        typeTarket.forEach(otherItem => {
            let paragraphTypeblack = Array.from(otherItem.querySelectorAll('p, strong'));
            paragraphTypeblack.forEach(paragraph => {paragraph.style.color = '#3a3a3a'})
        });
        typeQuickstep.forEach(otherItem => {
            let paragraphTypeblack = Array.from(otherItem.querySelectorAll('p, strong'));
            paragraphTypeblack.forEach(paragraph => {paragraph.style.color = '#3a3a3a'})
        });
        typeEspacofloor.forEach(otherItem => {
            let paragraphTypeblack = Array.from(otherItem.querySelectorAll('p, strong'));
            paragraphTypeblack.forEach(paragraph => {paragraph.style.color = '#3a3a3a'})
        });
        typeDurafloor.forEach(otherItem => {
            let paragraphTypeblack = Array.from(otherItem.querySelectorAll('p, strong'));
            paragraphTypeblack.forEach(paragraph => {paragraph.style.color = '#3a3a3a'})
        });
        typeEucafloor.forEach(otherItem => {
            let paragraphTypeblack = Array.from(otherItem.querySelectorAll('p, strong'));
            paragraphTypeblack.forEach(paragraph => {paragraph.style.color = '#3a3a3a'})
        });
        paragraphType.forEach(paragraph => {paragraph.style.color = '#93613E'});
        console.log(index);
    });
}

typeEucafloor.forEach((type, index) =>{
    handleType(type, index);
    // console.log(type.getElementsByTagName('p'))
});

typeDurafloor.forEach((type, index) =>{
    handleType(type, index);
})
typeEspacofloor.forEach((type, index) =>{
    handleType(type, index);
})
typeQuickstep.forEach((type, index) =>{
    handleType(type, index);
})
typeTarket.forEach((type, index) =>{
    handleType(type, index);
})
// console.log(eucafloor.getElementsByTagName('li'))
// console.log(durafloor.getElementsByTagName('li'))
