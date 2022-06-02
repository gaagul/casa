
from flask import Flask,request,jsonify
import numpy as np
from flask_cors import CORS, cross_origin
import pickle

model = pickle.load(open('model.pkl','rb'))
# print(model.predict(f))

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/")
@cross_origin()
def hello():
    return "Hello, World!"

@app.route("/predict", methods=['POST'])
@cross_origin()
def runModel():
    data = request.get_json(force=True)["inputData"]
    input_arr = [data['nobed'],data['nobath'],data['sqft_living'], data["sqft_total"], data["nof"], data['waterfront'], data['view'], data['condition'], data['sqft_above'], data['sqft_basement'], data['yr_built'], data['yr_renovated'], data['latitude'], data['longitude'], data['sqft_livabove'], data['sqft_total']]
    input_int_arr = [float(x) for x in input_arr]
    prediction = model.predict([np.array(input_int_arr)])
    output = prediction[0]
    return jsonify(output)
    
    
    # output = {"output": "Hello"}
    # return output    