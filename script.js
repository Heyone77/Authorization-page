const authform = document.querySelector('.authform');
const clearbtn = document.querySelector(".additionbtn");
const fgtpsw = document.querySelector('.fgtpsw');
const modal = document.querySelector('.modal');
const restoreform = document.querySelector('.restoreform');

authform.addEventListener('submit', (e)=>
{
    e.preventDefault();

    const formData = new FormData(authform);
    
    const object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
    
    
        fetch('server.php', {
            method: "POST",
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify(object)
        })
        .then(data => data.text())
        .then(data => {
            console.log(data);
             
        })
        .finally(() =>{
            authform.reset();
        });
});

clearbtn.addEventListener('click', (e)=>{
    e.preventDefault();

    authform.reset();
});

fgtpsw.addEventListener('click', (e)=>{
    e.preventDefault();

    modal.style.display = 'block';
});

window.onclick = function(e){
    if (e.target == modal) {
        modal.style.display = "none";
    }
};

restoreform.addEventListener('submit', (e)=>
{
    e.preventDefault();
    
    const formData = new FormData(restoreform);
    
    const object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
    
    
        fetch('server2.php', {
            method: "POST",
            body: formData
        })
        .then(data => data.text())
        .then(data => {
            console.log(data);
             
        })
        .finally(() =>{
            restoreform.reset();
        });
        
});
