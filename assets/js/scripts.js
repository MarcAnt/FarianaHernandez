
document.addEventListener('DOMContentLoaded', e => {



    const header = document.querySelector('.navbar-header'); 
    const btnUp = document.createElement('div')
    btnUp.setAttribute('class', 'btn-up');
    btnUp.id = 'btn-up'
    btnUp.style.fontSize = '2em'
    btnUp.style.opacity = '0'
    btnUp.classList.add('colorPrincipal')
    btnUp.classList.add('d-flex')
    btnUp.classList.add('justify-content-center')
    btnUp.classList.add('align-items-center')
    btnUp.innerHTML = '<i class="fas fa-arrow-up"></i>'
    document.body.appendChild(btnUp)

    let posicionScroll = 0

    //Control de botón up
    let controlBtnUp = () => {

        intervalo = setInterval(function() {

            posicionScroll -= 10; 

            if(posicionScroll === header.offsetTop || posicionScroll < 0) {
                posicionScroll = 0; 
                clearInterval(intervalo)
            }

            window.scrollTo(0, posicionScroll);

        }, 20)

    }

    let control = true 
    let control2 = true 
    window.addEventListener('scroll', (e) => {
        //Control de botón up
        // posicionScroll = window.pageYOffset;
        
        //Control del header
        
        if(scrollY > 150) {
            // header.style.backgroundColor = 'rgba(255, 255, 255, .5)'
            
            btnUp.style.cursor = 'pointer'
            btnUp.style.opacity = '1'
            btnUp.addEventListener('click', controlBtnUp)
        }else { 
            // header.style.backgroundColor = 'rgba(255, 255, 255, 1)'
            
            
            btnUp.style.opacity = '0'
            btnUp.style.cursor = 'default'
            btnUp.removeEventListener('click', controlBtnUp)
        }


      
        if( scrollY >= document.querySelector('.consultas').offsetTop  -300) {
            

            if(control) {

                anime({
                    targets: '.consultas h1:nth-child(1)',
                    scale: [0, 1],
                    opacity: [0, 1],
                    duration: 1000
                   
                });

                anime({
                    targets: '.horarios h2',
                    translateY: [5, 0],
                    direction: 'alternate',
                    duration: 250,
                    delay: 1000,
                    easing: 'easeInOutSine'
                   
                });

                anime({
                    targets: '.servicios h2',
                    translateY: [5, 0],
                    direction: 'alternate',
                    duration: 250,
                    delay: 2000,
                    easing: 'easeInOutSine'
                   
                });

                control = false
            }
            
            control = false
        }else  {
            
            control = true
        }

        if( scrollY >= document.querySelector('.trabajos').offsetTop  - 300) {
            

            if(control2) {

                anime({
                    targets: '.trabajos h1',
                    rotate: [0, '10deg'],
                    duration: 1000,
                    easing: 'easeInOutSine'
                   
                });


                control2 = false
            }
            
            control2 = false
        }else  {
            
            control2 = true
        }
        

    })

    //Fecha para el footer
    const yearText = document.getElementById('year'); 
    let fecha = new Date(); 
    yearText.innerText = fecha.getFullYear()
  

    
    //Animaciones

    anime({
        targets: '#numero',
        translateY: 5,
        duration: 1000,
        direction: 'alternate',
        delay: 1000,
        loop: true,
        easing: 'easeInOutSine'
    });

    anime({
        targets: '.texto-centro ',
        scale: [0, 1],
        duration: 2000,
        easing: 'easeInOutSine'
    });


    let animation = anime({
        targets: '.triangulo',
        rotate: '1turn',
        duration: 20000,
        loop: true,
        autoplay: false,
        easing: 'easeInOutSine'
    });
    document.querySelector('#section-info').onmouseover = animation.play;
    document.querySelector('#section-info').onmouseleave = animation.pause;


    //Animaciones para la galería
    let images = [...document.querySelectorAll('.img-galery')], imageModal = document.getElementById('img-modal')

    // let idImg = {
    //     'grupo-uno': ['img-1', 'img-2'],
    //     'grupo-dos': ['img-3'],
    //     'grupo-tres': ['img-4', 'img-5']
    // }
    
 
    

    document.querySelector('.galery-content').addEventListener('click', e => {
        
        if(e.target.tagName == 'IMG')  {
           
            imageModal.src = e.target.src
            $('#modal-image').modal('show')
        }
        
    })

    // let img1 = document.getElementById('img-1')
    // console.log(images[0].src);
    
    let timeRandom =  () => {
        return Math.floor( (Math.random() * 10 ) + 5 ) * 1000
    }

    setInterval( function () {

        images[0].src = 'assets/img/img'+ Math.floor( (Math.random() * 3 ) + 1 )+'.jpeg'
        
        anime({
            targets:  `#${images[0].id}`,
            opacity: [0, 1],
            duration:500,
            easing: 'easeInOutSine'
        });

        console.log(Math.floor( (Math.random() * 3 ) + 1 ));
        

    }, timeRandom())

   

    setInterval( function () {

    
        images[1].src = 'assets/img/img'+ Math.floor( (Math.random() * 2 ) + 4 )+'.jpeg'
            
        anime({
            targets:  `#${images[1].id}`,
            opacity: [0, 1],
            duration:500,
            easing: 'easeInOutSine'
        });
       
        
    }, timeRandom())


    setInterval( function () {

    
        images[2].src = 'assets/img/img'+ Math.floor( (Math.random() *  4) + 6 )+'.jpeg'
            
        anime({
            targets:  `#${images[2].id}`,
            opacity: [0, 1],
            duration:500,
            easing: 'easeInOutSine'
        });
       

    }, timeRandom())

    setInterval( function () {

    
        images[3].src = 'assets/img/img'+ Math.floor( (Math.random() *  2) + 10 )+'.jpeg'
            
        anime({
            targets:  `#${images[3].id}`,
            opacity: [0, 1],
            duration:500,
            easing: 'easeInOutSine'
        });
       

    }, timeRandom())

    setInterval( function () {

    
        images[4].src = 'assets/img/img'+ Math.floor( (Math.random() *  3 ) + 12 )+'.jpeg'
            
        anime({
            targets:  `#${images[4].id}`,
            opacity: [0, 1],
            duration:500,
            easing: 'easeInOutSine'
        });
       

    }, timeRandom())

    
    

  
    

}); 

