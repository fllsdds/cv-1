let html = document.querySelector('#demo');
let style = document.querySelector('#style')
let string = `
/*你好，我是派大星
我要添加样式*/
body{
  color:red;
}
#div1{
  border: 1px solid red;
  width:200px;
  height:200px;
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border:none;
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
#div1::before{
  content:"";
  display:block;
  height:100px;
  width:100px;
  border: 1px solid black;
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  border:none;
  background: radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
  border-radius:50%;
}
#div1::after{
  content:"";
  display:block;
  height:100px;
  width:100px;
  border: 1px solid black;
  position:absolute;
  left:50%;
  bottom:0;
  transform:translateX(-50%);
  border:none;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%);
  border-radius:50%;
}
`
let string2 = ``
let n = 0;
// string = string.replace(/\n/g, "<br>"),这种方法可以实现换行，但是会有难看的尖括号
console.log(string)

let step = ()=>{
  setTimeout(()=>{
    if(n<string.length){
      if(string[n] === '\n'){
        string2 += '<br>'
      }
      else if(string[n] === " "){
        string2 += '&nbsp'
      }
      else{
        string2 += string[n]
      }        
    html.innerHTML = string2;
    style.innerHTML = string.substring(0,n);
    window.scrollTo(0,99999);
    html.scrollTo(0,99999)
    n += 1;
    step()
    }    
  },10)
}

step()
