from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Yacht(db.Model):
    __tablename__ = 'yachts'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    type = db.Column(db.String(50), nullable=False)
    length = db.Column(db.Float, nullable=False)
    price_per_day = db.Column(db.Float, nullable=False)
    
    reviews = db.relationship('Review', backref='yacht', lazy=True)
    bookings = db.relationship('Booking', backref='yacht', lazy=True)

class Review(db.Model):
    __tablename__ = 'reviews'
    
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(500), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    yacht_id = db.Column(db.Integer, db.ForeignKey('yachts.id'), nullable=False)

class Booking(db.Model):
    __tablename__ = 'bookings'
    
    id = db.Column(db.Integer, primary_key=True)
    yacht_id = db.Column(db.Integer, db.ForeignKey('yachts.id'), nullable=False)
    user_name = db.Column(db.String(100), nullable=False)
    start_date = db.Column(db.DateTime, nullable=False)
    end_date = db.Column(db.DateTime, nullable=False)

    def __repr__(self):
        return f'<Booking {self.id} for Yacht {self.yacht_id}>'