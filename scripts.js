//ALUNOS

var api_url = 'http://localhost:8000/api/v1/alunos';


function get_all_aluno(){

   fetch(api_url)

   .then(response => response.text())
   .then(function(text) {

     let tbody = document.getElementById('tbody-alunos');
     let dados = JSON.parse(text);

     tbody.innerHTML = '';

     dados.forEach(aluno => {
       tbody.innerHTML += ` <tr>
           <td>${aluno.id}</td>
           <td>${aluno.nome}</td>
           <td>${aluno.email}</td>
           <td>
           <button><a href="save.html?id=${aluno.id}">editar</a></button>
               <button onclick='remove(${aluno.id})'>deletar</button>
           </td>
       </tr>
       `;
     });
   });
}


function search_aluno(){

   let id_aluno = document.getElementById('id-busca').value;

   console.log(id_aluno)

   if(id_aluno != ''){
       api_url = `${api_url}/${id_aluno}`
   }
   else{
       return;
   }

   fetch(api_url)
   .then(response => response.text())
   .then(function(text) {
     let tbody = document.getElementById('tbody-alunos');     
     let aluno = JSON.parse(text);
     console.log(aluno);    
     
     tbody.innerHTML = ` <tr>
       <td>${aluno.id}</td>
       <td>${aluno.nome}</td>
       <td>${aluno.email}</td>
       <td>
       <button><a href="save.html?id=${aluno.id}">editar</a></button>
        <button onclick='remove(${aluno.id})'>deletar</button>
       </td>
     </tr>`;
   });
}


function get_by_id_aluno(id_aluno){
   let aluno = fetch(`${api_url}/${id_aluno}`)
   .then(response => response.text())
   .then(function(text) {    
     return JSON.parse(text);
   });   
   return aluno;
}


function load_aluno(id_aluno){
   get_by_id(id_aluno).then(aluno =>{
       document.getElementById("id").value = aluno.id;
       document.getElementById("nome").value = aluno.nome;
       document.getElementById("email").value = aluno.email;
   });
 
}


function save_aluno(){
   let id = document.getElementById("id").value;
   let nome = document.getElementById("nome").value;
   let email = document.getElementById("email").value;
      
   if(id != ''){
       console.log('editar')
       aluno = {"id":id, "nome": nome, "email": email}
       update(aluno);
   }
   else{
       aluno = {"nome": nome, "email": email}
       create(aluno);
   }       
}


function update_aluno(aluno){
   let mensagem = document.getElementById("mensagem");
   fetch(`${api_url}/${aluno.id}`,{
       method: 'PUT',
       headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
       },
       body: JSON.stringify(aluno)
   })
   .then(response => {
       if(response.status == 202){
           mensagem.innerHTML = "Alterado com sucesso";
       }else{
           mensagem.innerHTML = "Erro";
       }
   })
}


function create_aluno(aluno){
   let mensagem = document.getElementById("mensagem");
   fetch(api_url,{
       method: 'POST',
       headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
       },
       body: JSON.stringify(aluno)
   })
   .then(response => {
       if(response.status == 201){
        
           mensagem.innerHTML = "Criado com sucesso";
       }else{
           mensagem.innerHTML = "Erro";
       }
   })
}



function remove(id){
   fetch(`${api_url}/${id}`,{
       method: 'DELETE',
       headers: {
           'Accept': 'application/json'
       }
   })
   .then(response => {
       if(response.status == 204){
           get_all();
       }else{
           alert("Erro");
       }
   })
}


/////// usuario
var api_url = 'http://localhost:8000/api/v1/usuarios';


function get_all_usuario(){

   fetch(api_url)

   .then(response => response.text())
   .then(function(text) {

     let tbody = document.getElementById('tbody-usuarios');
     let dados = JSON.parse(text);

     tbody.innerHTML = '';

     dados.forEach(usuario => {
       tbody.innerHTML += ` <tr>
           <td>${usuario.id}</td>
           <td>${usuario.nome}</td>
           <td>${usuario.email}</td>
           <td>
           <button><a href="save.html?id=${usuario.id}">editar</a></button>
               <button onclick='remove(${usuario.id})'>deletar</button>
           </td>
       </tr>
       `;
     });
   });
}


function search_usuario(){

   let id_usuario = document.getElementById('id-busca').value;

   console.log(id_usuario)

   if(id_usuario != ''){
       api_url = `${api_url}/${id_usuario}`
   }
   else{
       return;
   }

   fetch(api_url)
   .then(response => response.text())
   .then(function(text) {
     let tbody = document.getElementById('tbody-usuarios');     
     let usuario = JSON.parse(text);
     console.log(usuario);    
     
     tbody.innerHTML = ` <tr>
       <td>${usuario.id}</td>
       <td>${usuario.nome}</td>
       <td>${usuario.email}</td>
       <td>
       <button><a href="save.html?id=${usuario.id}">editar</a></button>
        <button onclick='remove(${usuario.id})'>deletar</button>
       </td>
     </tr>`;
   });
}


