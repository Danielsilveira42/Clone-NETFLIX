$('.owl-carousel').owlCarousel({
    loop:true,            //navega de forma infinita, se TRUE. Se FALSE quando chega ao fim para.
    margin:10,            //margen entre um poster e outro.
    nav:true,            //se false desabilita o botãozinho "< >".
    responsive:{          //faz com que o site se ajuste a tela.
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})