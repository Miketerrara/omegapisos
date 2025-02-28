const elements = {
    bar: document.querySelector('.bar'),
    barScreen: document.querySelector('.bar-modal'),
    closeBarScreen: document.getElementById('bar-modal--dismiss'),
    brandsSelect: document.querySelector('.brands'),
    eucafloorLine: document.getElementById('linha-eucafloor'),
    durafloorLine: document.getElementById('linha-durafloor'),
    espacofloorLine: document.getElementById('linha-espacofloor'),
    quickLine: document.getElementById('linha-quickstep'),
    tarketLine: document.getElementById('linha-tarket'),
    brandsMobile: document.getElementById('list-brands'),
    photoSelection: document.querySelector('.block-pisos__principal--selection')
}
elements.bar.addEventListener('click', () =>{
    elements.barScreen.classList.toggle('bar-modal--active');
});

elements.closeBarScreen.addEventListener('click', () => {
    elements.bar.dispatchEvent(new Event('click'));
})
const display = {
    eucafloorScreen: document.getElementById('eucafloor'),
    durafloorScreen: document.getElementById('durafloor'),
    espacofloorScreen: document.getElementById('espacofloor'),
    quickstepScreen: document.getElementById('quickstep'),
    tarketScreen: document.getElementById('tarket'),
    eucafloorGallery: document.getElementById('gallery_eucafloor'),
    durafloorGallery: document.getElementById('gallery_durafloor'),
    espacofloorGallery: document.getElementById('gallery_espacofloor'),
    quickstepGallery: document.getElementById('gallery_quickstep'),
    tarketGallery: document.getElementById('gallery_tarket')
}

let eucafloor = elements.eucafloorLine;
let durafloor = elements.durafloorLine;
let espacofloor = elements.espacofloorLine;
let quickstep = elements.quickLine;
let tarket = elements.tarketLine;

let screenEucafloor = Array.from(display.eucafloorScreen.querySelectorAll('*'));

let screen = [
    display.durafloorScreen,
    display.espacofloorScreen,
    display.eucafloorScreen,
    display.quickstepScreen,
    display.tarketScreen
]

let gallery = [
    display.durafloorGallery,
    display.espacofloorGallery,
    display.eucafloorGallery,
    display.quickstepGallery,
    display.tarketGallery
]

function updateChildren() {
    if (window.innerWidth <= 767) {
        children = elements.brandsMobile.querySelectorAll('*');
    } else {
        children = elements.brandsSelect.querySelectorAll('*');
    }
}
updateChildren();

window.addEventListener('resize', updateChildren);
let arrayChildren = Array.from(children);

function clickBrands () {
    arrayChildren.forEach((item, index) => {
        item.addEventListener('click', () => {
            arrayChildren.forEach(otherItem => {
                otherItem.classList.remove('item-brand--active');
                screen.forEach(anotherItem => anotherItem.style.display = 'none');
                gallery.forEach(galleryItem => galleryItem.style.display = 'none');
            });
            item.classList.add('item-brand--active');
            /* let eucafloor = elements.eucafloorLine;
            let durafloor = elements.durafloorLine;
            let espacofloor = elements.espacofloorLine;
            let quickstep = elements.quickLine;
            let tarket = elements.tarketLine;*/
            
            eucafloor.style.display = 'none';
            durafloor.style.display = 'none';
            espacofloor.style.display = 'none';
            quickstep.style.display = 'none';
            tarket.style.display = 'none';
            
            let activeScreen = null;
            
            switch(index) {
                case 0:
                durafloor.style.display = 'flex';
                activeScreen = screen[0]
                activeScreen.style.display = 'flex'
                galleryNumber = gallery[0];
                galleryNumber.style.display = 'flex';
                break
                case 2: 
                espacofloor.style.display = 'flex';
                activeScreen = screen[1]
                activeScreen.style.display = 'flex'
                galleryNumber = gallery[1]
                galleryNumber.style.display = 'flex';
                break
                case 3: 
                eucafloor.style.display = 'flex';
                activeScreen = screen[2]
                activeScreen.style.display = 'flex'
                galleryNumber = gallery[2];
                galleryNumber.style.display = 'flex';
                break
                case 5:
                quickstep.style.display = 'flex';
                activeScreen = screen[3]
                activeScreen.style.display = 'flex'
                galleryNumber = gallery[3];
                galleryNumber.style.display = 'flex';
                break
                case 6:
                tarket.style.display = 'flex';
                activeScreen = screen[4]
                activeScreen.style.display = 'flex';
                galleryNumber = gallery[4];
                galleryNumber.style.display = 'flex';
                break
                default:
                console.warn('Indice inválido: ', index);
            }
            console.log(galleryNumber.children);
            let filhosdaMae = Array.from(galleryNumber.children);
            filhosdaMae.forEach((teste, index) => {
                teste.addEventListener('click', () =>{
                    let floorPrincipal = activeScreen.querySelectorAll('*');
                    console.log(floorPrincipal[index].src)
                })
            })
            function prevImage() {
                if(!activeScreen) return;
                
                let prev = document.querySelector('[data-target="prev"]');
                let images = Array.from(activeScreen.querySelectorAll('*')); 
                let currentIndex = images.length - 1; 
                
                prev.addEventListener('click', () => {
                    images.forEach(img => img.style.display = 'none');
                    currentIndex = (currentIndex - 1 + images.length) % images.length; 
                    images[currentIndex].style.display = 'block';
                });
            }        
            function nextImage() {
                if (!activeScreen) return;
                let next = document.querySelector('[data-target="next"]');
                let images = Array.from(activeScreen.querySelectorAll('*')); // Obtém todas as imagens dentro de screen[1]
                let currentIndex = 0; // Começa na primeira imagem
                
                next.addEventListener('click', () => {
                    // Esconde todas as imagens
                    images.forEach(img => img.style.display = 'none');
                    
                    // Atualiza o índice para a próxima imagem
                    currentIndex = (currentIndex + 1) % images.length;
                    
                    // Exibe a imagem atual
                    images[currentIndex].style.display = 'block';
                });
            }
            prevImage();
            nextImage();
        });
    });
}
function switchBrands() {
    
}

        
        
clickBrands();
let typeEucafloor = Array.from(eucafloor.getElementsByTagName('li'));
let typeDurafloor = Array.from(durafloor.getElementsByTagName('li'));
let typeEspacofloor = Array.from(espacofloor.getElementsByTagName('li'));
let typeQuickstep = Array.from(quickstep.getElementsByTagName('li'));
let typeTarket = Array.from(tarket.getElementsByTagName('li'));


console.log();


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
    });
}

typeEucafloor.forEach((type, index) =>{
    handleType(type, index);
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
