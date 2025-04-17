

const scriptsInEvents = {

	async Folhastart_Event3_Act1(runtime, localVars)
	{
		// Supondo que você queira mudar para o layout chamado "NovoLayout" ao pressionar a tecla "Enter"
		
		    if (event.key === 'Space') {
		        // Muda para o layout desejado
		        runtime.goToLayout('Fase2');
		    }
		
	},

	async Folhastart_Event5_Act1(runtime, localVars)
	{
		// Mostra o texto
		runtime.objects.TextoJS.getFirstInstance().text = "Ola! Bom Jogo!";
		
		// Define um tempo para desaparecer (em milissegundos)
		setTimeout(() => {
		    runtime.objects.TextoJS.getFirstInstance().text = ""; // Limpa o texto
		}, 3000); // 3000ms = 3 segundos
	},

	async Folhagameover_Event2_Act1(runtime, localVars)
	{
		// Supondo que você queira mudar para o layout chamado "NovoLayout" ao pressionar a tecla "Enter"
		document.addEventListener('keydown', function(event) {
		    if (event.key === 'Space') {
		        // Muda para o layout desejado
		        runtime.goToLayout('Fase2');
		    }
		});
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
