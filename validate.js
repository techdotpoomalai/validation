
const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const passwordcheak=document.getElementById('passwordcheak');


form.addEventListener('submit',function(obj)
    {
        obj.preventDefault();
       
        cheakInputs();
    });
function cheakInputs()
    {
        var usernameval=username.value;
        // var usernameval=username.parentElement.nodeName;
        var emailval=email.value;
        var passwordval=password.value;
        var passwordcheakval=passwordcheak.value;
        // window.alert(usernameval);
        var selector;

        if(usernameval==='')
            {
                // window.alert("This is Error");
                selector="user_name";
                setError(selector,"Username can't be blank");
            }
        else
            {
                selector="user_name";
                setSuccess(selector);
                // window.alert(selector);
            }
        if(emailval==='')
            {
                selector="e_mail";
                setError(selector,"Email can't be blank");
            }
        else
            {
                selector="e_mail";
                setSuccess(selector);
            }
        if(passwordval==='')
            {
                selector="pass_word";
                setError(selector,"Password can't be blank");
            }
        else if(passwordval.length < 6)
            {
                selector="pass_word";
                setError(selector,"Password at lease 6 charactor");
                // window.alert(passwordval.length);

            }
        else
            {
                // window.alert(passwordval.length);
                selector="pass_word";
                setSuccess(selector);
            }
        if(passwordcheakval==='')
            {
                selector="pass_cheak";
                setError(selector,"Password cheak can't be blank");
            }
        else if(passwordval!==passwordcheakval)
            {
                selector="pass_cheak";
                setError(selector,"Password doesn't match");
            }
        else
            {
                selector="pass_cheak";
                setSuccess(selector);
            }
    }
function setError(input,message)
    {
        const user_name=document.getElementById('username');
        const email=document.getElementById('email');
        const password=document.getElementById('password');
        const passwordcheak=document.getElementById('passwordcheak');
        // window.alert(input);
        
        switch(input)
            {
                case "user_name":
                    var form_control=username.parentElement;
                    // window.alert(input);
                    break;
                case "e_mail":
                    var form_control=email.parentElement;
                    break;
                case "pass_word":
                    var form_control=password.parentElement;
                    break;
                case "pass_cheak":
                    var form_control=passwordcheak.parentElement;
                    break;
            }
        
        var small=form_control.querySelector('small');
        small.innerText=message;
        form_control.className="form_control error";
     
    }
function setSuccess(input)
    {
        const username=document.getElementById('username');
        const email=document.getElementById('email');
        const password=document.getElementById('password');
        const passwordcheak=document.getElementById('passwordcheak');
        
        switch(input)
        {
            case "user_name":
                var form_control=username.parentElement;
                // window.alert(input);
                break;
            case "e_mail":
                var form_control=email.parentElement;
                break;
            case "pass_word":
                var form_control=password.parentElement;
                break;
            case "pass_cheak":
                var form_control=passwordcheak.parentElement;
                break;
        }
        // var form_control=username.parentElement;
        form_control.className='form_control success'
        // window.alert("This is success");
    }

