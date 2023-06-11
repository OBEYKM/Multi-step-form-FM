

$('.step.two > .content > .cards > .card').click(function (e) { 
    e.preventDefault();
    console.log('card clicked!');

    unselect_all_cards();

    console.log();

    const plan = e['currentTarget'].classList[1];

    $('.step.two > .content > .cards > .card.'+plan).addClass('selected');

    localStorage.setItem('plan',plan);
    
    

});

$(".side-shift > .circle").click(function (e) { 
    e.preventDefault();
    
    $('.side-shift > .circle').toggleClass("shift-plan-period");

    $('.monthly-yearly > span').toggleClass('selected');

    // console.log($(".monthly-yearly > span:first-child").hasClass('selected'));
    is_monthly = $(".monthly-yearly > span:first-child").hasClass('selected');

    if (is_monthly) {
        console.log('monthly plan chosen');
        localStorage.setItem('plan-payment','monthly')
        $('.plan.monthly').show();
        $('.plan.yearly').hide();
        show_monthly_add_ons();
    }else{
        console.log('yealy plan chosen');
        localStorage.setItem('plan-payment','yearly')
        $('.plan.yearly').show();
        $('.plan.monthly').hide();
        show_yearly_add_ons();
    }

    // localStorage.setItem('monthly-yearly',plan);
});

const unselect_all_cards = ()=>{
    $('.step.two > .content > .cards > .card').removeClass('selected');
}

const show_monthly_add_ons = ()=>{
  
    $('#price_monthly_service').show();
    $('#price_yearly_service').hide();

    $('#price_monthly_storage').show();
    $('#price_yearly_storage').hide();

    $('#price_monthly_profile').show();
    $('#price_yearly_profile').hide();
}

const show_yearly_add_ons = ()=>{
    $('#price_monthly_service').hide();
    $('#price_yearly_service').show();

    $('#price_monthly_storage').hide();
    $('#price_yearly_storage').show();

    $('#price_monthly_profile').hide();
    $('#price_yearly_profile').show();
}


$('.card-add-ons > .card > input[type="checkbox"] ').click(function (e) { 
    console.log('checkbox clicked!')

    const input = e['currentTarget'];
    const input_id =  input.id;
    const is_checked = input.checked;
    // localStorage.setItem('add-ons',JSON.stringify(
    //     {
    //         online_service : true ,
    //         larger_storage : false ,
    //         Customizable_profile : false ,
    //     }
    // ));
    let add_ons = JSON.parse(localStorage.getItem('add-ons'));
    if (!add_ons) {
        console.log('nothing found on add-ons , initializing it')
        add_ons =  {
                    online_service : false ,
                    larger_storage : false ,
                    Customizable_profile : false ,
                }
    }

    switch (input_id) {
        case 'online-service':
                $('.card-add-ons > .card:first-child').toggleClass('selected');
                is_checked ? add_ons.online_service = true : add_ons.online_service = false ;
            break;
    
        case 'larger-storage':
                $('.card-add-ons > .card:nth-child(2)').toggleClass('selected');
                is_checked ? add_ons.larger_storage = true : add_ons.larger_storage = false ;
        break;

        case 'Customizable-profile':
                $('.card-add-ons > .card:nth-child(3)').toggleClass('selected');
                is_checked ? add_ons.Customizable_profile = true : add_ons.Customizable_profile = false ;

        break;

        default:
            break;
    }

   localStorage.setItem('add-ons' , JSON.stringify(add_ons));

    console.log(add_ons);




});