import React, { useState } from 'react';

import { post } from 'axios';
import { Link } from 'react-router-dom';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './UploadAudioAndPredict.scss';

const PredictionResult = (props) => (
  <div className='prediction-result-wrapper input-slide-down-animation'>
    <p className='result-text'>
      Our Neural Network Predicted: <strong> {props.result}</strong>! 🎶 🎉
    </p>
    <div className='info-box-wrapper'>
      <span className='symbol-input100'>
        <i className='fa fa-info' aria-hidden='true'></i> The predicted music genre
        appears to be wrong?
      </span>
      <p>
        Go <Link to='/about'>here</Link> to figure out more details the possible
        outputs of the model and learn more about our research.
      </p>
    </div>
  </div>
);

const ErrorMessage = (props) => (
  <div className='error-message-wrapper input-slide-down-animation'>
    <div className='info-box-wrapper'>
      <span className='symbol-input100'>
        <i className='fa fa-exclamation-triangle' aria-hidden='true'></i> Error!
        Please be sure that you've selected a valid mp3 file.
      </span>
    </div>
  </div>
);

export const UploadAudioAndPredict = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [audioLink, setAudioLink] = useState(null);
  const [predictedGenre, setPredictedGenre] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submit = () => {
    const data = new FormData();
    data.append('audio_file', selectedFile);
    let url = process.env.REACT_APP_API_URI + '/predict';
    setLoading(true);
    setErrorMessage('');
    setPredictedGenre('');
    post(url, data, {})
      .then((res) => {
        setPredictedGenre(res.data.predicted);
      })
      .catch((err) => {
        setErrorMessage('Error');
        console.warn(err);
      })
      .finally(() => setLoading(false));
  };

  const reset = () => {
    setPredictedGenre('');
    setSelectedFile(null);
    setAudioLink(null);
    setPredictedGenre('');
    props.setActive(false);
    setErrorMessage('');
  };

  const handleInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setErrorMessage('');
    const url = URL.createObjectURL(e.target.files[0]);
    setAudioLink(url);
  };

  return (
    <div className='input-slide-down-animation'>
      <div className='form-row'>
        <div className='form-group'>
          <input
            type='file'
            className='form-control'
            name='audio_file'
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='form-row'>
        {selectedFile && <AudioPlayer autoPlay={false} src={audioLink} />}
      </div>

      <div className='form-row prediction-btn-wrapper'>
        <button
          type='submit'
          className='btn btn-dark'
          disabled={!selectedFile}
          onClick={() => submit()}
        >
          {loading ? (
            <span>
              <span
                class='spinner-border spinner-border-sm'
                role='status'
                aria-hidden='true'
              ></span>
              Loading
            </span>
          ) : (
            'Predict Genre'
          )}
        </button>
        <button className='btn btn-dark' onClick={() => reset()}>
          Reset
        </button>

        {errorMessage && <ErrorMessage />}
        {predictedGenre && <PredictionResult result={predictedGenre} />}
      </div>
    </div>
  );
};
