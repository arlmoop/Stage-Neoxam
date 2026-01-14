/*
    - EVITER LES ATTAQUE XSS

    Dans une page HTML qui possède : <div id="output"></div>
    La bonne méthode pour changer le texte est :
        const element = document.getElementById("output");
        element.textContent = "Bonjour le monde !";
        textContent permet de prendre juste du texte et donc de ne pas avoir du HTML ou du JS qui est executé


    - CSPP = CONTENT SECURITY POLICY

    Ajouter dans ton <head> de l’HTML :
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self';">

        default-src 'self' → par défaut, tout le contenu doit provenir du même domaine.
        script-src 'self' → seuls les scripts venant du même domaine sont autorisés.
        Pas de 'unsafe-inline' → les scripts inline <script>...</script> sont bloqués.

    Avec ça, si on ajoute une balise <script> dans le code html alors il sera bloqué alors que une balise <script src="script.js"> sera executée

    - GARBAGE COLLECTOR 

    Détecte automatiquement les objets qui ne sont plus utilisés pour libérer la mémoire

    - JS BEST PRACTICE 

    Il faut utiliser let/const plutôt que var
*/