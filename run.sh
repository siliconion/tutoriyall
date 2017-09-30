DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
export FLASK_APP="$DIR/index.py"
export FLASK_DEBUG=1
flask run
