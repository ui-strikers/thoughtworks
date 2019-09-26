var list = dom.find('.footer-item');
var popup = dom.find('.popup');
var cancel = dom.find('.cancel');

events.register(list,'click',() => {
    popup.setAttribute('style','display:block');
})

events.register(cancel,'click',() => {
    popup.setAttribute('style','display:none');
})
