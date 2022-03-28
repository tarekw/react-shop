# A small react application to simulate a shop catalog

Upon entering the site, the user is presented with a login screen. The data for the site is coming from https://fakestoreapi.com/docs and the user can log in using the publicly available credentials (username: `mor_2314` password `83r5^_`). Since the other REST apis don't require an actual token to be added to the requests, for the sake of this demo we are only using the token to sign in and switch the user from the login to the home page displaying the catalog.

Please note that the demo server occasionally does not attach the `access-control-allow-origin: *` header to the responses which causes a `CORS` error in the browser. Usually reloading it automatically resolves the issue.

## Available Scripts

In the project directory, you can run:

### `yarn start`
### `yarn test`

## Features

- A login form with validation and error handling, storing the response token on successful submission. ✅
- On login - the app shows a list of all product categories. ✅
- The user having the ability to drill down to a products list featuring all products from the selected category. ✅
- Each product on the product list screen will feature an ‘Add to cart’ button and a ‘Remove from cart’ button. Each button should add /remove products from the state ✅
- The number of current items contained in the cart should be visible on the category and product list screen at all times and reflect the underlying state ✅
- The cart screen does not need to be navigated to for this task ✅
- Appropriate tests should be added, using the jest framework. We aren’t expecting full test coverage. ✅

## Screenshots

### Login
<img width="646" alt="Screenshot 2022-03-28 at 13 14 55" src="https://user-images.githubusercontent.com/1178216/160395780-fba90542-426c-42a1-96fe-7d064790936d.png">

### Home

<img width="712" alt="Screenshot 2022-03-28 at 13 14 43" src="https://user-images.githubusercontent.com/1178216/160395856-96786623-189b-4573-a5c6-b6c409848762.png">

### Product detail

<img width="763" alt="Screenshot 2022-03-28 at 13 57 50" src="https://user-images.githubusercontent.com/1178216/160402866-1af58c4f-726e-4037-bab1-0814e4f72e7c.png">

