# selenium-scripts



`
/usr/local/bin/docker-compose run sitespeed.io url-single-login.txt --preScript login.js -n 1  >> /tmp/sitespeed-output.txt 2>&1
`

`
/usr/local/bin/docker-compose run sitespeed.io url-single-add2cart.txt --preScript add2cart.js -n 1  >> /tmp/sitespeed-output.txt 2>&1
`

`
 /usr/local/bin/docker-compose run sitespeed.io url-single-add2cart.txt --preScript add2cart.js --postScript post.js  -n 1  >> /tmp/sitespeed-output.txt 2>&1
`
