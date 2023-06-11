
const STEP_ONE = '.step.one';
const STEP_TWO = '.step.two';
const STEP_THREE = '.step.three';
const STEP_FOUR = '.step.four';
const STEP_FIVE = '.step.five'

const TO_ONE = 'to-one';
const TO_TWO = 'to-two';
const TO_THREE = 'to-three';
const TO_FOUR = 'to-four';
const TO_FIVE = 'to-five';

const CURRENT_ONE = 'current-one';
const CURRENT_TWO = 'current-two';
const CURRENT_THREE = 'current-three';
const CURRENT_FOUR = 'current-four';

const NEXT_STEP_ONE_BTN = '.btn.next.'+CURRENT_ONE+'.'+TO_TWO;
const NEXT_STEP_TWO_BTN = '.btn.next.'+CURRENT_TWO+'.'+TO_THREE;
const NEXT_STEP_THREE_BTN = '.btn.next.'+CURRENT_THREE+'.'+TO_FOUR;
const NEXT_STEP_FOUR_BTN = '.btn.next.'+CURRENT_FOUR+'.'+TO_FIVE;


const BACK_STEP_TWO_BTN = '.btn.back.'+CURRENT_TWO+'.'+TO_ONE;
const BACK_STEP_THREE_BTN = '.btn.back.'+CURRENT_THREE+'.'+TO_TWO;
const BACK_STEP_FOUR_BTN = '.btn.back.'+CURRENT_FOUR+'.'+TO_THREE;

const CONFIRMATION_BTN = '#btn_four';
// $('.step.two').hide();

///////////////////////////// NEXT navigation

const show_page_2_from_1 = ()=>{
    // $(NEXT_STEP_ONE_BTN).click(function (e) { 
        // e.preventDefault();
        console.log('clicked next!');
    
        console.log('go to step 2 from step one');
        showStep(NEXT_STEP_ONE_BTN,STEP_ONE, STEP_TWO);
    // });
}

const show_page_3_from_2 = ()=>{
    // $(NEXT_STEP_TWO_BTN).click(function (e) { 
        // e.preventDefault();
        console.log('clicked next from '+CURRENT_TWO+" ->  "+TO_THREE);
    
        showStep(NEXT_STEP_TWO_BTN ,STEP_TWO, STEP_THREE , NEXT_STEP_THREE_BTN);
    // });
}

const show_page_4_from_3 = ()=>{
    // $(NEXT_STEP_THREE_BTN).click(function (e) { 
        // e.preventDefault();
        console.log('clicked next from '+CURRENT_THREE+" ->  "+TO_FOUR);
    
        showStep(NEXT_STEP_THREE_BTN ,STEP_THREE, STEP_FOUR);
    // });
}

const show_page_5_from_4 = ()=>{
    // $(NEXT_STEP_FOUR_BTN).click(function (e) { 
        // e.preventDefault();
        console.log('clicked next from '+CURRENT_FOUR+" ->  "+TO_FIVE);
    
        showStep(NEXT_STEP_FOUR_BTN ,STEP_FOUR, STEP_FIVE);
    // });    
}

const show_page_2_from_4 = ()=>{

    console.log('clicked next from change plan btn');
    
    // showStep( null,STEP_FOUR, STEP_FIVE);
    showStep(null,STEP_FOUR, STEP_TWO , NEXT_STEP_TWO_BTN);

}









////////////////////////// PREVIOUS Nevagation

$(BACK_STEP_TWO_BTN).click(function (e) { 
    e.preventDefault();
    console.log('clicked prev!');

    console.log('go to step 1 from step two');
    showStep(
        CURRENT_TWO
        ,STEP_TWO
        ,STEP_ONE
        ,NEXT_STEP_ONE_BTN);
});

$(BACK_STEP_THREE_BTN).click(function (e) { 
    e.preventDefault();
    console.log('clicked prev!');

    console.log('go to step 2 from step three');
    showStep(CURRENT_THREE
            ,STEP_THREE
            ,STEP_TWO
            ,NEXT_STEP_TWO_BTN,
            BACK_STEP_TWO_BTN);
});


$(BACK_STEP_FOUR_BTN).click(function (e) { 
    e.preventDefault();
    console.log('clicked prev!');

    console.log('go to step 2 from step three');
    showStep(CURRENT_THREE
            ,STEP_FOUR
            ,STEP_THREE
            ,NEXT_STEP_THREE_BTN,
            BACK_STEP_THREE_BTN);
});


const showStep = (
    current_btn =null
    ,to_hide
    ,to_show
    ,prev_btn = null
    ,prev_back_btn=null)=>{

    const screenWidth = window.innerWidth;
    console.log('screen width : ' + screenWidth );


    if (screenWidth>=1393) {
        $('.push-left').css('transform', 'translateX(-13rem)');
    }

    if (screenWidth>=1000) {
        $('.push-left').css('transform', 'translateX(-10rem)');
    }
    if (screenWidth>=900) {
        $('.push-left').css('transform', 'translateX(-10rem)');
    }

    $('.push-left').css('opacity', '0');
    
   swichStepIcon(to_show);

    setTimeout(()=>{
        $(to_hide).hide();
        if (current_btn) {
            $(current_btn).hide();
        }
        
    },500);

    setTimeout(()=>{
        $(to_show).show();
        if(prev_btn){
            console.log('prev btn => ',prev_btn);
            $(prev_btn).show();
        }
        if (prev_back_btn) {
            $(prev_back_btn).show();
        }
    },500)

   setTimeout(() => { 
        $('.push-left').css('transform', 'translateX(0)');
        $('.push-left').css('opacity', '100%');
   }, 600);
    // $('.step.two').show();

}


const swichStepIcon = (to_show)=>{

    switch(to_show){
        case STEP_ONE :
            un_select_all_step_icon();
            $('.sidebar :nth-child(1) > .circle').addClass('selected');
            break;
        
            case STEP_TWO :
                un_select_all_step_icon();
                $('.sidebar :nth-child(2) > .circle').addClass('selected');
                break;

                case STEP_THREE :
                    un_select_all_step_icon();
                    $('.sidebar :nth-child(3) > .circle').addClass('selected');
                    break;

                    case STEP_FOUR :
                        un_select_all_step_icon();
                        $('.sidebar :nth-child(4) > .circle').addClass('selected');
                        break;
    }

    

}


const un_select_all_step_icon = ()=>{
    $('.sidebar :nth-child(1) > .circle').removeClass('selected');
    $('.sidebar :nth-child(2) > .circle').removeClass('selected');
    $('.sidebar :nth-child(3) > .circle').removeClass('selected');
    $('.sidebar :nth-child(4) > .circle').removeClass('selected');
}