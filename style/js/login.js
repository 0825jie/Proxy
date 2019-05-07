
        jQuery(document).ready(function($){
            var $form_modal = $('.main-content'),

            $form_sign_up = $form_modal.find('#sign-up'),
            $form_log_in = $form_modal.find('#log-in'),
            $signup_submit = $('#btn-sign-up'),
            $to_sign_btn = $('#to-signup-btn');
            $to_log_btn = $('#to-login-btn');

            $to_sign_btn.on('click', function(event){
                $form_sign_up.css('display', 'block').animate({opacity:1});
                $form_log_in.css('display', 'none').animate({opacity:0});  
                
            });

            $to_log_btn.on('click', function(event){

               $form_log_in.css('display', 'block').animate({opacity:1});
               $form_sign_up.css('display', 'none').animate({opacity:0});

           });

            $signup_submit.on('click',function(e) {

                e.preventDefault();
                $form_sign_up.css('transform', 'translate(-160px,0)').animate({opacity: 0});
                $form_sign_up.css('display', 'none');
                $('#set-up').css('display' , 'block').animate({opacity: 1});
                $('#set-up').removeClass('set-up');

            });

            $('#set-up-submit').on('click', function(e){
                e.preventDefault();
                self.location = 'index.html';

            });

            $('#btn-log-in').on('click', function(e){
                e.preventDefault();
                self.location = 'index.html';
            });

        });
