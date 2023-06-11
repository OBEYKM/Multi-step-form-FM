
const YEARLY = 'yearly';
const MONTHLY = 'monthly';

const show_summary = ()=>{

    let plan_cost = 0;
    let add_ons_cost = 0;
    
    const plan = localStorage.getItem('plan');
    const cap_plan = plan.charAt(0).toUpperCase() + plan.slice(1);

    const period = localStorage.getItem('plan-payment');

    const add_ons = JSON.parse(localStorage.getItem('add-ons'));

    $('#label_plan').html('<b>'+cap_plan+'</b>'+"(<b>"+period+")</b>");

    if (plan=='arcade') {
        if (period=='monthly') {
            $('#label_plan_cost').html('$9/mon');
            plan_cost = 9;
        }else{
            $('#label_plan_cost').html('$90/mon');
            plan_cost = 90;
        }
        
    }

    if (plan=='advanced') {
        if (period=='monthly') {
            $('#label_plan_cost').html('$12/mon');
            plan_cost = 12;
        }else{
            $('#label_plan_cost').html('$120/mon');
            plan_cost = 120;
        }
        
    }

    if (plan=='pro') {
        if (period=='monthly') {
            $('#label_plan_cost').html('$15/mon');
            plan_cost = 15;
        }else{
            $('#label_plan_cost').html('$150/mon');
            plan_cost = 150;       
        }
    }
    // $('#label_plan_period').html('('+period+")");

//     <div class="options">
//     <span>larger Strorage</span>
//     <span>+$2/mon</span>
//   </div>

    let options = '';
    console.log('get add-ons from summary'+add_ons);

    const plan_payment = localStorage.getItem('plan-payment');
    // console.log('add_ons.online_service!=null => '+add_ons.online_service!=null);

    if (add_ons!=null) {
        if (add_ons.online_service!=null && add_ons.online_service==true ) {
        
            // const value = plan_payment == YEARLY ? '+$10/yr' : '+$1/mon';
            const value = plan_payment == YEARLY ? 10 : 1;
            options+='<div style="margin-top:15px; color:hsl(231, 11%, 63%);" class"options" >'
            options+='<span>online service </span>'
            options+='<span>+$' + value +(plan_payment==YEARLY? '/yr' : '/mo')+'</span>';
            add_ons_cost += value;
        }
        
        
        if (add_ons.larger_storage!=null && add_ons.larger_storage==true) {
            
            // const value = plan_payment == YEARLY ? '+$20/yr' : '+$2/mon';
            const value = plan_payment == YEARLY ? 20 : 2;
            options+='<div style="margin-top:15px; color:hsl(231, 11%, 63%);" class"options" >'
            options+='<span>larger storage </span>'
            options+='<span>+$' + value +(plan_payment==YEARLY? '/yr' : '/mo')+'</span>'
            add_ons_cost += value;
        } 
    
        if (add_ons.Customizable_profile!=null && add_ons.Customizable_profile==true) {
            
            // const value = plan_payment == YEARLY ? '+$20/yr' : '+$2/mon';
            const value = plan_payment == YEARLY ? 20 : 2;

            options+='<div style="margin-top:15px; color:hsl(231, 11%, 63%);" class"options" >'
            options+='<span>customizable profile </span>'
            options+='<span>+$' + value +(plan_payment==YEARLY? '/yr' : '/mo')+'</span>'
            add_ons_cost += value;
        }
    }

    
    // period.larger_storage ? options+='<span>lar</span>'

    const total_value = plan_cost + add_ons_cost;

    
    $('#add-ons-option').html(options);
    $('#label_total_cost').html('Total '
                                    +(plan_payment==YEARLY ? '(per year)' : '(per month)'));
    $('#total_cost').html('$'
                            +total_value 
                            +(plan_payment==YEARLY ? '/yr' : '/mo'));
}