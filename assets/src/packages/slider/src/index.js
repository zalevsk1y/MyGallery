
import baguetteBox from 'baguettebox.js';
import lightSlider from 'lightslider';
import 'baguettebox.js/dist/baguetteBox.css';
import 'lightslider/dist/css/lightslider.css';
import 'lightslider/dist/img/controls.png'

window.addEventListener('DOMContentLoaded', () => {
    const defaultSettings={
        gallery: true,
        item: 1,
        loop: false,
        thumbItem: 6,
        enableDrag: true,
        enableTouch:true,
        adaptiveHeight: false,
        galleryMargin: 5,
        thumbMargin: 5,
       
    }
    const gallerySettings=window.myGalleryPluginSettings;
    const onBeforeStart=function (el) {
        const widthOfContainer=el.innerWidth();
        el.children('li').each(function (i, item) {
            var galleryItem = $(item),
                image=galleryItem.find('img'),
                imgObj=$('<img>'),
                imgWidth=parseInt(image.attr('width')),
                imgHeight=parseInt(image.attr('height')),
                currentImageHeight=widthOfContainer*(imgHeight/imgWidth);
                image.css('height',currentImageHeight+'px');
            imgObj.attr('src', galleryItem.data('src')).on('load',function(){
                image.css('height','auto');
                image.attr('src', galleryItem.data('src'));
            })
        });
    }
    $(".my-gallery-list").each(function(key,value){
       var settings=gallerySettings[key]?gallerySettings[key]:defaultSettings;
        settings.onBeforeStart=onBeforeStart;
        $(value).lightSlider(settings)
    })
    
    baguetteBox.run('.my-gallery-list');
   
})