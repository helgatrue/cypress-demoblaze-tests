export class LogIn {
    static LogInButton = '#login2';
    static UsernameField = '#loginusername';
    static PasswordField = '#loginpassword';
    static LogOutButton = '#logout2';
    static LogInModalSubmitButton = 'button[onclick="logIn()"]';
}

export class Purchase {
    static LaptopButton = 'Laptops';
    static MacBookItem = 'MacBook air'
    static AddToCartButton = 'Add to cart';
    static BasketButton = '#cartur';
    static PlaceOrderButton = 'Place Order';
}

export class CustomerDetails {
    static Name = '#name';
    static Country = '#country';
    static City = '#city';
    static CardNumber = '#card';
    static CardMonth = '#month';
    static CardYear = '#year';
    static BuyButton = 'Purchase';
    static ConfirmationWindow = '.sweet-alert p.lead';
    static SubmitButton = '.confirm';
}