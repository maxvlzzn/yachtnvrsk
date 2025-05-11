import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///yachts.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False