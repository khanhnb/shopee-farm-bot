# shopee-farm-bot

Bots for Shopee farm

## How to give anonymous water

Replace shareKey with your skey in https://games.shopee.vn/farm/share.html?skey=c8f5faa80a0fd559e179ff3eb4204821&schannel=copyLink (Use your share link)

```bash
yarn install
node demo.js
```

## ShopeeFarm anonymous water
To receive help from your "friends"
```curl
curl --request POST \
  --url https://games.shopee.vn/farm/api/friend/anonymous/help \
  --data '{
	"shareKey": "42d84636f919ce0065a06a5458da956c",
	"channel": "copyLink",
	"s": "0YuZUhmE3Fet1gjewbjCEGYwgh2idAumijizvNInWWg+l9My5OWS4QyHwSDpaF0h/KNyfjVYAwVx1S2ms2/DO33BTovf+ZjI2IutQHpfjh7JJWb7O5fwRIRRZuqizz18aorDi38Q0k4=cf5d00f6aaf84bcbb0f3f113e88592bdM2VjOWVjNDhhZjMwYjBkODI2YjA4ZTEwMWMxMzgwMmFhNmQ0NzAwNmFjYjAyOThjOTg5YzVlOWNjNDM3ZTM5NQ==58"
}'
```
Shopee uses a `s` token to avoid cheating. `s` is a little tricky to get. See `nonymous-water.js` for more details.

## ShopeeFarm water
```curl
curl --request POST \
  --url https://games.shopee.vn/farm/api/orchard/crop/water \
  --header 'Content-Type: application/json' \
  --header 'Cookie: SPC_EC=[SPC_EC]' \
  --data '{
	"cropId": 3678654292,
	"resourceId": 6013820,
	"s": "AAAAAAAAAAAAAAAAAAAAABNroNSQ85xpHMw7Q3UQgl66thxQw+4CieSYieLIF8o+"
}'
```
This time, Shopee uses a completely different way to secure their request. I'm working on it.