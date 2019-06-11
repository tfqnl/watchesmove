$(function(){
    var box = $(".box")
    var boximg = box.find('img')
    var hidebox = $(".hide_box")
    boximg.on("click",function(){
        hidebox.slideToggle("slow")
    })
})