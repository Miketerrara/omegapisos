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
    photoSelection: document.querySelector('.block-pisos__principal--selection'),
    photoInspire: document.querySelector('.block-inspire__principal--img'),
    photoInspireThumbs: document.querySelectorAll('.block-inspire__gallery--img'),
}
elements.bar.addEventListener('click', () =>{
    elements.barScreen.classList.toggle('bar-modal--active');
});

elements.closeBarScreen.addEventListener('click', () => {
    elements.bar.dispatchEvent(new Event('click'));
})

function updateChildren() {
        if (window.innerWidth <= 767) {
            children = elements.brandsMobile.querySelectorAll('*');
        } else {
            children = elements.brandsSelect.querySelectorAll('*');
        }
    }
let pageTitle = document.getElementsByTagName('title');
if (pageTitle[0].innerHTML === 'Coleção de pisos') {
    let eucafloor = elements.eucafloorLine;
    let durafloor = elements.durafloorLine;
    let espacofloor = elements.espacofloorLine;
    let quickstep = elements.quickLine;
    let tarket = elements.tarketLine;
    
    updateChildren();
    window.addEventListener('resize', updateChildren);
    let arrayChildren = Array.from(children);
    
    function clickBrands () {
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
        arrayChildren.forEach((item, index) => {
            item.addEventListener('click', () => {
                arrayChildren.forEach(otherItem => {
                    otherItem.classList.remove('item-brand--active');
                    screen.forEach(anotherItem => anotherItem.style.display = 'none');
                    gallery.forEach(galleryItem => galleryItem.style.display = 'none');
                });
                item.classList.add('item-brand--active');
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
    clickBrands();
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
}
if (pageTitle[0].innerHTML === 'Inspiração') {

    const __gallery = {
        durafloor: ['../assets/DF_LVT_Colado_Urban_Sinai_BP_Essencial_Azul-Secreto_out.18-scaled.jpg',],
        arquitech: ['../assets/arquitech/foto01_arquitech.jpg',],
        espaçofloor: ['../assets/espaco-floor/Banner-Piso-Laminado-Comfort-Home.jpg'],
        eucafloor: ['../assets/eucafloor-basic-inspiration_05.jpg'],
        quickstep: ['../assets/qs/square-lr.jpeg'],
        tarkett: ['../assets/tarkett/line_thumb banner piemonte_16736328015092.png'],
        durafloorThumb: ['../assets/DF_New-Way_Milao_fev.17-scaled.jpg', '../assets/DF_Nature_Belgrado_BP_Essencial_Gepeto_set.17-scaled.jpg', '../assets/DF_Studio_Carvalho-Hanover_BP_Essencial-Wood_Freijo-Puro_fev.19-scaled.jpg','../assets/nagoya-ambiente-listagem.png'],
        arquitechThumb:['../assets/arquitech/foto02_arquitech.jpg','../assets/arquitech/foto03_arquitech.jpg','../assets/arquitech/foto04_arquitech.jpg', '../assets/arquitech/foto05_arquitech.jpg'],
        espaçofloorThumb:['../assets/espaco-floor/Office-Mild.jpg','../assets/espaco-floor/Pietra-ambientada.jpg', '../assets/espaco-floor/Royal-Mild-Ambientada.jpg', '../assets/espaco-floor/Soft-ambientada.jpg', '../assets/espaco-floor/Solid-Plank-Easy-Ambientada.jpg'],
        eucafloorThumb: ['../assets/eucafloor/169500-1200-1200.webp', '../assets/eucafloor-basic-image_01.jpg', '../assets/eucafloor/169510-1200-1200.webp','../assets/eucafloor-basic-inspiration_02.jpg'],
        quickstepThumb: ['../assets/qs/square-2.jpeg', '../assets/qs/square3.jpeg', '../assets/qs/square4.jpeg', '../assets/qs/square5.jpeg', '../assets/qs/square7.jpeg', '..assets/qs/square6.jpeg'],
        tarkettThumb: ['../assets/tarkett/line_Design sem nome (22)_16875189245177.png', '../assets/tarkett/line_banner_square_1535479937.jpg', '../assets/tarkett/line_BANNER - SPC_17212272711775.png', '../assets/tarkett/line_AMBIENTA STUDIO - STONE - TITANIUM - 24040681_15894738147037.jpg']
    }

    elements.brandsSelect.querySelectorAll('*').forEach((item, index) => {
        item.addEventListener('click', () => {
            elements.brandsSelect.querySelectorAll('*').forEach(otherItem => otherItem.classList.remove('item-brand--active'))
            item.classList.add('item-brand--active');
            switch(index) {
                case 0:
                elements.photoInspire.src = __gallery.durafloor;
                for(let i= 0; i < elements.photoInspireThumbs.length; i++){
                    let photo = elements.photoInspireThumbs[i %4];
                    photo.src = __gallery.durafloorThumb[i];
                }
                break;
                case 1:
                elements.photoInspire.src = __gallery.arquitech;
                for(let i= 0; i < elements.photoInspireThumbs.length; i++){
                    let photo = elements.photoInspireThumbs[i %4];
                    photo.src = __gallery.arquitechThumb[i];
                }
                break;
                case 2:
                elements.photoInspire.src = __gallery.espaçofloor;
                for(let i= 0; i < elements.photoInspireThumbs.length; i++){
                    let photo = elements.photoInspireThumbs[i %4];
                    photo.src = __gallery.espaçofloorThumb[i];
                }
                break;
                case 3:
                elements.photoInspire.src = __gallery.eucafloor;
                for(let i= 0; i < elements.photoInspireThumbs.length; i++){
                    let photo = elements.photoInspireThumbs[i %4];
                    photo.src = __gallery.eucafloorThumb[i];
                }
                break;
                case 4:
                elements.photoInspire.src = __gallery.quickstep;
                for(let i= 0; i < elements.photoInspireThumbs.length; i++){
                    let photo = elements.photoInspireThumbs[i %4];
                    photo.src = __gallery.quickstepThumb[i];
                }
                break;
                case 5:
                    elements.photoInspire.src = __gallery.tarkett;
                    for(let i= 0; i < elements.photoInspireThumbs.length; i++){
                        let photo = elements.photoInspireThumbs[i %4];
                        photo.src = __gallery.tarkettThumb[i];
                    }
                break;
            }
        })
        
        
    })   
}