function get_by_id_usuario(id_usuario){
   let usuario = fetch(`${api_url}/${id_usuario}`)
   .then(response => response.text())
   .then(function(text) {    
     return JSON.parse(text);
   });   
   return usuario;
}


function load_usuario(id_usuario){
   get_by_id(id_usuario).then(usuario =>{
       document.getElementById("id").value = usuario.id;
       document.getElementById("nome").value = usuario.nome;
       document.getElementById("email").value = usuario.email;
   });
 
}


function save_usuario(){
   let id = document.getElementById("id").value;
   let nome = document.getElementById("nome").value;
   let email = document.getElementById("email").value;
      
   if(id != ''){
       console.log('editar')
       usuario = {"id":id, "nome": nome, "email": email}
       update(usuario);
   }
   else{
       usuario = {"nome": nome, "email": email}
       create(usuario);
   }       
}


function update_usuario(usuario){
   let mensagem = document.getElementById("mensagem");
   fetch(`${api_url}/${usuario.id}`,{
       method: 'PUT',
       headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
       },
       body: JSON.stringify(usuario)
   })
   .then(response => {
       if(response.status == 202){
           mensagem.innerHTML = "Alterado com sucesso";
       }else{
           mensagem.innerHTML = "Erro";
       }
   })
}


function create_usuario(usuario){
   let mensagem = document.getElementById("mensagem");
   fetch(api_url,{
       method: 'POST',
       headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
       },
       body: JSON.stringify(usuario)
   })
   .then(response => {
       if(response.status == 201){
        
           mensagem.innerHTML = "Criado com sucesso";
       }else{
           mensagem.innerHTML = "Erro";
       }
   })
}



////////// professor


var api_url = 'http://localhost:8000/api/v1/professores';


function get_all_professor(){

   fetch(api_url)

   .then(response => response.text())
   .then(function(text) {

     let tbody = document.getElementById('tbody-professores');
     let dados = JSON.parse(text);

     tbody.innerHTML = '';

     dados.forEach(professor => {
       tbody.innerHTML += ` <tr>
           <td>${professor.id}</td>
           <td>${professor.nome}</td>
           <td>${professor.email}</td>
           <td>
           <button><a href="save_professor.html?id=${professor.id}">editar</a></button>
               <button onclick='remove(${professor.id})'>deletar</button>
           </td>
       </tr>
       `;
     });
   });
}


function search_professor(){

   let id_professor = document.getElementById('id-busca').value;

   console.log(id_professor)

   if(id_professor != ''){
       api_url = `${api_url}/${id_professor}`
   }
   else{
       return;
   }

   fetch(api_url)
   .then(response => response.text())
   .then(function(text) {
     let tbody = document.getElementById('tbody-professores');     
     let professor = JSON.parse(text);
     console.log(professor);    
     
     tbody.innerHTML = ` <tr>
       <td>${professor.id}</td>
       <td>${professor.nome}</td>
       <td>${professor.email}</td>
       <td>
       <button><a href="save_professor.html?id=${professor.id}">editar</a></button>
        <button onclick='remove(${professor.id})'>deletar</button>
       </td>
     </tr>`;
   });
}


function get_by_id_professor(id_professor){
   let professor = fetch(`${api_url}/${id_professor}`)
   .then(response => response.text())
   .then(function(text) {    
     return JSON.parse(text);
   });   
   return professor;
}


function load_professor(id_professor){
   get_by_id(id_professor).then(professor =>{
       document.getElementById("id").value = professor.id;
       document.getElementById("nome").value = professor.nome;
       document.getElementById("email").value = professor.email;
   });
 
}


function save_professor(){
   let id = document.getElementById("id").value;
   let nome = document.getElementById("nome").value;
   let email = document.getElementById("email").value;
      
   if(id != ''){
       console.log('editar')
       professor = {"id":id, "nome": nome, "email": email}
       update(professor);
   }
   else{
       professor = {"nome": nome, "email": email}
       create(professor);
   }       
}


function update_professor(professor){
   let mensagem = document.getElementById("mensagem");
   fetch(`${api_url}/${professor.id}`,{
       method: 'PUT',
       headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
       },
       body: JSON.stringify(professor)
   })
   .then(response => {
       if(response.status == 202){
           mensagem.innerHTML = "Alterado com sucesso";
       }else{
           mensagem.innerHTML = "Erro";
       }
   })
}


function create_professor(professor){
   let mensagem = document.getElementById("mensagem");
   fetch(api_url,{
       method: 'POST',
       headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
       },
       body: JSON.stringify(professor)
   })
   .then(response => {
       if(response.status == 201){
        
           mensagem.innerHTML = "Criado com sucesso";
       }else{
           mensagem.innerHTML = "Erro";
       }
   })
}

