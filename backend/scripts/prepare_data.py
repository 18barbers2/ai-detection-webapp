import pandas as pd
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer, PorterStemmer
import re
import random
from sklearn.feature_extraction.text import TfidfVectorizer

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

def vectorize_data(df):
    vectorizer = TfidfVectorizer(max_features = 5000)

    X = vectorizer.fit_transform(df['text'])
    y = df['human']

    return_tuple = (X, y)



if (__name__ == '__main__'):
    # print(stopword_removal())
    index = random.randint(1, data['text'].size)
    
    sample_df = data.sample(20)
    print(sample_df)

    print(vectorize_data(sample_df))

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


    
