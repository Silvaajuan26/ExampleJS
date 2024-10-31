
const products = {
    1: { nomb: "Gaseosa 🥤", cost: 2.00 },
    2: { nomb: "Papitas 🍟", cost: 3.00 },
    3: { nomb: "Galleta 🍪", cost: 1.00 },
    4: { nomb: "Agua Mineral 🍶", cost: 4.00 }
};



    let opcion = parseInt(prompt(`
==========================
1.Gaseosa: 🥤  S/2.00 
2.Papitas: 🍟 S/3.00
3.Galleta: 🍪 S/1.00
4.Agua Mineral: 🍶 S/4.00
==========================
Ingresa la opción:
`));

    if (products[opcion]) {
        const productSelec = products[opcion];
        const cost = productSelec.cost;

        let money = parseFloat(prompt("Ingresa la moneda (máximo S/5.00): "));

   
        if (money > 0 && money <= 5.00) {
            if (money >= cost) {

                let vuelto = (money - cost).toFixed(2);
                alert(`Producto comprado: ${productSelec.nomb}\nVuelto: S/ ${vuelto}`);
            } else {
                alert("Saldo insuficiente para comprar este producto.");
            }
        } else {
            alert("Monto inválida. Solo se aceptan monedas de hasta S/5.00.");
        }
    } else {
        alert("Opción no válida. Por favor, selecciona un número entre 1 y 4.");
    }

