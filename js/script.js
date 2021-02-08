function check(){
    
            var date = new Date()
            var year = date.getFullYear()
            var formyear = document.getElementById('age')
            var result = document.getElementById('result')
    if (formyear.value.length == 0 || formyear.value > year) {
        alert('[ERRO] Verifique os dados e tente novamente')
    }
    else{

            var choosesex =  document.getElementsByName('sex')
            var age = year - Number(formyear.value)
            var genre = ''
            var image = document.getElementById('image')
                        
            if (choosesex[0].checked){
                genre = 'Homem'
            
                   if( age >= 0 && age <12){
                //Crianca
                   image.src = 'img/childBoy.png'
                    }
                
                        else if (age <21){
                            //Adolescente
                            image.src = 'img/teenMan.png'
                       } 
                            else if(age <50){
                                //Adulto
                                image.src = 'img/man.png'

                            }  else{
                                //Idoso
                                image.src = 'img/oldMan.png' 

                                }
            }
                
            else if(choosesex[1].checked){
                genre= 'Mulher'
                if( age >= 0 && age <12){
                    //Crianca
                    image.src = 'img/childGirl.png'

                }
            
                    else if (age <21){
                        //Adolescente
                        image.src = 'img/teenGirl.png'

                    } 
                       else if(age <50){
                        //Adulto
                        image.src = 'img/Girl.png' 

                        }else{
                           //Idoso
                            image.src = 'img/oldGirl.png'
                         }
                
            }
            
        center.style.textAlign = 'center' 
        result.innerText = `Detectamos  ${genre} com ${age} anos`              
    } 
}         
    
