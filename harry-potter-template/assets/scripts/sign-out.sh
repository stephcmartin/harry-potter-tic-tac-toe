#BAhJIiU3NmE3NDZkOTEwZDEwNGQ5MzU3NjdlZjAyOTc0ZDVmOQY6BkVG--843d16f3bec154c6c9bdb9303ee38243ff3d2891

API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/delete?id=$ID"
# API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
# URL_PATH="/sign-out/$ID"

curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \

echo
