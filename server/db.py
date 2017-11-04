from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

association_table = db.Table('association',
                             db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
                             db.Column('tutorial_id', db.Integer, db.ForeignKey('tutorial.id')),
                             db.Column('tag_id', db.Integer, db.ForeignKey('tag.id'))
                             )


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True)
    avatar = db.Column(db.String(50))
    tutorials = db.relationship('Tutorial',
                                secondary=association_table,
                                backref=db.backref('users', lazy=True))
    tags = db.relationship('Tag',
                           secondary=association_table,
                           backref=db.backref('users', lazy=True))

    def __init__(self, id, username, avatar=None):
        self.id = id
        self.username = username
        self.avatar = avatar


class Tutorial(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(200), unique=True)
    users = db.relationship('User',
                            backref=db.backref('posts', lazy=True))
    tags = db.relationship('Tag',
                           secondary=association_table)

    def __init__(self, id, url):
        self.id = id
        self.url = url


class Tag(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), unique=True)

    def __init__(self, name, url):
        self.name = name
        self.url = url
