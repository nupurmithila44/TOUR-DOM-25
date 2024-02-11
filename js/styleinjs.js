const sections = document.querySelectorAll('section');
for(const section of sections){
    console.log(section);
    section.style.border= '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '8px';
    section.style.paddingLeft = '40px';
    section.style.backgroundColor = 'lightgray';
}

// const placescontainer = document.getElementById('places-container');
// placescontainer.style.backgroundColor = 'yellow';
const placescontainer = document.getElementById('places-container');
placescontainer.classList.add('yellow-bg');

placescontainer.classList.remove('large-text');