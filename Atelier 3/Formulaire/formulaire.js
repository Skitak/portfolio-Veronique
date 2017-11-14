var monFormulaire = document.getElementById("monFormulaire");
var passwordSecurityIndocator = document.getElementById("passwordIndicator");
function verifierLogin(){
	/*
	Minimum 3 caractè̀res, maximum 10
	Pas de caractères spéciaux
	Pas uniquement des chiffres
	Constitué d’une ou plusieurs lettres
	Avec, si souhaité, des chiffres

	Personnaliser le message d’erreur par défaut du navigateur apparaissant après validation du formulaire
	sur le champ de saisie du login grâce à l’API de contraintes de validation.
	*/
	var regex = /^(?=.*\d*)(?=.*[a-zA-Z]).{3,10}$/; //(?=[a-z|A-Z]+)
	if (!regex.test(login.value)){
		monFormulaire.login.setCustomValidity("Le login doit comprendre entre 3 et 10 caractères (lettres et chiffres). Ne peut contenir des caractères spéciaux.");
		return false;
	} else {
		monFormulaire.login.setCustomValidity("");
		return true;
	}
}

function verifierPass1(){
	/*
	4 caractères minimum, 15 maximum
	Contenir au moins un chiffre
	Au moins une lettre minuscule
	Au moins une lettre majuscule

	La force du mot de passe sera indiquée grâce à l’utilisation conjointe de JavaScript et CSS.
	Lors de sa saisie, en dessous du champ, un rectangle rouge indique que le mot de passe est de faible niveau de sécurité.
	Lorsque le mot de passe contient plus de 4 caractères avec au moins un chiffre, une lettre minuscule et une majuscule,
	un rectangle orange apparait à son tour. Si le mot de passe contient tous ces éléments au moins deux fois et fait plus
	de 8 caractères, un rectangle vert indiquant un mot de passe fort apparaît à son tour. Si l’utilisateur efface en
	tout ou partie le mot de passe, l’indication de force est mise à jour.
	*/

	var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,15}$/;
	if (!regex.test(monFormulaire.pass1.value)){
		monFormulaire.pass1.style.backgroundColor="red";
		monFormulaire.pass1.setCustomValidity("Le mot de passe doit contenir entre 4 et 15 caractères dont au moins un chiffre, une minuscule et une majuscule");
		return false;
	} else {
		monFormulaire.pass1.style.backgroundColor = "green";
		monFormulaire.pass1.setCustomValidity("");
		return true;
	}
}

function updatePassSecurityIndicator(){
	var regexStrong = /^(?=.*\d{2,})(?=.*[a-z]{2,})(?=.*[A-Z]{2,}).{9,15}$/;
	var regexMedium = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,15}$/;
	if (regexStrong.test(monFormulaire.pass1.value))
		passwordSecurityIndocator.className= "strong";
	else if (regexMedium.test(monFormulaire.pass1.value))
		passwordSecurityIndocator.className= "medium";
	else
		passwordSecurityIndocator.className= "low";
}

/* La seconde saisie du mot de passe sera contrôlée en JavaScript afin d’indiquer au fur et à mesure de sa saisie
s’il est identique ou non au premier mot de passe. S’il est identique alors la saisie du mot de passe est valide,
sinon la saisie est invalide. */

function verifierPass2() {
  if (monFormulaire.pass1.value == "" || monFormulaire.pass2.value == "") {
    monFormulaire.pass2.setCustomValidity("Vous devez entrer un mot de passe.");
    return false;
    }
  else if (monFormulaire.pass1.value == monFormulaire.pass2.value) {
	  monFormulaire.pass2.setCustomValidity("");
  	console.log("ok");
    return true;
    }
  else {
    monFormulaire.pass2.setCustomValidity("Les mots de pass ne concordent pas.");
	console.log("nope");
    return false;
    }
 }

 function verifierPassConcordance() {
	 if (!verifierPass2())
	 	monFormulaire.pass2.className = "wrong";
	else
		monFormulaire.pass2.className = "right";
 }

 function verifierCheckbox() {
	 monFormulaire.boutonEnvoi.setCustomValidity("");
	 checkboxes = document.querySelectorAll('input[type="checkbox"]');
	 for (var i = 0; i < 3; i++){
		 if (checkboxes[i].checked)
		 	return true;
	 }
	 monFormulaire.boutonEnvoi.setCustomValidity("Au moins une notification doit être sélectionné.");
	 return false;
 }
verifierCheckbox();

/*
Les 4 champs de saisie doivent être valides !
Au moins l’une des 3 cases à cocher doit avoir été sélectionnée
(n’importe laquelle des trois au minimum).
*/

function validerFormulaire(){

	var loginValid = verifierLogin();
	var pass1Valid = verifierPass1();
	var pass2Valid = verifierPass2();
	var checkbox = 	 verifierCheckbox();
	return loginValid && pass1Valid && pass2Valid && checkbox;
}
