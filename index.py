from flask import Flask

app = Flask(__name__, static_url_path='/static')
# app.secret_key = secret_key
# app.register_blueprint(links_api)
# app.register_blueprint(users_api)
#
# CORS(app)
@app.route('/')
def home():
    return app.send_static_file('index.html')

@app.route('/test2')
def test():
    return "test dude 2312"

@app.route('/github_callback', methods=['POST'])
def login():
    code = request.get_json()['code']
    post_data = {'client_id': client_id,
                 'client_secret':  client_secret,
                 'code': code}
    response = requests.post('https://github.com/login/oauth/access_token', data=post_data)
    print response.text
    # access_token = dict(parse_qs(response.text))['access_token'][0]
    access_token = response.text.split('&')[0].split('=')[1]
    user_info = requests.get('https://api.github.com/user?access_token={}'.format(access_token)).json()
    username= user_info['login']
    user_id=str(user_info['id'])
    avatar_url=user_info['avatar_url']
    name= user_info['name']
    resp = jsonify(userid=user_id,
                   username=username,
                   name=name,
                   avatar_url=avatar_url)
    UsersConnection.save_user(userid=user_id,
                              username=username,
                              name=name,
                              avatar_url=avatar_url)
    return resp


if __name__=='__main__':
    app.run()
