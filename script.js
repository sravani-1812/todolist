let allList= document.querySelector('.listitems'); //ul
        let createList=document.getElementById('listcreate'); //input
        let createBtn=document.getElementById('create-btn'); //btn
        createBtn.addEventListener("click",function(){
             if(createList.value===""){
                  alert("Enter your text");
             }else{
                //create li
                let list= document.createElement('li');
                list.innerText=createList.value;
                // create add and delete button
                let spanbtn= document.createElement('span');
                spanbtn.className="del-but";
                spanbtn.innerText='❎';
                list.appendChild(spanbtn);
                

                allList.appendChild(list);
             }
             createList.value="";
             savePresentData()
        });
        allList.addEventListener("click",function(e){
            console.log(e);
            if(e.target.tagName==="LI"){
                e.target.classList.toggle("checked");
                savePresentData();
            }
            else if(e.target.tagName==="SPAN"){
                e.target.parentElement.remove();
                savePresentData();
            }
        });
        function savePresentData(){
            localStorage.setItem("data",allList.innerHTML);
        }
        function showSavedData(){
            allList.innerHTML=localStorage.getItem("data");
        }
        showSavedData();