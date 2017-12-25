# Selenium Scripts (Magento 2 - add to cart || login)

The following selenium script are meant for sitespeed.io and/or mage.coach (future release).
Please setup a working sitespeed docker and clone/use the following script as an example.


The login script is straighfoward and using the default login details provided by the Magento 2 sample data. Change them is needed.

`
/usr/local/bin/docker-compose run sitespeed.io url-single-login.txt --preScript login.js -n 1  >> /tmp/sitespeed-output.txt 2>&1
`

Before you can run the "add to cart" script please change a setting in the Magento 2 backend.

Stores -> Configuration -> Sales -> Checkout -> Shopping Cart -> After Adding a Product Redirect to Shopping Cart (Yes)	

Magento 2 is using a ajax call while putting a product in a shopping basket. The current Selenium script will only support the "After Adding a Product Redirect to Shopping Cart" option set to YES.

The "add2cart.js" will post a fixed url while overriding the "form_key" cookie.
Please update the the "url-single-add2cart.txt" file to your needs. Your can pick any simple product sku ID. we use currently id=1 and quanty=1

Only there a many other checkout/cart/add/product available if you want to use this script as a configurable product. 

`
/usr/local/bin/docker-compose run sitespeed.io url-single-add2cart.txt --preScript add2cart.js -n 1  >> /tmp/sitespeed-output.txt 2>&1
`

The following script will use a --portScript and check if the page is well loaded

`
 /usr/local/bin/docker-compose run sitespeed.io url-single-add2cart.txt --preScript add2cart.js --postScript post.js  -n 1  >> /tmp/sitespeed-output.txt 2>&1
`
