const p1={
    score:0,
    btn:document.querySelector('#p1Button'),
    num:document.querySelector('#p1Display')
}
const p2={
    score:0,
    btn:document.querySelector('#p2Button'),
    num:document.querySelector('#p2Display')
}
let section = document.querySelector("section");
const reset = document.querySelector('#reset');
const selects = document.querySelector('#playto');
let winningscore =3;
let gameover=false;
p1.btn.addEventListener('click',function(){
    updatescore(p1,p2)})
p2.btn.addEventListener('click',function(){
    updatescore(p2,p1)})
reset.addEventListener('click',resets)
selects.addEventListener('change',function(){
    winningscore=parseInt(this.value)
    resets()
})
function resets(){
    gameover=false;
    p1.score=0;
    p2.score=0;
    p1.num.textContent=p1.score;
    p2.num.textContent=p2.score;
    p1.num.classList.remove('has-text-success','has-text-danger')
    p2.num.classList.remove('has-text-success','has-text-danger')
    p1.btn.disabled=false;
    p2.btn.disabled=false
}
function updatescore(player,opponent)
{
   if(!gameover)
   {
       player.score+=1;
       if(player.score===winningscore)
       {
           gameover=true;
           player.num.classList.add('has-text-success');
           opponent.num.classList.add('has-text-danger');
           player.btn.disabled=true
           opponent.btn.disabled=true
       }
       player.num.textContent=player.score;
   }

}
