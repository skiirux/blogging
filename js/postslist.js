// to edit the post content

function toggleEditSave() {
    var toggleSave = '<button class="postEdit">Save ' +
        '<i style="font-size: 14px;font-weight: bolder;" ' +
        'class="fa fa-save" aria-hidden="true"></i>' +
        '</button>';
    var toggleEdit = '<button class="postEdit">Edit ' +
        '<i style="font-size: 14px;font-weight: bolder;" ' +
        'class="fa fa-pencil-square-o" aria-hidden="true"></i>' +
        '</button>';

    // to save the editable text

    var edtSaveBtn = document.getElementById('editPost');
    var toDo = (edtSaveBtn.innerText).toString().trim();
    console.log(toDo);
    console.log(toDo.localeCompare('Edit'));
    if (toDo.localeCompare('Edit') === 0) {
        console.log("Currently Edit");
        var bSave = document.getElementById('editPost');
        bSave.innerHTML = toggleSave;
        enableEditableText();

    }
    else {
        console.log("Currently Save");
        var bEdit = document.getElementById('editPost');
        bEdit.innerHTML = toggleEdit;
        updateEditedBlog();
    }

}

function enableEditableText() {
    var getBlogContentEle = document.getElementById('blogBody');
    var getBlogContent = getBlogContentEle.innerText;

    //Div element
    var getDiv = document.getElementById('blogBodyId');
    //Create a input element
    var inputElement = '<textarea class="txtBlog" id="txtEditedBlog" rows="10" cols="220">' +
        getBlogContent +
        '</textarea>'
    //Update the Div element
    getDiv.innerHTML = inputElement;
}
function updateEditedBlog() {
    var editedBlog = document.getElementById('txtEditedBlog');

    var textEdited = (editedBlog.innerHTML).toString();

    var pElement = '<p id="blogBody">' +
        textEdited +
        '</p>';
    var getDiv = document.getElementById('blogBodyId');
    getDiv.innerHTML = pElement;

}
// to add comments
function addComment() {
    console.log("Inside add comment");
    var x = document.getElementById("txtCommentCommentPost").addEventListener("onchange", function () {
        document.getElementById("txtCommentCommentPost").innerHTML;
    });

    var x = document.getElementById("txtCommentCommentPost").value;

    console.log(x);
    var pElement = '<p >' + x + '</p>';
    var getDiv = document.getElementById('listAllComments');
    getDiv.innerHTML = pElement + getDiv.innerHTML;
}
// clicking on signup button will open the sign up model
var signup = document.getElementById('up');
signup.onclick = function () {
    myModal.style.display = "none";
    myModal.style.display = "block";
}
// this is for the likes section
var Counts = document.getElementById("count");
var Likes = document.getElementById("likes");
var count = 0;
function thumb() {
    count += 1;
    Likes.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i>' + " Liked!";
    Counts.innerHTML = count + " Person Likes This!";
}