//1
//12    
//123
//1234
//12345

let n = 5; 
for (let i = 1; i <= n; i++) { 
    let str = "* "; 
    let space = '  '; 
    console.log(space.repeat((n-i))+str.repeat(i*2-1));
}

