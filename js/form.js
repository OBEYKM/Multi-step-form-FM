
const validade_form = ()=>{

    let error = false;
    localStorage.clear();
    $('input[id="name"]').removeClass('input-error');
    $('input[id="email"]').removeClass('input-error');
    $('input[id="number"]').removeClass('input-error');

    $('#name-error-message').html("");
    $('#email-error-message').html("");
    $('#number-error-message').html("");

    const data = {}; 
    data['name'] = $('input[id="name"]').val().trim();
    data['email'] = $('input[id="email"]').val().trim();
    data['number'] = $('input[id="number"]').val().trim();
    console.log("input data : ",data);

    if (data.name == '') {
        console.log('no name');
        $('input[id="name"]').addClass("input-error")
        $('#name-error-message').html("this field is required");
        error = true;
    }

    if (data.email == '') {
        console.log('no email');
        $('input[id="email"]').addClass("input-error")
        $('#email-error-message').html("this field is required");
        error = true;
    }

    if (data.number == '') {
        console.log('no number');
        $('input[id="number"]').addClass("input-error")
        $('#number-error-message').html("this field is required");
        error = true;
    }

    if (!error) localStorage.setItem('user-info',JSON.stringify(data));
    

    return error;
}