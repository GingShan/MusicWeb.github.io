$(function(){
    $("#PlayBtn").click(()=>{
        $("#PlayBtn").fadeOut(800);
        $("#PauseBtn").fadeIn(800);
    });
    $("#PauseBtn").click(()=>{
        $("#PlayBtn").fadeIn(800);
        $("#PauseBtn").fadeOut(800);
    });
})
    



document.addEventListener("DOMContentLoaded", function(){
  
    // 播放
    var btn_play_el = document.getElementById("PlayBtn");
    btn_play_el.addEventListener("click", function(){
      let the_audio_el = document.getElementById("musicOne");
      the_audio_el.play();
    });
    
    // 暫停
    var btn_pause_el = document.getElementById("PauseBtn");
    btn_pause_el.addEventListener("click", function(){
      let the_audio_el = document.getElementById("musicOne");
      the_audio_el.pause();
    });
    
    // 結束播放
    // var btn_stop_el = document.getElementById("btn_stop");
    // btn_stop_el.addEventListener("click", function(){
    //   let the_audio_el = document.getElementById("the_audio");
    //   the_audio_el.pause();
    //   the_audio_el.currentTime = 0;
    // });
    
  });
  
  /*
  $(function(){
    
    // 播放
    $("#btn_play").on("click", function(){
      $("#the_audio")[0].play();
    });
    
    // 暫停
    $("#btn_pause").on("click", function(){
      $("#the_audio")[0].pause();
    });
    
    // 結束播放
    $("#btn_stop").on("click", function(){
      $("#the_audio")[0].pause();
      $("#the_audio")[0].currentTime = 0;
    });
    
  });
  */