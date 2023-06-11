$('.plan.yearly').hide();

const CHANGE_PLAN_BTN = '#label_plan+span';

console.log('loading main.js ....')
// show_page_2_from_1();
$(NEXT_STEP_ONE_BTN).click(function (e) { 
    e.preventDefault();
    

    if (validade_form()) {
        console.log('can not procced');
    }else{
        console.log('procced');
        show_page_2_from_1();
        localStorage.setItem('plan-payment','monthly')
        localStorage.setItem('plan','arcade');
    }
    
});

$(NEXT_STEP_TWO_BTN).click(function (e) { 
    e.preventDefault();
    show_page_3_from_2();

    // localStorage.setItem('add-ons',JSON.stringify(
    //     {
    //         online_service : true ,
    //         larger_storage : false ,
    //         Customizable_profile : false ,
    //     }
    // ));
});

$(NEXT_STEP_THREE_BTN).click(function (e) { 
    e.preventDefault();
    show_page_4_from_3();
    show_summary();
});

$(CHANGE_PLAN_BTN).click(function (e) { 
    e.preventDefault();
    console.log('change plan btn clicked!');
    show_page_2_from_4();
});

$(CONFIRMATION_BTN).click(function (e) { 
    e.preventDefault();
    show_page_5_from_4();
});





