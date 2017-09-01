#!/bin/bash

#ID=40 OLDPW="taco" NEWPW="moretacos" TOKEN=BAhJIiU5YTg3MTRlNWVlNmU4MzhkNGM1Mjk5OTc2MzczMmM0MAY6BkVG--be9adc4fa0d7e3a6abec2e90a2a972f90a164685 sh scripts/change-password-json.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/patch?id=${ID}"
API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
URL_PATH="/change-password/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo
