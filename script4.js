let petCounterId = 0;

function registerPet() {

  mainFormAttributes();

  var thePet = new Pet(txtName.value, txtAge.value, selService.value, txtOwner.value, txtPhone.value);

  console.log(thePet);

  salon.pets.push(thePet);

  displayPetTable(thePet);

  // clear all Fields
  clearForm();
}

//Displays the pet onto the List
//expects: a pet object
function displayPet(aPet) {
  //get a lsit reference

  var list = document.getElementById('petList');

  var li = '<li class= pet-li bordered>' + aPet.name + ' - ' + aPet.type + '</li>';

  list.innerHTML += li;

}

function displayPetTable(aPet) {
  var tBody = document.getElementById('listBody');
  // method 2
  var row = `<tr id=${aPet.id}>
                  <th class="align-middle">${salon.pets.indexOf(aPet) + 1}</th>
                  <td class="align-middle">${aPet.name}</td>
                  <td class="align-middle">${aPet.age}</td>
                  <td class="align-middle">${aPet.ownerName}</td>
                  <td class="align-middle">${aPet.ownerPhone}</td>
                  <td class="align-middle">${aPet.type}</td>

                  <td class="align-middle"><button class="btn btn-danger" type="button" onclick="removePet(${aPet.id});" name="button">Remove</button>

                  <button class="btn btn-secondary" type="button" onclick="showInfo(${aPet.id});" name="button">Show More</button></td>
              </tr>`;

  tBody.innerHTML += row;
}

function showInfo(petId) {
  for (i = 0; i < salon.pets.length; i++) {
    if (salon.pets[i].id == petId) {
      console.log('info: ', salon.pets[i]);
    }
  }
}

function removePet(petId) {

  for (i = 0; i < salon.pets.length; i++) {
    if (salon.pets[i].id == petId) {
      console.log('index is equal to' + petId);
      salon.pets.splice(i, 1);
    }
  }

  let removedPet = document.getElementById(petId);
  removedPet.remove();

}

function clearForm() {

  mainFormAttributes();

  txtName.value = '';
  txtAge.value = '';
  selService.value = '';
  txtOwner.value = '';
  txtPhone.value = '';

}

function mainFormAttributes() {
  var txtName = document.getElementById('txtName');
  var txtAge = document.getElementById('txtAge');
  var txtOwner = document.getElementById('txtOwner');
  var txtPhone = document.getElementById('txtPhone');
  var selService = document.getElementById('selService');

}

var salon = {
  name: 'Pet Salon',
  phone: '432 455 9400',
  address: {
    street: 'main',
    number: '123'
  },
  workingHours: {
    opens: '9:00',
    closes: '17:00'
  },

  pets: [],

  addPet: function(petName) {
    this.pets.push(petName);
  },

  printPetNum: function() {
    var petQty = 'There are: ' + this.pets.length + ' pets currently in the Salon';
    console.log(petQty);
  },

  printNames: function() {
    var petNames = '';
    for (var i = 0; i < this.pets.length; i++) {
      //console.log(this.pets[i]);
      petNames += 'Name: ' + this.pets[i] + '\n';
    }
    console.log(petNames);
  }

};

function Pet(name, age, serviceType, ownerName, contactNumber) {
  this.hunger = 20;
  this.id = petCounterId;
  petCounterId += 1;
  this.happy = 10;
  this.name = name;
  this.age = age;
  this.type = serviceType;
  this.ownerName = ownerName;
  this.ownerPhone = contactNumber;

  this.feed = function() {
    this.hunger -= 10;
    this.happy += 10;
  };
  this.status = function() {
    console.log(this.name, ' Hunger: ', this.hunger, ' Happy: ', this.happy);
  };
  this.owner = function() {
    console.log(this.ownerName, ' is the owner of ', this.name);


  };
}

function init() {
  var btnSave = document.getElementById('btnSave');
  btnSave.addEventListener('click', registerPet);

  var btnClear = document.getElementById('btnClear');
  btnClear.addEventListener('click', clearForm);

  btnClear.addEventListener('mouseover', () => {

    if (btnClear.style.marginLeft === '80px') {
      btnClear.style.marginLeft = '0px';
    } else {
      btnClear.style.marginLeft = '80px';
    }

  });

}

window.onload = init;
