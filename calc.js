let operator='';
let fnum='';
let snum='';
function append(number){
    if(operator==='')
    {
        fnum+=number;
        document.getElementById('result').value=fnum;

    }
    else{
        snum+=number;
        document.getElementById('result').value=snum;
    }
}
function operation(op){
    operator=op;
}
function calculate(){
    let res;
    switch(operator){
        case '+':
            res=parseInt(fnum)+parseInt(sn);
            break;
        case '-':
                res=parseInt(fn)-parseInt(sn);
                break;
        case '*':
                 res=parseInt(fn)*parseInt(sn);
                break;
        case '/':
                 res=parseInt(fn)/parseInt(sn);
                break;
                    
    }
    document.getElementById('result').value=res;

}
function clearesult(){
    operator='';
    fn='';
    sn='';
    document.getElementById('result').value='';

}