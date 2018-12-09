# Showcase of Solr features on Twitter data

## API service requirement

- Requirement python 3.x
- Install newspaper3k package
  > pip install newspaper3k

- Install Flask
  - Clone and install googletrans https://github.com/ssut/py-googletrans
    > python setup.py install
  - Go to IR-project4/summarization_api/ and run python main.py

- run the UI application with `npm run start:dev`

## Frontend

A simple ReactJS frontend application that allows to query information using [JSON Request API](https://lucene.apache.org/solr/guide/7_1/json-request-api.html), retrieving information regarding
consolidated data and relevant result.
