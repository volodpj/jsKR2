function getID(a){
    return document.getElementById(a);
}
function getClass(a){
    return document.getElementsByClassName(a);
}
var count = 0;
function changeWindow (){
    
    var wind = ['color','edit_display','background','editBtn'];
    if(this.id==wind[0]){
        container.style.display = 'flex';
    }else if(this.id==wind[1]){
		container.style.display = 'none';
	}
    if(this.id == wind[2]){
        box_background.style.display = 'flex';
    }else if(this.id==wind[1]){
		box_background.style.display = 'none';
    }
    if(this.id == wind[3] && count == 0){
        getID('editCont').style.display = 'block';
        getID('edit_display').style.display = 'none';
        var x = getID('edit_display_bol').innerHTML;
        getID('editBox').value = x;
        count = 1;
        document.getElementsByClassName('box_meny')[0].style.display = 'none';
        document.getElementsByClassName('box_meny_edit')[0].style.display = 'flex';
    }else if(this.id == wind[3] && count == 1){
        getID('editCont').style.display = 'none';
        getID('edit_display').style.display = 'flex';
        count = 0;
    }
}


//---------------------------------------ЖИРНІСТЬ ШРИФТА----------------------------------------------------
bold.onclick = function(){
    if(edit_display.style.fontWeight != 'bold'){
        edit_display.style.fontWeight = 'bold';
    }else{
        edit_display.style.fontWeight = 'normal';
    }
}

//---------------------------------------КУРСИВ----------------------------------------------------
italic.onclick = function(){
    if(edit_display.style.fontStyle != 'italic'){
        edit_display.style.fontStyle = 'italic';
    }else{
        edit_display.style.fontStyle = 'normal';
    }
}
//---------------------------------------ПІДКРЕСЛЕННЯ----------------------------------------------------
underline.onclick = function(){
    if(edit_display.style.textDecoration != 'underline'){
        edit_display.style.textDecoration = 'underline';
    }else{
        edit_display.style.textDecoration = 'none';
    }
}

//---------------------------------------ЗМІНА КОЛЬОРІВ----------------------------------------------------
color.addEventListener('click', changeWindow);
color.addEventListener('click', colPalitra);
edit_display.addEventListener('click', changeWindow)
var colorArrey = ['red', 'green', 'orange', 'gray', 'yellow', 'blue', 'purple', 'brown', 'pink'];
var clickBlock = document.getElementsByClassName('block');

function colPalitra(){
    for(var i = 0; i < clickBlock.length; i++){
        clickBlock[i].style.backgroundColor = colorArrey[i];
    }
}

container.onclick = function(event) {
	var target = event.target;
	if (target.tagName != 'SPAN') return ;
		fontCol(target);
};

function fontCol(target){
	var colBox = target.style.backgroundColor;
	edit_display.style.color = colBox;
};
//---------------------------------------ЗМІНА ФОНУ----------------------------------------------------
var boxBackg = document.getElementsByClassName('block1');
background.addEventListener('click', changeWindow);
background.addEventListener('click', backgPalitra);

function backgPalitra(){
	for(var i = 0; i < boxBackg.length; i++){
        boxBackg[i].style.backgroundImage = 'url(img/' + i + '.jpg)';
    }
}

containerB.onclick = function(event){
    var target = event.target;
    if(target.tagName != 'SPAN') return;
     backgCol(target);   
}


function backgCol(target){
    var test = target.id;
    edit_display.style.backgroundImage = 'url(img/' + test + '.jpg)';
}

var control = document.getElementById("fileLoad");
control.addEventListener("change", function(event) {
    
    var files = event.target.files;
    console.log(files);

    edit_display.style.backgroundImage = 'url' + '(' + URL.createObjectURL(event.target.files[0]) + ')';
});



//---------------------------------------РОЗМІР ШРИФТА----------------------------------------------------
font_size.onchange = function(){
	edit_display.style.fontSize = this.value;
}

//---------------------------------------НАЗВА ШРИФТА----------------------------------------------------
font_family.onchange = function(){
	edit_display.style.fontFamily = this.value;
}
//---------------------------------------ВИРІВНЮВАННЯ ТЕКСТУ----------------------------------------------------
var rad = document.getElementsByName('pozition_text');
for(var i=0; i<rad.length; i++){
	rad[i].onchange = function(){
		edit_display.style.textAlign = this.value;
	};
}
//------------------------------------ДОДАВАННЯ ТАБЛ І СПИСКУ----------------------------------------------------
getID('editBtn').addEventListener('click', changeWindow);
