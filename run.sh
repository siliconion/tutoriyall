DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
export $(cat .env | xargs)
export FLASK_APP="$DIR/server/index.py"
export FLASK_DEBUG=1
flask run


