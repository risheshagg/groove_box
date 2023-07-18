console.log('wecome');
let songIndex=0;
let mastername=document.getElementById('mastername');
let audioelement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songname:"In The End", filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"},
    {songname:"Faint", filePath:"songs/2.mp3" , coverPath:"covers/2.jpg"},
    {songname:"Shadow Of The Day", filePath:"songs/3.mp3" , coverPath:"covers/3.jpg"},
    {songname:"One Step Closer", filePath:"songs/4.mp3" , coverPath:"covers/4.jpg"},
    {songname:"Numb", filePath:"songs/5.mp3" , coverPath:"covers/5.jpg"},
];
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;

})
masterPlay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.current==0)
    {
        audioelement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }
    else{
        audioelement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioelement.currentTime=myProgressBar.value*audioelement.duration/100;
})
const makeallplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=> {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplay();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src=songs[songIndex].filePath;
        audioelement.currentTime=0;
        audioelement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        mastername.innerText=songs[songIndex].songname;
        gif.style.opacity=1;
    })
})
document.getElementById('prev').addEventListener('click',()=>{

    if(songIndex>0)
    songIndex-=1;
    audioelement.src=songs[songIndex].filePath;
        audioelement.currentTime=0;
        audioelement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        mastername.innerText=songs[songIndex].songname;
        gif.style.opacity=1;
})
document.getElementById('next').addEventListener('click',()=>{

    if(songIndex<4)
    songIndex+=1;
    audioelement.src=songs[songIndex].filePath;
        audioelement.currentTime=0;
        audioelement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        mastername.innerText=songs[songIndex].songname;
        gif.style.opacity=1;
})
