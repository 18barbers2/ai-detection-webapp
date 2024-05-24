import pandas as pd

# @misc {aaditya_bhat_2023,
# 	author       = { {Aaditya Bhat} },
# 	title        = { GPT-wiki-intro (Revision 0e458f5) },
# 	year         = 2023,
# 	url          = { https://huggingface.co/datasets/aadityaubhat/GPT-wiki-intro },
# 	doi          = { 10.57967/hf/0326 },
# 	publisher    = { Hugging Face }
# }



def format_data():
    # original data
    data = pd.read_csv('../data/GPT-wiki-intro.csv')

    # generated text column
    ai_data = pd.DataFrame(data['generated_text'])
    ai_data.rename(columns = { 'generated_text' : 'text' }, inplace=True)
    ai_data['human'] = 0

    # human text column
    human_data = pd.DataFrame(data['wiki_intro'])
    human_data.rename(columns = { 'wiki_intro' : 'text' }, inplace=True)
    human_data['human'] = 1

    # combine these rows
    result = pd.concat([human_data, ai_data], axis=0)

    result.to_csv('../data/processed_data.csv', index=False)

    print(result.shape)
    



if (__name__ == '__main__'):
    format_data()