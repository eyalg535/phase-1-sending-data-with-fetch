const body = document.getElementsByTagName('body')[0];
 const message ="Unauthorized Access"
 function submitData(firstName, email) {
     const confgObj = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
     },
     body: JSON.stringify({
         'name': firstName,
         'email': email
     })
     }
    return fetch('http://localhost:3000/users', confgObj)
    .then(res => res.json())
    .then(body => addNewContact(body.id))
    
    .catch(error => message )
        
}
 

function addNewContact(newID) {
    document.getElementsByTagName('body')[0].innerHTML = newID;
    document.body.append(message)
}
submitData('name', 'name@name.com')

