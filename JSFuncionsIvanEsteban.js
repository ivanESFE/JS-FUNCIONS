//Ex-13 Funcions


var polo =(a,b) => {
    
    if (a==null && b!=null) {
        return b;
    }
    else if(a!=null && b==null){
        return a;
    }
    else if(a!=null && b!=null){
        return (a + ' ' + b)
    }   
}
console.log(polo(7,null))
    







