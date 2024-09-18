function calcolaPeso() {
	var volume, psp, peso;
	volume = document.getElementById("volume").value;
	var u = document.getElementById("unit").selectedIndex
	var scelta = document.getElementById("materiali").selectedIndex
	
	if (volume < 1 || isNaN(volume))
	{
		alert("Devi inserire un numero positivo!!!");
		document.getElementById("peso").innerHTML = "Impossibile calcolare!!!";
		return false;
	}

	switch (u)
	{
		//metri cubi
		case 0:
			volume = volume*1000;
			break;

		//decimentri cubi
		case 1:
			volume = volume;
			break;

		//centimetri cubi
		case 2:
			volume = volume/1000;
			break;	
	}

	switch (scelta) {
		//Scelta Acciaio
		case 0:
			psp = 7.8;
			break;

		//Scelta Alluminio
		case 1:
			psp = 2.75;
			break;

		//Scelta Ottone
		case 2:
			psp = 8.70;
			break;

		//Scelta Rame
		case 3:
			psp = 8.93;
	}

	peso = volume * psp;
	document.getElementById("peso").innerHTML = "Peso (kg): " + peso;
	
}