
    // Add any JavaScript functionality here
    /*
    const ele = document.getElementsByClassName('result-type');
    for (let i = 0; i < ele.length; i++) {
        ele[i].addEventListener('click', function(e){
             ele[i].style.borderBottomWidth = '2px';
             ele[i].style.borderBottomStyle = 'solid';
             ele[i].style.borderBottomColor = '#dfebff';
             console.log(e.target); // The element that triggered the event
         console.log(this); // The parent of the element that triggered the event
         console.log(e.currentTarget); // The element that the event listener is attached to
         console.log(e);
        document.getElementsByClassName('result-type')[0].addEventListener('click', function(e){
        console.log(e.target); // The element that triggered the event
        this.style.borderBottomWidth = '2px';
        this.style.borderBottomStyle = 'solid';
        this.style.borderBottomColor = '#dfebff';
    });

    });}*/
    let resultTypes = () => { 
        document.querySelectorAll('.result-type').item(0).style.borderBottomWidth = '2px';
        document.querySelectorAll('.result-type').item(0).style.borderBottomStyle = 'solid';
        document.querySelectorAll('.result-type').item(0).style.borderBottomColor = '#dfebff';
       /* let resultTypeAll = document.getElementsByClassName('result-type').item(0);
        //resultTypeAll.style.borderBottomcolor = '#dfebff';
        resultTypeAll.classList.add('.allstyles');
        console.log(`working on ${resultTypeAll} \n class may be added or removed`);*/
        }
let description = document.getElementsByClassName('site-description').item(0);
console.log(description);
description.innerHTML = "<b>This is a javascript description</b>";

let resultsDisplay = () =>
{
    // if(event.key == 'a') {
    const ele = document.getElementById('result-container-zero');
    const ele2 = document.getElementById('search-results');
    if(ele.style.display == 'none' && ele2.style.display == 'none') {
        ele.setAttribute('style','display:grid;');
        ele2.setAttribute('style','display:block;');
        console.log(`working on ${ele} and ${ele2}`);
    } else {
        console.log(`working on ${ele} and ${ele2}`);
        ele.setAttribute('style','display:none;');
        ele2.setAttribute('style','display:none;');
    }
    }
// }
const allBtn = document.getElementById('result-type-all');
// document.body.addEventListener("keydown",resultsDisplay);
allBtn.addEventListener("click",resultsDisplay);

