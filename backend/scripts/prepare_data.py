import pandas as pd
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer, PorterStemmer
import re
import random
from sklearn.feature_extraction.text import TfidfVectorizer
import xgboost as xgb
import numpy as np
from sklearn.model_selection import GridSearchCV, train_test_split
from sklearn.metrics import accuracy_score, classification_report
import pickle

data = pd.read_csv('../data/processed_data.csv')

# nltk.download('stopwords')
# nltk.download('wordnet')

def tokenize(text):
    return nltk.word_tokenize(text)

def stopword_removal(tokens):
    stop_words = set(stopwords.words('english'))
    filtered_words = [token for token in tokens if token.lower() not in stop_words and token]
    return filtered_words


def lemmatization(tokens):
    lemmatizer = WordNetLemmatizer()
    lemmatized_tokens = [lemmatizer.lemmatize(token) for token in tokens if token]
    return lemmatized_tokens


def strip_characters(tokens):
    clean_tokens = [re.sub(r'[^a-zA-Z0-9\s]', '', token) for token in tokens]
    clean_tokens = [re.sub(r'\s+', ' ', token).strip() for token in clean_tokens if token]
    return clean_tokens

def stemming(tokens):
    stemmer = PorterStemmer()
    stemmed_tokens = [stemmer.stem(token) for token in tokens if token]
    return stemmed_tokens

def process_data(text):
    return text

def vectorize_data_and_train_xgboost(df):
    vectorizer = TfidfVectorizer()
    # vectorizer = TfidfVectorizer(max_features = 50000)


    X = vectorizer.fit_transform(df['text'])
    y = df['human']

    dtrain = xgb.DMatrix(data = X, label = y)

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    dtrain = xgb.DMatrix(data = X_train, label = y_train)
    dtest = xgb.DMatrix(data = X_test, label = y_test)

    params = {
        'objective': 'binary:logistic',  # for binary classification
        'max_depth': 3,
        'learning_rate': 0.1,
        'n_estimators': 100
    }

    # param_grid = {
    #     'max_depth': [3, 5, 7],
    #     'learning_rate': [0.01, 0.1, 0.3],
    #     'n_estimators': [50, 100, 200],
    #     'subsample': [0.8, 1.0],
    #     'colsample_bytree': [0.8, 1.0],
    # }

    param_grid = {
        'max_depth': [3, 5, 7],
        'learning_rate': [0.01, 0.1, 0.3],
        'n_estimators': [50, 100]
    }

    

    xgb_model = xgb.XGBClassifier(objective='binary:logistic')
    grid_search = GridSearchCV(estimator=xgb_model, param_grid=param_grid, scoring='accuracy', cv=2, n_jobs=-1)
    grid_search.fit(X_train, y_train)

    print("Best parameters found: ", grid_search.best_params_)

    bst = xgb.train(grid_search.best_params_, dtrain, num_boost_round=10)

    preds = bst.predict(dtest)
    predictions = [1 if x > 0.5 else 0 for x in preds]

    # Evaluate
    print("Accuracy:", accuracy_score(y_test, predictions))
    print("Classification Report:")
    print(classification_report(y_test, predictions))

    # Save the model
    bst.save_model("xgboost_model.json")
    
    # Save the vectorizer
    with open('tfidf_vectorizer.pkl', 'wb') as f:
        pickle.dump(vectorizer, f)



if (__name__ == '__main__'):
    # print(stopword_removal())
    index = random.randint(1, data['text'].size)
    
    sample_df = data.sample(10000)
    print(sample_df)

    vectorize_data_and_train_xgboost(sample_df)



    # test = tokenize(test)
    # print(test)
    # test = strip_characters(test)
    # print(test)
    # test = stopword_removal(test)
    # print(test)
    # test = lemmatization(test)
    # print(test)
    # test = stemming(test)
    # print(test)


    
