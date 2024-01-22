const file_icon = document.querySelector(".file_icon");
const file_icon_y = document.querySelector(".file_icon_y");
const file_icon_x = document.querySelector(".file_icon_x");
const box_lid_x = document.querySelector(".box_lid_x");
const ufo_y = document.querySelector(".ufo_y");
const ufo = document.querySelector(".ufo");
const ufo_first_y = document.querySelector(".ufo_first_y")
const ufo_main_x = document.querySelector(".ufo_main_x")
const ufo_main_y = document.querySelector(".ufo_main_y")
const ufo_light= document.querySelector(".ufo_light")
const move_whole_body = document.querySelector(".move_whole_body")
const box_lid = document.querySelector(".box_lid")
const box_body = document.querySelector(".box_body")
const ufo_last_y = document.querySelector(".ufo_last_y")

let amt = () => {
    //file_icon.classList.toggle("show");
    ufo_light.classList.add('ufo_light_prop')
    file_icon.classList.add('show');
    file_icon.classList.add("animate_file_icon_size");
    file_icon_y.classList.add("animate_file_icon_y");
    file_icon_x.classList.add("animate_file_icon_x");
    box_lid_x.classList.add("animate_box_lid_x");
    ufo.classList.add("animate_ufo_hover");
    ufo_y.classList.add("animate_ufo_hover_y");
    ufo_first_y.classList.add("animate_ufo_first_y")
    ufo_first_y.addEventListener('animationend',()=>{
        ufo_main_x.classList.add("animate_ufo_x")
        ufo_main_y.classList.add("animate_ufo_y")
        ufo_last_y.classList.add("animate_ufo_last_y")
    })
    
    ufo_light.classList.add('ufo_light_animation')
    move_whole_body.classList.add('move_whole_body_animate');
    box_lid.classList.add('move_whole_body_shrink_animate');
    box_body.classList.add('move_whole_body_shrink_animate');

    //ufo_y.classList.add("animate_ufo_first_y");
    //     file_icon.classList.remove("animate_file_icon_size")
    //     file_icon_y.classList.remove("animate_file_icon_y")
    //     file_icon_x.classList.remove("animate_file_icon_x")
    //})
}

export { amt };