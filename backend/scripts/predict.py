import xgboost as xgb
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer

def load_model_and_vectorizer(model_path='../models/xgboost_model.json', vectorizer_path='../models/pickle/tfidf_vectorizer.pkl'):
    # Load the model
    bst = xgb.Booster()
    bst.load_model(model_path)
    
    # Load the vectorizer
    with open(vectorizer_path, 'rb') as f:
        vectorizer = pickle.load(f)
    
    return bst, vectorizer

def predict_with_loaded_model(text, model, vectorizer):
    # Transform the text data using the loaded vectorizer
    X = vectorizer.transform([text])
    
    # Convert to DMatrix
    dmatrix = xgb.DMatrix(data=X)
    
    # Make predictions
    preds = model.predict(dmatrix)
    prediction = 1 if preds[0] > 0.5 else 0
    
    return prediction

def main():
    model_path = 'xgboost_model.json'
    vectorizer_path = 'tfidf_vectorizer.pkl'
    
    # Load the model and vectorizer
    model, vectorizer = load_model_and_vectorizer(model_path, vectorizer_path)
    
    while True:
        # Get user input
        user_input = input("Enter text to classify (or 'exit' to quit): ")
        
        if user_input.lower() == 'exit':
            break
        
        # Predict using the loaded model
        prediction = predict_with_loaded_model(user_input, model, vectorizer)
        
        # Output the prediction
        print(f"Prediction: {'AI-generated' if prediction == 1 else 'Human-written'}")

if __name__ == '__main__':
    main()
