import read from 'readline-sync';

function menu()
{
    while(true) 
    {
        console.log('---- MENU ----');
        console.log('1. Afficher un produit');
        console.log('2. Ajouter un produit');
        console.log('3. Moifier un produit');
        console.log('4. Supprimer un produit');
        console.log('5. Quitter');

        let choice = read.question('Choisissez une option: ');

        switch(choice)
        {
            case '1':
                console.log('Afficher un produit');
                break;
            case '2':
                console.log('Ajouter un produit');
                break;
            case '3':
                console.log('Modifier un produit');
                break;
            case '4':
                console.log('Supprimer un produit');
                break;
            case '5':
                console.log('Quitter');
                return;
            default:
                console.log('\nChoix invalide, essayez à nouveau.\n');
        }
        console.log('----------------');
    }
}

menu();