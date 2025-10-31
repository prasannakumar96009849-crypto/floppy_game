$(document).ready(function() {
    let score = 0;
    let container_width = parseInt($('#game-container').width());
    let container_height = parseInt($('#game-container').height());
    let port_start_pos = parseInt($('.port').css('right'));
    let pole_height = parseInt($('.port').css('height'));
    let port1_left = parseInt($('#port1').css('left'));
    
    let bird_left = parseInt($('#bird').css('left'));
    let bird_width = parseInt($('#bird').css('width'));
    
    
    var speed =10;
    var b = 4;  
    
    score_bool = false;
         
    let game = setInterval(function() {
        
        let port_pos = parseInt($('.port').css('right'));
        let bird_top = parseInt($('#bird').css('top'));
        let bird_height = parseInt($('#bird').css('height'));
        let bird_bottom = bird_top + bird_height;
       
        let bird_right = bird_left + bird_width;
        
        let port_left = parseInt($('.port').css('left'));
        let port_width = parseInt($('.port').css('width'));
        let port_right = port_left + port_width;

        let port1_height = parseInt($('#port1').css('height'));
        let port2_height = parseInt($('#port2').css('height'));
        let gap_top = port1_height;
        let gap_bottom = container_height - port2_height;

        if(port_pos>container_width - bird_left)
        {
          if(score_bool===false)
          {       
          score++;
          $("#score-display").text("Score:"+score);
          score_bool=true;
          }
        }
          
        
        if(port_pos > container_width) {
            let new_height =Math.random() * 100;
            $('#port1').css('height',pole_height + new_height);
            $('#port2').css('height',pole_height - new_height);
           speed++;
           port_pos = port_start_pos;
           score_bool=false;
        }
        

        
        $(document).on('keydown', function(a) {
           $('#bird').css('top',bird_bottom - 100);
         });            
         $('.port').css('right', port_pos + speed);         
         $('#bird').css('top',bird_top + b);
 

        if (bird_right > port_left && bird_left < port_right) {
            if (bird_top < gap_top || bird_bottom > gap_bottom) {
                clearInterval(game);
                alert("Game over.");
            }
        }

         if(bird_top > container_height ) {
            clearInterval(game);
            alert("Game over.");
         }   
           
        
        if(bird_top <= 0){
          clearInterval(game);
          alert("Game over.");
        }

    },20);
     
});