const bd = document.querySelector('body')
const buttns = document.querySelectorAll('.button')
// console.log(bd);

buttns.forEach( function (buttn) {
    console.log(buttn);
    buttn.addEventListener('click', (events) => {
        
        switch (events.target) {
            case grey:
                bd.style.backgroundColor= events.target.id;
                break;
            case white:
                bd.style.backgroundColor= events.target.id;
                break;
            case blue:
                bd.style.backgroundColor= events.target.id;
                break;
            case cyan:
                bd.style.backgroundColor= events.target.id;
                break;
        
            default:
                console.log(`ntg`);
                
                break;
        }
        
    })
} );