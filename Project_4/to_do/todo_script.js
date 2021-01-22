let work, date, time;
let input=document.getElementsByTagName('input');
let main_page = document.querySelector('#main_page');
let btn = document.getElementById('add');

btn.addEventListener('click', (e) => {
    work = document.getElementById('user_input').value;
    date = document.getElementById('date').value;
    time = document.getElementById('time').value;
    console.log(work);
    console.log(date);
    console.log(time);
    additem(work, date, time);
    
})


function additem(work, date, time) {
 
    
    var element1 = document.createElement('div');
    element1.setAttribute("id", "item_div");
    main_page.appendChild(element1);
    
    var w = document.createElement('div');
    w.setAttribute("id", "item1");
    w.innerHTML = work;
    
    var d = document.createElement('div');
    d.setAttribute("id", "item2");
    d.innerHTML = date;
    
    var t = document.createElement('div');
    t.setAttribute("id", "item3");
    t.innerHTML = time;

    var close = document.createElement('img')
    close.setAttribute("src", "https://img.icons8.com/nolan/64/delete-sign.png");
    var del_btn = document.createElement('button');
    del_btn.setAttribute("class", "delete_button");
    del_btn.appendChild(close);
    element1.appendChild(w);
    element1.appendChild(d);
    element1.appendChild(t);
    element1.appendChild(del_btn);
    
    var bk = document.createElement('br');
    element1.appendChild(bk);
   
  //  console.log(element1);
 addstyle(element1, w, d, t);

 for(let i=0;i<input.length;i++){
   document.getElementsByTagName('input').value="";}
  /* 
 if(document.getElementsByTagName('input').value===""){
      window.alert("please enter the field!");
    }*/
}
 

let sty = document.createElement('style');
function addstyle(element1, w, d, t) {
    console.log("entry to add styles");
    //var sty=document.createElement('style');
    sty.innerHTML += '#item_div{display: flex;justify-content: center;align-items: center; height: max-content;width: max-content; background-color:orange;padding: 5px; border-radius: 5px;box-shadow: dimgrey;margin-bottom:3px;margin-left:20%;}';
    sty.innerHTML += '#item1,#item2,#item3{border-radius:5px;padding:5px;font-weight: bold;font-size: 1.5em;font-family: "poppins";color:black; backgr:white;background-color: white; min-width:250px; margin-right:5px;}';
    sty.innerHTML += 'img{width:25px;height:25px;}';
    var head = document.querySelector('head');
    head.appendChild(sty);
   // let del = document.querySelectorAll('.delete_button');
    
element1.addEventListener('click', (e) => {     
    var tar= e.target;
    console.log(tar);
    var parent1 = tar.parentElement;
    var parent2=parent1.parentElement;
    parent2.remove();
    });
    }


