import pandas as pd
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer, PorterStemmer
import re
import random

data = pd.read_csv('../data/processed_data.csv')

# nltk.download('stopwords')
# nltk.download('wordnet')

def stopword_removal():
    stop_words = set(stopwords.words('english'))
    words = ["This", "is", "a", "sample", "sentence"]
    filtered_words = [word for word in words if word.lower() not in stop_words]
    return filtered_words


def lemmatization():
    return


def strip_characters(text):
    clean = re.sub(r'[^a-zA-Z0-9\s]', '', text)
    clean = re.sub(r'\s+', ' ', clean).strip()
    return clean

def stemming():
    return


if (__name__ == '__main__'):
    # print(stopword_removal())
    index = random.randint(1, data['text'].size)

    print(strip_characters(data['text'][index]))
    print('\n\n')
    print(data['text'][index])
    
