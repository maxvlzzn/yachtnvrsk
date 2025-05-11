from flask import Flask, request, jsonify
from models import db, Yacht, Review, Booking
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)

@app.before_first_request
def create_tables():
    db.create_all()

# CRUD операции для яхт

@app.route('/yachts', methods=['POST'])
def add_yacht():
    data = request.json
    new_yacht = Yacht(
        name=data['name'],
        type=data['type'],
        length=data['length'],
        price_per_day=data['price_per_day']
    )
    db.session.add(new_yacht)
    db.session.commit()
    return jsonify({'message': 'Yacht added!'}), 201

@app.route('/yachts', methods=['GET'])
def get_yachts():
    yachts = Yacht.query.all()
    return jsonify([{'id': yacht.id, 'name': yacht.name, 'type': yacht.type, 'length': yacht.length, 'price_per_day': yacht.price_per_day} for yacht in yachts])

@app.route('/yachts/<int:yacht_id>', methods=['GET'])
def get_yacht(yacht_id):
    yacht = Yacht.query.get_or_404(yacht_id)
    return jsonify({'id': yacht.id, 'name': yacht.name, 'type': yacht.type, 'length': yacht.length, 'price_per_day': yacht.price_per_day})

@app.route('/yachts/<int:yacht_id>', methods=['PUT'])
def update_yacht(yacht_id):
    data = request.json
    yacht = Yacht.query.get_or_404(yacht_id)
    yacht.name = data['name']
    yacht.type = data['type']
    yacht.length = data['length']
    yacht.price_per_day = data['price_per_day']
    db.session.commit()
    return jsonify({'message': 'Yacht updated!'})

@app.route('/yachts/<int:yacht_id>', methods=['DELETE'])
def delete_yacht(yacht_id):
    yacht = Yacht.query.get_or_404(yacht_id)
    db.session.delete(yacht)
    db.session.commit()
    return jsonify({'message': 'Yacht deleted!'})

# Поиск яхт по параметрам

@app.route('/search', methods=['GET'])
def search_yachts():
    query = request.args
    filters = {}
    
    if 'type' in query:
        filters['type'] = query['type']
    if 'max_price' in query:
        filters['price_per_day'] <= float(query['max_price'])
    
    yachts = Yacht.query.filter_by(**filters).all()
    return jsonify([{'id': yacht.id, 'name': yacht.name, 'type': yacht.type, 'length': yacht.length, 'price_per_day': yacht.price_per_day} for yacht in yachts])

# Добавление отзывов

@app.route('/yachts/<int:yacht_id>/reviews', methods=['POST'])
def add_review(yacht_id):
    data = request.json
    new_review = Review(
        content=data['content'],
        rating=data['rating'],
        yacht_id=yacht_id
    )
    db.session.add(new_review)
    db.session.commit()
    return jsonify({'message': 'Review added!'}), 201

@app.route('/yachts/<int:yacht_id>/reviews', methods=['GET'])
def get_reviews(yacht_id):
    yacht = Yacht.query.get_or_404(yacht_id)
    reviews = Review.query.filter_by(yacht_id=yacht.id).all()
    return jsonify([{'id': review.id, 'content': review.content, 'rating': review.rating} for review in reviews])

# Бронирование яхт

@app.route('/yachts/<int:yacht_id>/bookings', methods=['POST'])
def book_yacht(yacht_id):
    data = request.json
    new_booking = Booking(
        yacht_id=yacht_id,
        user_name=data['user_name'],
        start_date=data['start_date'],
        end_date=data['end_date']
    )
    db.session.add(new_booking)
    db.session.commit()
    return jsonify({'message': 'Booking created!'}), 201

@app.route('/yachts/<int:yacht_id>/bookings', methods=['GET'])
def get_bookings(yacht_id):
    bookings = Booking.query.filter_by(yacht_id=yacht_id).all()
    return jsonify([{'id': booking.id, 'user_name': booking.user_name, 'start_date': booking.start_date, 'end_date': booking.end_date} for booking in bookings])

@app.route('/bookings/<int:booking_id>', methods=['DELETE'])
def delete_booking(booking_id):
    booking = Booking.query.get_or_404(booking_id)
    db.session.delete(booking)
    db.session.commit()
    return jsonify({'message': 'Booking deleted!'})

if __name__ == '__main__':
    app.run(debug=True)