let users =  [{"id":1,"firstname":"Yessenia","lastname":"Roberts","email":"rory.rogahn@gmail.com","phone":"+1452550717825","birthday":"1965-10-21","gender":"female","address":{"id":0,"street":"391 Carlo Place","streetName":"Gertrude Crossroad","buildingNumber":"786","city":"West Riverville","zipcode":"30138-8655","country":"Anguilla","county_code":"LI","latitude":26.690141,"longitude":166.886897},"website":"http:\/\/luettgen.info","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":2,"firstname":"Katarina","lastname":"Pouros","email":"deckow.jocelyn@sauer.info","phone":"+9402499506142","birthday":"1993-01-06","gender":"female","address":{"id":0,"street":"387 Jazmyn Roads Suite 862","streetName":"Rogahn Extensions","buildingNumber":"5781","city":"West Joannieton","zipcode":"44883","country":"Finland","county_code":"PM","latitude":-19.682147,"longitude":116.194716},"website":"http:\/\/erdman.com","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":3,"firstname":"Pansy","lastname":"Brown","email":"gonzalo90@bartoletti.com","phone":"+6199722326694","birthday":"1998-02-19","gender":"female","address":{"id":0,"street":"63993 Hoeger Via Suite 607","streetName":"Dach Ports","buildingNumber":"557","city":"McCluremouth","zipcode":"22739-1458","country":"El Salvador","county_code":"DK","latitude":-7.863189,"longitude":-25.277748},"website":"http:\/\/wolf.com","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":4,"firstname":"Bernie","lastname":"Hermiston","email":"imani05@yahoo.com","phone":"+2527848505664","birthday":"1974-05-07","gender":"male","address":{"id":0,"street":"4649 Gislason Dale","streetName":"Homenick Trail","buildingNumber":"565","city":"Port Aditya","zipcode":"96538-3405","country":"Guinea-Bissau","county_code":"GE","latitude":-19.913465,"longitude":81.055457},"website":"http:\/\/flatley.net","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":5,"firstname":"Maritza","lastname":"Cormier","email":"ldamore@grady.com","phone":"+9770639290444","birthday":"2022-09-16","gender":"female","address":{"id":0,"street":"958 Sheldon Neck","streetName":"Cora Rapid","buildingNumber":"87821","city":"Lake Briatown","zipcode":"42612","country":"China","county_code":"AZ","latitude":-5.970635,"longitude":-72.193849},"website":"http:\/\/dickinson.com","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":6,"firstname":"Natasha","lastname":"Considine","email":"margarete49@gmail.com","phone":"+9749739669207","birthday":"1963-02-23","gender":"female","address":{"id":0,"street":"1243 Brooks Port","streetName":"Larue Landing","buildingNumber":"10923","city":"Keshaunchester","zipcode":"84134","country":"Greece","county_code":"LC","latitude":-57.564922,"longitude":101.128622},"website":"http:\/\/schulist.org","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":7,"firstname":"Rae","lastname":"West","email":"prudence85@hotmail.com","phone":"+3268530967623","birthday":"2008-09-07","gender":"female","address":{"id":0,"street":"9266 Fritsch Mews Suite 187","streetName":"Amya Well","buildingNumber":"58645","city":"Lake Cierraton","zipcode":"85211","country":"Pitcairn Islands","county_code":"LS","latitude":68.128216,"longitude":-159.143628},"website":"http:\/\/donnelly.com","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":8,"firstname":"Merle","lastname":"Shanahan","email":"tgorczany@yahoo.com","phone":"+3477746916434","birthday":"1977-07-19","gender":"male","address":{"id":0,"street":"103 Katarina Landing","streetName":"Effertz Isle","buildingNumber":"7982","city":"East Jairoburgh","zipcode":"08663","country":"Thailand","county_code":"MZ","latitude":25.940635,"longitude":48.706466},"website":"http:\/\/parisian.com","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":9,"firstname":"Ellis","lastname":"Klein","email":"pconnelly@dickens.com","phone":"+2008623346181","birthday":"1997-11-09","gender":"male","address":{"id":0,"street":"1926 Veda Stream","streetName":"Pollich Avenue","buildingNumber":"66536","city":"Port Hayleyland","zipcode":"46023","country":"South Africa","county_code":"MD","latitude":-30.773542,"longitude":25.746448},"website":"http:\/\/wintheiser.com","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":10,"firstname":"Dave","lastname":"King","email":"carlos50@gmail.com","phone":"+9856606924909","birthday":"1985-11-28","gender":"male","address":{"id":0,"street":"45670 Elbert Turnpike","streetName":"Brandy Keys","buildingNumber":"576","city":"Bonitaport","zipcode":"25653-0349","country":"Australia","county_code":"SY","latitude":83.678186,"longitude":-171.154599},"website":"http:\/\/stroman.org","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":11,"firstname":"Kathlyn","lastname":"Kub","email":"amely16@pfannerstill.com","phone":"+8170315560530","birthday":"1946-08-08","gender":"female","address":{"id":0,"street":"6491 Stacey Route Apt. 117","streetName":"Parker Route","buildingNumber":"77433","city":"East Amy","zipcode":"17836-3660","country":"Rwanda","county_code":"NP","latitude":-74.632471,"longitude":166.31782},"website":"http:\/\/goldner.com","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":12,"firstname":"Mustafa","lastname":"Heathcote","email":"nfritsch@gmail.com","phone":"+4159958761317","birthday":"2016-05-21","gender":"male","address":{"id":0,"street":"1402 Olaf Lakes Apt. 756","streetName":"Funk Road","buildingNumber":"424","city":"Lake Tyshawn","zipcode":"03283","country":"Guernsey","county_code":"BJ","latitude":9.021679,"longitude":-150.981725},"website":"http:\/\/damore.com","image":"http:\/\/placeimg.com\/640\/480\/people"}]
class personCard{    constructor(obj,)
    {this.id = obj.id,        
    this.firstname = obj.firstname,        
    this.lastname = obj.lastname,        
    this.email = obj.email,        
    this.phone = obj.phone,        
    this.birthday = obj.birthday,        
    this.age = new Date().getFullYear() - new Date(obj.birthday).getFullYear()        
    this.gender = obj.gender,        
    this.address = obj.address,        
    this.website = obj.website,        
    this.image = obj.image        
    this.id1 = obj.id        
    this.streetName1 = obj.streetName        
    this.buildingNumber = obj.buildingNumber        
    this.city = obj.city    }}// const data = [];
    let data = [];  
    let cnt = 12;for(let i = 0; i < users.length; i++){ let human = users[i]    
    data.push(new personCard(human))}
    console.log(data)
    let html = ""
    for(let val of data){     html += `    <div class="card" style="background-color: ${val.bg};    color: ${val.cl}">    
    <div>    
    <h1>${val.id}</h1>    
    <h3>${val.firstname} ${val.lastname}</h3>    
    <img src="https://upload.wikimedia.org/wikipedia/en/4/44/Speakenglish.jpg" alt="S.O.D.)))))">    
    <h3>${val.age} y.o.</h3>    
    </div>    
    <div>    
    <p>${val.email}</p>    
    <p>${val.phone}</p>    
    <p>${val.gender}</p    
    </div>    
    <div>${val.id1}</div>    
    <div>${val.streetName1}</div>    
    <div>${val.buildingNumber}</div>    
    </div>`}    
    document.body.innerHTML += html