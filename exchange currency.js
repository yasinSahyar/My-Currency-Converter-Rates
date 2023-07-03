class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=HH6BUT4z7ZQxtlq8rRUGCImtAnKGBkWb5ToIljue&base_currency=";
    }

    async exchange(amount, firstCurrency ,secondCurrency ){
        const response = await fetch(`${this.url}${firstCurrency}`);

        const result = await response.json();
        const exchangeResult = amount * result.data[secondCurrency];

        return exchangeResult;
        
    }
}