const Productv2 = require('../models/productModel.cjs'); 

// Recupera un prodotto per ID
async function getProductById(id) {
    try {
        const prodotto = await Productv2.findById(id); 
        if (!prodotto) {
            throw new Error('Prodotto non trovato');
        }
        return prodotto;
    } catch (error) {
        console.error('Errore durante il recupero del prodotto:', error.message);
        throw error;
    }
}

// funzione per recuperare i prodotti di un venditore
async function getProductByVendor(vend) {
    try {
        // Se vend è un ObjectId, puoi convertirlo in stringa con .toString()
        // Ma per confrontare con il campo 'venditore' in MongoDB, è meglio passare direttamente l'ObjectId o la stringa corretta
        const prodotti = await Productv2.find({ venditore: vend});
        return prodotti;
    } catch (error) {
        console.error('Errore durante il recupero dei prodotti del venditore:', error.message);
        throw error;
    }
}

async function addProduct(prodotto) {
    try {
        const nuovoProdotto = new Productv2(prodotto);
        await nuovoProdotto.save();
        return nuovoProdotto;
    } catch (error) {
        console.error('Errore durante l\'aggiunta del prodotto:', error.message);
        throw error;
    }
}

async function deleteProduct(id) {
    try {
        const prodotto = await Productv2.findByIdAndDelete(id);
        if (!prodotto) {
            throw new Error('Prodotto non trovato');
        }
        return prodotto;
    } catch (error) {
        console.error('Errore durante la cancellazione del prodotto:', error.message);
        throw error;
    }
}

async function updateProduct(descrizione,quantita,id) {
    try {
        const prodottoAggiornato = await Productv2.findByIdAndUpdate(
            id,
            { descrizione, quantita },
            { new: true }
        );
        if (!prodottoAggiornato) {
            throw new Error('Prodotto non trovato');
        }
        return prodottoAggiornato;
    } catch (error) {
        console.error('Errore durante l\'aggiornamento del prodotto:', error.message);
        throw error;
    }}


module.exports = { getProductById,getProductByVendor,addProduct,deleteProduct,updateProduct };