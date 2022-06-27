import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app, storage } from "../../firebase/firebaseApp";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { async } from "@firebase/util";

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

export default function Form() {
  const [imgUrl, setImgUrl] = useState([]);
  const [progresspercent, setProgresspercent] = useState(0);
  const [predictedPrice, setPredictedPrice] = useState(0.0);

  const db = getFirestore(app);

  const runModel = () => {
    const inputData = {
      nobed: getElementVal("numberofbedrooms"),
      nobath: getElementVal("numberofbathrooms"),
      sqft_living: getElementVal("sqft_living"),
      sqft_total: getElementVal("sqft_total"),
      nof: getElementVal("numberoffloors"),
      waterfront: getElementVal("waterfront"),
      view: getElementVal("directionoffront"),
      condition: getElementVal("condition"),
      sqft_above: getElementVal("sqft_above"),
      sqft_basement: getElementVal("sqft_basement"),
      yr_built: getElementVal("yr_built"),
      yr_renovated: getElementVal("yr_renovated"),
      latitude: getElementVal("latitude"),
      longitude: getElementVal("longitude"),
      sqft_livabove: getElementVal("sqft_livabove"),
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inputData }),
    };
    fetch("http://127.0.0.1:5000/predict", requestOptions)
      .then((res) => res.json())
      .then((res) => setPredictedPrice(Math.floor((res / 100) * 4)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setImgUrl([])
    let files = [];
    for (let i = 0; i < e.target[0].files.length; ++i) {
      const file = e.target[0].files[i];
      file["id"] = Math.random();
      files.push(file);
    }

    if (!files) return;
    files.map((file) => {
      const storageRef = ref(storage, `${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("DownloadURL: " + downloadURL);
          setImgUrl((prevState)=>[...prevState, downloadURL]);
        });
      }
    );
    });

    
    //File upload completed to Firebase

    var hlocation = getElementVal("hlocation");
    var sqft_total = getElementVal("sqft_total");
    var name = getElementVal("nameofproperty");
    var sqft_living = getElementVal("sqft_living");
    var nobed = getElementVal("numberofbedrooms");
    var nobath = getElementVal("numberofbathrooms");
    var nogarages = getElementVal("numberofgarages");
    var nof = getElementVal("numberoffloors");
    var waterfront = getElementVal("waterfront");
    var view = getElementVal("directionoffront");
    var desc = getElementVal("description");
    var condition = getElementVal("condition");
    var sqft_above = getElementVal("sqft_above");
    var Price = getElementVal("price");
    var sqft_basement = getElementVal("sqft_basement");
    var yr_built = getElementVal("yr_built");
    var yr_renovated = getElementVal("yr_renovated");
    var latitude = getElementVal("latitude");
    var longitude = getElementVal("longitude");
    var sqft_livabove = getElementVal("sqft_livabove");
    var seller_name = getElementVal("seller_name");
    var seller_number = getElementVal("seller_number");

    try {
      const docRef = await addDoc(collection(db, "sellForm"), {
        Location: hlocation,
        Sqft_total: sqft_total,
        Name_of_Property: name,
        Sqft_living: sqft_living,
        Number_of_Bedrooms: nobed,
        Number_of_Bathrooms: nobath,
        Number_of_Garages: nogarages,
        Number_of_Floors: nof,
        Waterfront: waterfront,
        Description: desc,
        View: view,
        Condition: condition,
        Sqft_above: sqft_above,
        Price: Price,
        Image_URL: imgUrl,
        Sqft_basement: sqft_basement,
        yr_built: yr_built,
        yr_renovated: yr_renovated,
        latitude: latitude,
        longitude: longitude,
        sqft_livabove: sqft_livabove,
        seller_name: seller_name,
        seller_number: seller_number,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" multiple  />
        <div class="row">
          <div class="col-md-6 mb-4 pb-2">
            <div class="form-outline">
              <input
                type="text"
                id="nameofproperty"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="nameofproperty">
                Name of Property
              </label>
            </div>
          </div>
          <div class="col-md-6 mb-4 pb-2">
            <div class="form-outline">
              <input
                type="number"
                id="sqft_total"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="sqft_total">
                Total Sqft
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="form-outline">
              <input
                type="number"
                id="sqft_living"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="sqft_living">
                Sq.ft living
              </label>
            </div>
          </div>
          <div class="col-md-6 mb-4 pb-2">
            <div class="form-outline">
              <input
                type="text"
                id="hlocation"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="hlocation">
                Location
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="form-outline">
              <input
                type="number"
                id="numberofbedrooms"
                placeholder="Number of Bedrooms"
                class="form-control form-control-lg"
                min="0"
              />
              <label class="form-label" for="numberofbedrooms">
                Number of Bedrooms
              </label>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="form-outline">
              <input
                type="number"
                id="numberofbathrooms"
                placeholder="Number of Bathrooms"
                class="form-control form-control-lg"
                min="0"
              />
              <label class="form-label" for="numberofbathrooms">
                Number of Bathrooms
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="form-outline">
              <input
                type="number"
                id="numberofgarages"
                placeholder="Number of Garages"
                class="form-control form-control-lg"
                min="0"
              />
              <label class="form-label" for="numberofgarages">
                Number of Garages
              </label>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="form-outline">
              <input
                type="number"
                id="numberoffloors"
                placeholder="Number of Floors"
                class="form-control form-control-lg"
                min="0"
              />
              <label class="form-label" for="numberoffloors">
                Number of Floors
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4 pb-2">
            <div class="form-outline">
              <input
                type="number"
                id="waterfront"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="waterfront">
                waterfront
              </label>
            </div>
          </div>
          <div class="col-md-6 mb-4 pb-2">
            <div class="form-outline">
              <input
                type="number"
                id="condition"
                placeholder="condition"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="condition">
                Condition(out of 10)
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="form-outline">
              <select
                class="form-control form-control-lg"
                placeholder="Select Suitable Option"
                id="directionoffront"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              <label class="form-label" for="directionoffront">
                View[1(North) 2(South) 3(East) 4(West)]
              </label>
            </div>
          </div>
          <div class="col-md-6 mb-4 pb-2">
            <div class="form-outline">
              <input
                type="number"
                id="sqft_above"
                placeholder="sqft_above"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="sqft_above">
                Sqft_above
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4 pb-2">
            <div class="form-outline">
              <input
                type="text"
                id="sqft_basement"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="sqft_basement">
                Sqft_basemnet
              </label>
            </div>
          </div>
          <div class="col-md-6 mb-4 pb-2">
            <div class="form-outline">
              <input
                type="number"
                id="yr_built"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="yr_built">
                Year built
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4 pb-2">
            <div class="form-outline">
              <input
                type="number"
                id="yr_renovated"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="yr_renovated">
                Year Renovated
              </label>
            </div>
          </div>
          <div class="col-md-6 mb-4 pb-2">
            <div class="form-outline">
              <input
                type="number"
                id="sqft_livabove"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="sqft_livabove">
                sqft_living_above
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4 pb-2">
            <div class="form-outline">
              <input
                type="float"
                id="latitude"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="latitude">
                Latitude
              </label>
            </div>
          </div>
          <div class="col-md-6 mb-4 pb-2">
            <div class="form-outline">
              <input
                type="float"
                id="longitude"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="longitude">
                Longitude
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4 pb-2">
            <div class="form-outline">
              <input
                type="text"
                id="seller_name"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="seller_name">
                Seller Name
              </label>
            </div>
          </div>
          <div class="col-md-6 mb-4 pb-2">
            <div class="form-outline">
              <input
                type="text"
                id="seller_number"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="seller_number">
                Seller Number
              </label>
            </div>
          </div>
        </div>

        <div class="form-outline">
          <textarea
            rows={5}
            type="text"
            id="description"
            name="description"
            class="form-control form-control-lg"
          />
          <label class="form-label" for="description">
            Description
          </label>
        </div>
        <div class="mt-4 pt-2">
          <button class="btn btn-primary btn-lg btn-block" onClick={runModel}>
            Run Model
          </button>
        </div>

        <div class="form-outline mb-4" style={{ marginTop: "20px" }}>
          <input
            type="text"
            id="predicted-price"
            name="price"
            class="form-control form-control-lg"
            value={predictedPrice}
          />
          <label class="form-label" for="predicted-price">
            Predicted Price
          </label>
        </div>

        <div class="form-outline mb-4" style={{ marginTop: "80px" }}>
          <input
            type="text"
            id="price"
            name="price"
            class="form-control form-control-lg"
          />
          <label class="form-label" for="price">
            Price
          </label>
        </div>
        <div class="mt-4 pt-2">
          <button type="submit" class="btn btn-primary btn-lg btn-block">
            Register
          </button>
        </div>
        <div class="mt-4 pt-2">
          <button
            type="reset"
            class="btn btn-primary btn-lg btn-block"
            style={{ marginBottom: "50px" }}
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
}
