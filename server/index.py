from flask import Flask, redirect, url_for, session, request, jsonify, g
from flask_oauth import OAuth
from os import environ

User = {}

oauth = OAuth()
app = Flask(__name__, static_folder='../static')

app.secret_key = environ.get('SESSION_SECRET_KEY', 'secret')
GITHUB_CLIENT_ID = environ.get('CLIENT_ID', '')
GITHUB_CLIENT_SECRET = environ.get('CLIENT_SECRET', '')
GITHUB_CALLBACK_URL = environ.get('CALLBACK_URL', '')

github = oauth.remote_app('github',
                          base_url='https://api.github.com',
                          request_token_url=None,
                          access_token_url='https://github.com/login/oauth/access_token',
                          authorize_url='https://github.com/login/oauth/authorize',
                          consumer_key=GITHUB_CLIENT_ID,
                          consumer_secret=GITHUB_CLIENT_SECRET
                          )


@app.before_request
def before_request():
    g.user = None
    print "in the before"
    if 'oauth_token' in session and str(session['oauth_token']) in User:
        print User[str(session['oauth_token'])]
        g.user = User[str(session['oauth_token'])]


@app.after_request
def after_request(response):
    # db_session.remove()
    return response


@app.route('/')
def home():
    return app.send_static_file('index.html')


@app.route('/app.js')
def js():
    return app.send_static_file('app.js')


@app.route('/me')
def me():
    print g.user
    if g.user is None:
        return redirect(url_for('login', next=request.url))
    return jsonify(g.user)


@app.route('/auth/provider')
def login():
    print 'auth provider?'
    return github.authorize(
        callback=url_for('github_callback',
                         next=request.args.get('next') or request.referrer or None,
                         _external=True))


@app.route('/github_callback')
@github.authorized_handler
def github_callback(resp):
    if resp is None:
        return 'Access denied: reason=%s error=%s' % (
            request.args['error_reason'],
            request.args['error_description']
        )
    oauth_token = (resp['access_token'], '')
    session['oauth_token'] = oauth_token
    me = github.get('/user')
    User[str(oauth_token)] = me.data
    print "in call back"
    print User
    return redirect('/#!/user/{}'.format(me.data['id']))


@app.route('/logout')
def logout():
    session.pop('user_id', None)
    return redirect(request.referrer or url_for('index'))


@github.tokengetter
def get_github_oauth_token():
    return session.get('oauth_token')


if __name__ == '__main__':
    app.run()
