//init the username 
const github = new Github;

const Searchuser = document.getElementById('searchUser')
//init the ui
const ui = new UI
Searchuser.addEventListener('keyup',(e)=>{
const user = e.target.value
if(user!==''){
    github.getuser(user)
    .then(data=>{
        if(data.profile.message == `Not Found`){
        //show alert

        }else{
       ui.showProfile(data.profile)
        }
    });
}else{
    //clear profile
    
}

});