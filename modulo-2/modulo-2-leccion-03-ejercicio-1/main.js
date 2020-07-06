"use strict";
// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";
const userImg = document.querySelector(".user__avatar");
console.log(userImg);

// El .src le añade al <img> el atributo src con la url de la imagen de bill
userImg.src = userAvatar;
console.log(userImg);

userImg.src = userAvatar || DEFAULT_AVATAR;
