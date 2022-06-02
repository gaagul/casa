#!/usr/bin/env python
# coding: utf-8

# In[238]:


import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import mpl_toolkits
import pickle
import requests 
import json
# get_ipython().run_line_magic('matplotlib', 'inline')


# In[239]:


data = pd.read_csv("C:/Users/gokul/OneDrive/Documents/Project/house-price-prediction-master/kc_house_data.csv")


# In[240]:


from sklearn.linear_model import LinearRegression


# In[241]:


reg = LinearRegression()


# In[242]:


labels = data['price']
conv_dates = [1 if values == 2014 else 0 for values in data.date ]
data['date'] = conv_dates
train1 = data.drop(['id', 'price'],axis=1)


# In[243]:


train1 = data.drop(['id', 'price','date','zipcode',  'grade'
       ],axis=1)


# In[244]:


from sklearn.model_selection import train_test_split


# In[245]:


x_train , x_test , y_train , y_test = train_test_split(train1 , labels , test_size = 0.10,random_state =2)


# In[246]:


reg.fit(x_train,y_train)


# In[247]:


reg.score(x_test,y_test)


# In[248]:


from sklearn import ensemble
clf = ensemble.GradientBoostingRegressor(n_estimators = 400, max_depth = 5, min_samples_split = 2,
          learning_rate = 0.1, loss = 'ls')


# In[249]:


clf.fit(x_train, y_train)


# In[250]:


clf.score(x_test,y_test)


# In[251]:


y_pred = clf.predict(x_test)


# In[252]:


pickle.dump(clf, open('model.pkl','wb'))



# In[254]:


#f=[[4, 3, 500,7000, 2, 0,1, 4, 3451, 0,2000,0,47.6295,100.34, 2500,7000]]







